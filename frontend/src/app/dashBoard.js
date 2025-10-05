"use client";
import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { useBloomModel } from "../hooks/useBloomModel";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN; // Replace this with your actual token

export default function DashBoard({ isOpen, onClose }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);

  const { sendPrediction, data, loading, error } = useBloomModel();

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [species, setSpecies] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());

  // Initialize map
  useEffect(() => {
    if (!isOpen) return; // initialize only when modal is open
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [105.8, 21.0],
      zoom: 4,
    });

    // Click to drop pin
    map.current.on("click", (e) => {
      const { lng, lat } = e.lngLat;
      setLatitude(lat.toFixed(5));
      setLongitude(lng.toFixed(5));

      if (marker.current) marker.current.remove();
      marker.current = new mapboxgl.Marker({ color: "#E79473" })
        .setLngLat([lng, lat])
        .addTo(map.current);
    });
  }, [isOpen]);

  const handleSubmit = async () => {
    if (!latitude || !longitude || !species || !year) {
      alert("Please select a location and fill all fields!");
      return;
    }
    await sendPrediction({ latitude, longitude, species, year });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center shadow-2xl bg-opacity-50 z-50"
      style={{
        "--color-primary": "#498467",
        "--color-secondary": "#52B788",
        "--color-fill": "#B2D3A8",
        "--color-highlight": "#E79473",
        "--color-text": "#ffffff",
      }}
    >
      <div className="bg-[var(--color-fill)] rounded-2xl shadow-2xl p-6 w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-[var(--color-text)] bg-[var(--color-highlight)] px-3 py-1 rounded-full hover:opacity-80"
        >
          ✕
        </button>

        {/* Section 1: Title */}
        <section className="py-4 bg-[var(--color-primary)] text-[var(--color-text)] rounded-xl mb-4 shadow w-full flex-col justify-center">
          <h1 className="text-2xl font-bold mb-2 text-center">🌸 Bloom Prediction Dashboard</h1>
          <p className="text-sm max-w-xl mx-auto">
            This dashboard predicts the expected bloom date of a flower species
            at a specific location and year using environmental modeling data.
          </p>
        </section>

        <hr className="border-t-4 border-black my-4" />

        {/* Section 2: Inputs */}
        <section className="flex flex-col items-center gap-5 py-2">
          <div className="w-full h-[300px] rounded-2xl overflow-hidden border-4 border-[var(--color-secondary)] shadow-md">
            <div ref={mapContainer} className="w-full h-full" />
          </div>
          <p className="text-[var(--color-primary)] font-medium">
            📍 Click on the map to set your location.
          </p>

          <div className="flex flex-col w-80 gap-3 text-left">
            <label className="font-semibold text-[var(--color-primary)]">
              Flower Species
            </label>
            <input
              type="text"
              placeholder="Enter flower species name..."
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              className="border text-white border-[var(--color-secondary)] rounded-lg p-2 focus:outline-none"
            />

            <label className="font-semibold text-[var(--color-primary)]">
              Year
            </label>
            <input
              type="number"
              value={year}
              min={2020}
              max={2100}
              onChange={(e) => setYear(e.target.value)}
              className="border border-[var(--color-secondary)] rounded-lg p-2 focus:outline-none"
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-3 bg-[var(--color-highlight)] text-[var(--color-text)] font-semibold py-2 rounded-lg hover:opacity-90"
            >
              {loading ? "Predicting..." : "Predict Bloom Date"}
            </button>
          </div>
        </section>

        <hr className="border-t-4 border-black my-4" />

        {/* Section 3: Results */}
        <section className="flex flex-col items-center py-4">
          {error && <p className="text-red-600">⚠️ {error}</p>}
          {data ? (
            <div className="bg-[var(--color-secondary)] text-[var(--color-text)] w-96 p-4 rounded-2xl shadow-md">
              <h2 className="text-xl font-bold mb-2">🌼 Prediction Result</h2>
              <p>
                <b>Species:</b> {data.species}
              </p>
              <p>
                <b>Coordinates:</b> {data.latitude}, {data.longitude}
              </p>
              <p>
                <b>Year:</b> {data.year}
              </p>
              <p className="text-lg mt-2">
                <b>Predicted Bloom Date:</b>{" "}
                <span className="text-[var(--color-highlight)] font-bold">
                  {data.predicted_date}
                </span>
              </p>
            </div>
          ) : (
            <p className="text-[var(--color-primary)] italic">
              No prediction yet — fill in details and click "Predict Bloom Date".
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
