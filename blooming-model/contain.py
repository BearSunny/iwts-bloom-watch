import numpy as np
import pandas as pd

df = pd.read_csv('data.csv')

unnessary_features = ['Observation_ID', 'Update_Datetime', 'Observation_Time', 
                      'Site_ID', 'Site_Name', 
                      'Individual_ID', 
                      'Phenophase_ID', 'Phenophase_Category', 'Phenophase_Description', 
                      'Intensity_Category_ID', 'Intensity_Value', 'Abundance_Value', 
                      'Kingdom', 'Species_Category']

df = df.drop(columns=unnessary_features)
df = df[df['Day_of_Year'] <= 365]

# ---------- Drop Phenophase_Status == -1 and report ----------
before = len(df)
df = df[df['Phenophase_Status'] != -1].copy()
after = len(df)
print(f"Rows before: {before}, after dropping Phenophase_Status==-1: {after}, dropped: {before-after}")

# ---------- Fix -9999 error codes in climate features ----------
climate_features = ['AGDD','Tmax','Tmin','Prcp','Accum_Prcp','Daylength']
# convert -9999 -> NaN
df[climate_features] = df[climate_features].replace(-9999, np.nan)

# convert Observation_Date to datetime & create year
df['Observation_Date'] = pd.to_datetime(df['Observation_Date'])
df['year'] = df['Observation_Date'].dt.year

# create site_id from lat/lon (simple deterministic encoding)
df['site_id'] = (df['Latitude'].round(4).astype(str) + '_' + df['Longitude'].round(4).astype(str))
# Optionally map to integers:
df['site_id'] = pd.factorize(df['site_id'])[0] + 1  # site_id as ints starting at 1

# create daily mean temperature (pyPhenology examples use "temperature")
df['temperature'] = (df['Tmax'] + df['Tmin']) / 2.0

# ---------- Interpolate climate missing values per site (time-series interpolation) ----------
# sort then interpolate by site
df = df.sort_values(['site_id','Observation_Date'])
df[climate_features] = df.groupby('site_id')[climate_features].transform(
    lambda g: g.interpolate(method='linear', limit_direction='both')
)
# if still NaN (edges), fill with column median (per-site median could be used)
df[climate_features] = df[climate_features].fillna(df[climate_features].median())

# also recompute temperature if it used NaNs earlier
df['temperature'] = (df['Tmax'] + df['Tmin']) / 2.0

# ---------- Create observations DataFrame (first bloom DOY) ----------
# define first bloom per site-species-year: min Day_of_Year where Phenophase_Status==1
bloom_obs = (
    df[df['Phenophase_Status'] == 1]
    .groupby(['site_id','Species','year'], as_index=False)['Day_of_Year']
    .min()
    .rename(columns={'Species':'species', 'Day_of_Year':'doy'})
)
# If you prefer use Species_ID instead of species string:
# bloom_obs = bloom_obs.rename(columns={'Species_ID':'species_id', ...})

# pyPhenology example uses a 'phenophase' id; set a single id (e.g. 501 for 'flowers')
bloom_obs['phenophase'] = 501

# final observations DataFrame columns: ['species','site_id','year','doy','phenophase']
observations = bloom_obs[['species','site_id','year','doy','phenophase']]

print("Observations (first bloom) sample:")
print(observations.head())

# ---------- Create predictors DataFrame (daily temperature series) ----------
# pyPhenology predictors expected columns: at least ['site_id','temperature','year','doy']
predictors = df[['site_id','temperature','year','Day_of_Year']].rename(columns={'Day_of_Year':'doy'})
# ensure types
predictors = predictors.astype({'site_id': int, 'year': int, 'doy': float, 'temperature': float})

print("Predictors sample:")
print(predictors.head())

# ---------- Split train/test (by year) ----------
years = sorted(observations['year'].unique())
# hold out the latest year as test
test_year = years[-1]
train_years = years[:-1]

obs_train = observations[observations['year'].isin(train_years)]
obs_test  = observations[observations['year'] == test_year]

preds_train = predictors[predictors['year'].isin(train_years)]
preds_test  = predictors[predictors['year'] == test_year]

print(f"Train site-year combos: {len(obs_train)}; Test site-year combos: {len(obs_test)}")

# ---------- Train model with pyPhenology ----------
from pyPhenology import models

# ThermalTime model (standard growing-degree-days)
model = models.ThermalTime()

# Fit on training observations + predictors
# NOTE: fit may take a bit; uses scipy optimizers internally.
model.fit(obs_train, preds_train)

# fitted parameters
params = model.get_params()
print("Fitted model parameters:", params)

# ---------- Predict on test ----------
# prepare to_predict - unique site/species/year combos we want predictions for
to_predict = obs_test[['site_id','species','year']].drop_duplicates().reset_index(drop=True)

# pyPhenology predict API: predict(to_predict, predictors)
# try that call and fall back to predict(predictors) if needed
try:
    pred_vals = model.predict(to_predict, preds_test)
except TypeError:
    # fallback (some versions accept only predictors)
    pred_vals = model.predict(preds_test)

# pred_vals expected to be an array/list of predicted DOY for each row in to_predict
if len(pred_vals) == len(to_predict):
    to_predict['predicted_doy'] = np.array(pred_vals).reshape(-1)
else:
    print(f"Warning: Model returned {len(pred_vals)} predictions for {len(to_predict)} test cases. Filling with NaN.")
    to_predict['predicted_doy'] = np.nan

# join with observed
eval_df = to_predict.merge(
    obs_test.rename(columns={'species':'species','doy':'observed_doy'}),
    on=['site_id','species','year'],
    how='left'
)

# compute RMSE / MAE only for rows with valid predictions
from sklearn.metrics import mean_squared_error, mean_absolute_error
valid = eval_df.dropna(subset=['observed_doy', 'predicted_doy'])
if len(valid) > 0:
    rmse = np.sqrt(mean_squared_error(valid['observed_doy'], valid['predicted_doy']))
    mae  = mean_absolute_error(valid['observed_doy'], valid['predicted_doy'])
    print(f"Test RMSE = {rmse:.3f} days; MAE = {mae:.3f} days")
else:
    print("No valid predictions to evaluate (all predicted_doy are NaN).")
print(eval_df.head())

# ---------- Save trained model ----------
import joblib
joblib.dump(model, 'pyphenology_thermaltime_model.pkl')
print("Model saved to pyphenology_thermaltime_model.pkl")