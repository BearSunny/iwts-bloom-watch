"use client";
import { useEffect, useRef, useState } from "react";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import mapboxgl from "mapbox-gl";
import axios from 'axios';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
});

// Generate ~300 random global points
const generateRandomPoints = (count = 300) => {
  const points = [];
  for (let i = 0; i < count; i++) {
    const lat = Math.random() * 180 - 90;
    const lon = Math.random() * 360 - 180;
    points.push([lon, lat]);
  }
  return points;
};
const globalPoints = generateRandomPoints();

export default function BloomingMap({ compareMode, onResetCompareMode }) {
  const leftMapContainer = useRef(null);
  const rightMapContainer = useRef(null);
  const compareContainer = useRef(null);
  const leftMapRef = useRef(null);
  const rightMapRef = useRef(null);
  const compareMapRef = useRef(null);
  const sliderRef = useRef(null);

  const [ndviData, setNdviData] = useState([]);
  const [frame, setFrame] = useState(0);
  const [globalCompareMode, setGlobalCompareMode] = useState(false);
  const [pointCompareMode, setPointCompareMode] = useState(false);

  const [selectedLeftDate, setSelectedLeftDate] = useState(null);
  const [selectedRightDate, setSelectedRightDate] = useState(null);

  const [selectedPoints, setSelectedPoints] = useState({
    first: null,
    second: null
  });
  const [pointData, setPointData] = useState({
    first: [],
    second: []
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Update comparison handling based on mode
  useEffect(() => {
    if (!compareMode) return;

    switch (compareMode.type) {
      case "global":
        setGlobalCompareMode(true);
        // Initialize with start/end dates from dateRange
        if (ndviData.length > 0) {
          setSelectedLeftDate(0);
          setSelectedRightDate(ndviData.length - 1);
        }
        break;
      case "point":
        setPointCompareMode(true);
        break;
      case "export":
        // Will be implemented later
        console.log("Export functionality coming soon");
        break;
    }
  }, [compareMode]);

  // ✅ Fetch global NDVI
  useEffect(() => {
    const fetchNDVI = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await api.get("/ndvi/global", {
          params: {
            start: compareMode?.dateRange?.start,
            end: compareMode?.dateRange?.end
          }
        });
        const data = res.data.data || res.data;
        if (Array.isArray(data) && data.length > 0) {
          setNdviData(data);
        } else {
          throw new Error("Invalid NDVI data format");
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching NDVI:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNDVI();
  }, [compareMode?.dateRange]);

  const generatePulseData = (ndviValue, date) => ({
    type: "FeatureCollection",
    features: globalPoints.map(([lon, lat]) => ({
      type: "Feature",
      geometry: { type: "Point", coordinates: [lon, lat] },
      properties: {
        ndvi: ndviValue,
        date,
        intensity: Math.max(0, Math.min(1, (ndviValue - 0.28) / 0.22)),
      },
    })),
  });

  const addPulseLayer = (map, sourceId, layerId, data) => {
    // Check if map is loaded
    if (!map.isStyleLoaded()) {
      map.once('load', () => addPulseLayer(map, sourceId, layerId, data));
      return;
    }

    if (!map.getSource(sourceId)) {
      map.addSource(sourceId, { type: "geojson", data });
    } else {
      map.getSource(sourceId).setData(data);
    }

    if (!map.getLayer(layerId)) {
      map.addLayer({
        id: layerId,
        type: "circle",
        source: sourceId,
        paint: {
          "circle-radius": ["interpolate", ["linear"], ["get", "intensity"], 0, 2, 1, 10],
          "circle-color": [
            "interpolate",
            ["linear"],
            ["get", "intensity"],
            0, "#60a5fa",
            0.3, "#facc15",
            0.6, "#22c55e",
            1, "#15803d",
          ],
          "circle-opacity": 0.6,
          "circle-blur": 0.7,
        },
      });
    }
  };

  // ✅ Init maps & interactions
  useEffect(() => {
    if (!leftMapContainer.current) return;

    const createMap = (container) => {
      const map = new mapboxgl.Map({
        container,
        style: "mapbox://styles/mapbox/light-v11",
        center: [0, 20],
        zoom: 1.5,
      });
      return map;
    };

    // Always create the left map
    leftMapRef.current = createMap(leftMapContainer.current);

    // Create right map for global compare
    if (globalCompareMode && rightMapContainer.current) {
      rightMapRef.current = createMap(rightMapContainer.current);
    }

    // Point comparison click handler
    const clickHandler = async (e) => {
      if (!pointCompareMode) return;
      
      const { lng, lat } = e.lngLat;
      const color = !selectedPoints.first ? "#2563eb" : "#16a34a";
      
      new mapboxgl.Marker({ color }).setLngLat([lng, lat]).addTo(leftMapRef.current);

      try {
        const res = await api.get("/ndvi/point", {
          params: { 
            lat, 
            lon: lng, 
            start: compareMode?.dateRange?.start,
            end: compareMode?.dateRange?.end,
            buffer: 1000 
          },
        });

        if (!selectedPoints.first) {
          setSelectedPoints(prev => ({ ...prev, first: { lat, lon: lng }}));
          setPointData(prev => ({ ...prev, first: res.data.data }));
        } else if (!selectedPoints.second) {
          setSelectedPoints(prev => ({ ...prev, second: { lat, lon: lng }}));
          setPointData(prev => ({ ...prev, second: res.data.data }));
        }
      } catch (err) {
        console.error("Error fetching point NDVI:", err);
      }
    };

    if (leftMapRef.current) {
      leftMapRef.current.on("click", clickHandler);
    }

    // Improved cleanup function
    return () => {
      // Remove click handler
      if (leftMapRef.current) {
        leftMapRef.current.off("click", clickHandler);
      }
      
      // Only remove maps when exiting comparison mode completely
      if (!globalCompareMode && !pointCompareMode) {
        if (leftMapRef.current) {
          leftMapRef.current.remove();
          leftMapRef.current = null;
        }
        if (rightMapRef.current) {
          rightMapRef.current.remove();
          rightMapRef.current = null;
        }
      }
    };
  }, [globalCompareMode, pointCompareMode, compareMode?.dateRange]);

  // ✅ Animate pulses (stop when in regional compare mode)
  useEffect(() => {
    if (!leftMapRef.current || ndviData.length === 0 || pointCompareMode) return;

    if (globalCompareMode && selectedLeftDate !== null && selectedRightDate !== null) {
      const leftData = ndviData[selectedLeftDate];
      const rightData = ndviData[selectedRightDate];

      if (leftData) {
        const pulseData = generatePulseData(leftData.ndvi, leftData.date);
        addPulseLayer(leftMapRef.current, "ndvi-source-left", "ndvi-layer-left", pulseData);
      }

      if (rightData && rightMapRef.current) {
        const pulseData = generatePulseData(rightData.ndvi, rightData.date);
        addPulseLayer(rightMapRef.current, "ndvi-source-right", "ndvi-layer-right", pulseData);
      }
    } else if (!globalCompareMode) {
      let i = 0;
      const interval = setInterval(() => {
        i = (i + 1) % ndviData.length;
        setFrame(i);

        const { ndvi, date } = ndviData[i];
        const pulseData = generatePulseData(ndvi, date);

        addPulseLayer(leftMapRef.current, "ndvi-source-left", "ndvi-layer-left", pulseData);
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [ndviData, globalCompareMode, selectedLeftDate, selectedRightDate, pointCompareMode]);

  const handleSliderDrag = (e) => {
    if (!compareContainer.current) return;
    const rect = compareContainer.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  // Update ExitButton to properly reset everything
  const ExitButton = () => (
    <button
      onClick={() => {
        // Reset all comparison states
        setGlobalCompareMode(false);
        setPointCompareMode(false);
        setSelectedPoints({ first: null, second: null });
        setPointData({ first: [], second: [] });
        setSelectedLeftDate(null);
        setSelectedRightDate(null);
        
        // Remove maps
        if (leftMapRef.current) {
          leftMapRef.current.remove();
          leftMapRef.current = null;
        }
        if (rightMapRef.current) {
          rightMapRef.current.remove();
          rightMapRef.current = null;
        }

        // Reset parent component state
        if (onResetCompareMode) onResetCompareMode();
      }}
      className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 transition-colors z-50"
    >
      Exit Comparison
    </button>
  );

  return (
    <div className="flex w-full h-screen relative">
      {isLoading && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-lg font-semibold">Loading NDVI data...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg">
          {error}
        </div>
      )}

      <div ref={leftMapContainer} className="flex-1" />
      {globalCompareMode && (
        <div ref={rightMapContainer} className="flex-1 border-l-2 border-gray-400" />
      )}

      {/* Base map time slider HUD */}
      {!globalCompareMode && !pointCompareMode && ndviData.length > 0 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 px-4 py-2 rounded-lg shadow">
          <p className="text-sm font-semibold">
            📅 {ndviData[frame]?.date} | 🌱 NDVI: {ndviData[frame]?.ndvi.toFixed(3)}
          </p>
        </div>
      )}

      {/* Point comparison chart */}
      {pointCompareMode && selectedPoints.first && selectedPoints.second && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl bg-black/80 p-6 rounded-2xl shadow-2xl">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white text-lg mb-3 flex items-center">
                <span className="w-4 h-4 rounded-full bg-blue-600 mr-2"></span>
                Point 1 NDVI Trend
              </h3>
              <div className="text-gray-400 text-sm">
                {pointData.first.map((data, i) => (
                  <div key={i}>{data.date}: {data.ndvi.toFixed(3)}</div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg mb-3 flex items-center">
                <span className="w-4 h-4 rounded-full bg-green-600 mr-2"></span>
                Point 2 NDVI Trend
              </h3>
              <div className="text-gray-400 text-sm">
                {pointData.second.map((data, i) => (
                  <div key={i}>{data.date}: {data.ndvi.toFixed(3)}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {(globalCompareMode || pointCompareMode) && <ExitButton />}

      {/* Global comparison controls */}
      {globalCompareMode && ndviData.length > 0 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl bg-black/80 p-6 rounded-2xl shadow-2xl">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white text-lg mb-3">Left Map Period</h3>
              <input
                type="range"
                min="0"
                max={ndviData.length - 1}
                value={selectedLeftDate}
                onChange={(e) => setSelectedLeftDate(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer"
              />
              <div className="mt-2 text-sm text-gray-400">
                {ndviData[selectedLeftDate]?.date} → NDVI {ndviData[selectedLeftDate]?.ndvi.toFixed(3)}
              </div>
            </div>

            <div>
              <h3 className="text-white text-lg mb-3">Right Map Period</h3>
              <input
                type="range"
                min="0"
                max={ndviData.length - 1}
                value={selectedRightDate}
                onChange={(e) => setSelectedRightDate(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer"
              />
              <div className="mt-2 text-sm text-gray-400">
                {ndviData[selectedRightDate]?.date} → NDVI {ndviData[selectedRightDate]?.ndvi.toFixed(3)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}