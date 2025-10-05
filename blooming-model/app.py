from flask import Flask, request, jsonify
from flask_cors import CORS  # ← add this
import joblib
import json
import os
from datetime import datetime
from pred import predict_blooming, doy_to_date_vectorized

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Load the trained model
model = joblib.load('pyphenology_thermaltime_model.pkl')

# Path to persistent storage
PREDICTION_FILE = "predictions.json"


# ---- Helper functions ----
def load_predictions():
    """Load predictions from file."""
    if not os.path.exists(PREDICTION_FILE):
        return []
    try:
        with open(PREDICTION_FILE, "r") as f:
            return json.load(f)
    except (json.JSONDecodeError, FileNotFoundError):
        return []


def save_prediction(pred):
    """Append a prediction to persistent storage."""
    all_preds = load_predictions()
    all_preds.append(pred)
    with open(PREDICTION_FILE, "w") as f:
        json.dump(all_preds, f, indent=2)


# ---- Main Route ----
@app.route("/api/model", methods=["POST"])
def handle_model():
    """
    Unified POST endpoint:
    - If request contains 'latitude', 'longitude', etc. → Run prediction.
    - If request body is empty or has no inputs → Return all stored predictions.
    """
    try:
        data = request.get_json(silent=True) or {}

        # If input fields are missing → return stored predictions
        if not all(k in data for k in ("latitude", "longitude", "species", "year")):
            preds = load_predictions()
            if not preds:
                return jsonify({"status": "error", "message": "No predictions found"}), 404
            return jsonify({
                "status": "success",
                "count": len(preds),
                "results": preds
            }), 200

        # Extract input
        latitude = float(data["latitude"])
        longitude = float(data["longitude"])
        species = str(data["species"])
        year = int(data["year"])

        # Run prediction
        doy = predict_blooming(model, latitude, longitude, species, year)
        date = doy_to_date_vectorized([year], [doy])[0].date()

        # Create record
        prediction = {
            "timestamp": datetime.now().isoformat(),
            "latitude": latitude,
            "longitude": longitude,
            "species": species,
            "year": year,
            "predicted_doy": doy,
            "predicted_date": str(date)
        }

        # Save result persistently
        save_prediction(prediction)

        return jsonify({
            "status": "success",
            "result": prediction
        }), 200

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 400


if __name__ == "__main__":
    app.run(host="localhost", port=5001, debug=True)
