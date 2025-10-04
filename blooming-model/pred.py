import numpy as np
import pandas as pd
import joblib
from datetime import datetime, timedelta

# ---- Simulate temperature series by (lat, lon, species) ----
def simulate_temperature_series(lat, lon, year, species,
                                base_temp=16, amplitude=8, noise_scale=2,
                                species_effects=None):
    """
    Generate a daily temperature time series that depends on 
    latitude, longitude, and species (deterministic randomization).
    """

    # Apply species-specific overrides if available
    if species_effects and species in species_effects:
        base_temp = species_effects[species].get('base_temp', base_temp)
        amplitude = species_effects[species].get('amplitude', amplitude)

    # Create deterministic random seed from (lat, lon, species)
    combined_str = f"{lat:.4f}_{lon:.4f}_{species}"
    seed = abs(hash(combined_str)) % (2**32 - 1)
    rng = np.random.default_rng(seed)

    days = np.arange(1, 366)

    # Seasonal sinusoidal temperature pattern
    seasonal = base_temp + amplitude * np.sin(2 * np.pi * (days - 80) / 365)

    # Add random noise and latitude-based temperature offset
    noise = rng.normal(0, noise_scale, size=len(days))
    lat_effect = -0.1 * abs(lat)
    temp = seasonal + noise + lat_effect

    # Deterministic site_id (stable across calls)
    site_str = f"{lat:.4f}_{lon:.4f}_{species}"
    site_id = pd.factorize([site_str])[0][0] + 1

    return pd.DataFrame({
        'site_id': site_id,
        'year': year,
        'doy': days,
        'temperature': temp
    })


# ---- Predict blooming date using the trained model ----
def predict_blooming(model, latitude, longitude, species, year):
    """
    Generate simulated temperature data for the given (lat, lon, species),
    then use the trained pyPhenology model to predict bloom DOY.
    """

    site_str = f"{round(latitude,4)}_{round(longitude,4)}_{species}"
    site_id = pd.factorize(np.array([site_str]))[0][0] + 1

    # Optional species-specific temperature patterns
    species_effects = {
        'clusiana': {'base_temp': 14, 'amplitude': 9},
        'sativa': {'base_temp': 18, 'amplitude': 7},
        'vulgaris': {'base_temp': 16, 'amplitude': 8}
    }

    # Generate simulated temperature series
    doys = simulate_temperature_series(latitude, longitude, year, species,
                                       species_effects=species_effects)
    
    # Prepare DataFrame for prediction
    to_predict = pd.DataFrame({
        'site_id': [site_id],
        'species': [species],
        'year': [year]
    })
    
    # Try the two supported pyPhenology prediction APIs
    try:
        pred_doy = model.predict(to_predict, doys)
    except TypeError:
        pred_doy = model.predict(doys)
    
    return float(pred_doy[0])

def doy_to_date_vectorized(years, doys):
    dates = [datetime(int(y), 1, 1) + timedelta(days=int(d)-1) for y, d in zip(years, doys)]
    return pd.Series(dates)

model = joblib.load('pyphenology_thermaltime_model.pkl')

output = predict_blooming(model,
                          latitude=30.0,
                          longitude=-110.126457,
                          species='lady tulip',
                          year=2025)
print(f"Predicted blooming day of year: {output}")

output_date = doy_to_date_vectorized([2025], [output])[0]
print(f"Predicted blooming date: {output_date.date()}")