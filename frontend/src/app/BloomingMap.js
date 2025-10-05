"use client";
import { useEffect, useRef, useState } from "react";
import "./geocoderCustomStyle.css";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import axios from "axios";

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
          "circle-radius": ["interpolate", ["linear"], ["get", "intensity"], 0, 3, 1, 14],
          "circle-color": [
            "interpolate",
            ["linear"],
            ["get", "intensity"],
            0, "#3b82f6",    // Bright blue
            0.3, "#fbbf24",  // Warm yellow
            0.6, "#10b981",  // Emerald green
            1, "#059669",    // Deep green
          ],
          "circle-opacity": 0.8,
          "circle-blur": 0.5,
          "circle-stroke-width": 1,
          "circle-stroke-color": [
            "interpolate",
            ["linear"],
            ["get", "intensity"],
            0, "#60a5fa",
            1, "#34d399",
          ],
          "circle-stroke-opacity": 0.6
        },
      });
    }
  };

  // ✅ Init maps & interactions
  useEffect(() => {
    if (!leftMapContainer.current) return;

    const createMap = (container, isMainMap = true) => {
      const map = new mapboxgl.Map({
        container,
        style: "mapbox://styles/mapbox/dark-v11",
        center: [0, 20],
        zoom: isMainMap ? 1.8 : 1.5,
        projection: 'globe',
        attributionControl: false
      });

      // Enhanced globe styling on load
      map.on('style.load', () => {
        // Atmospheric glow
        map.setFog({
          color: 'rgb(30, 41, 59)', // Deep blue-gray
          'high-color': 'rgb(15, 23, 42)', // Darker top
          'horizon-blend': 0.05,
          'space-color': 'rgb(2, 6, 23)', // Deep space black
          'star-intensity': 0.8
        });

        // Ocean styling - deep blue with subtle glow
        map.setPaintProperty('water', 'fill-color', '#0c4a6e');
        
        // Land styling - dark with green undertones
        map.setPaintProperty('land', 'background-color', '#1e293b');
        
        // Country borders - subtle cyan
        if (map.getLayer('admin-0-boundary')) {
          map.setPaintProperty('admin-0-boundary', 'line-color', '#0891b2');
          map.setPaintProperty('admin-0-boundary', 'line-opacity', 0.3);
        }

        // Add subtle rotation animation for main map when not in compare mode
        if (isMainMap && !globalCompareMode && !pointCompareMode) {
          let userInteracting = false;
          let spinEnabled = true;

          const spinGlobe = () => {
            if (spinEnabled && !userInteracting) {
              const center = map.getCenter();
              center.lng += 0.15;
              map.easeTo({ center, duration: 100, easing: (n) => n });
            }
          };

          map.on('mousedown', () => { userInteracting = true; });
          map.on('mouseup', () => { 
            userInteracting = false;
            setTimeout(() => { if (!userInteracting) spinEnabled = true; }, 3000);
          });
          map.on('dragstart', () => { userInteracting = true; spinEnabled = false; });
          map.on('dragend', () => { 
            userInteracting = false;
            setTimeout(() => { if (!userInteracting) spinEnabled = true; }, 3000);
          });

          // Start spinning
          const interval = setInterval(spinGlobe, 100);
          
          // Store interval on map for cleanup
          map._spinInterval = interval;
        }
      });

      return map;
    };

    // Always create the left map
    const leftMap = createMap(leftMapContainer.current);
    leftMapRef.current = leftMap;
    leftMapRef.current.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        useBrowserFocus: true,
        mapboxgl: mapboxgl,
      }),
      "top-left"
    );

    // Create right map for global compare
    if (globalCompareMode && rightMapContainer.current) {
      const rightMap = createMap(rightMapContainer.current);
      rightMapRef.current = rightMap;
      rightMapRef.current.addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          useBrowserFocus: true,
          mapboxgl: mapboxgl,
        }),
        "top-left"
      );
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
          // Clear spin interval if it exists
          if (leftMapRef.current._spinInterval) {
            clearInterval(leftMapRef.current._spinInterval);
          }
          leftMapRef.current.remove();
          leftMapRef.current = null;
        }
        if (rightMapRef.current) {
          if (rightMapRef.current._spinInterval) {
            clearInterval(rightMapRef.current._spinInterval);
          }
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
          if (leftMapRef.current._spinInterval) {
            clearInterval(leftMapRef.current._spinInterval);
          }
          leftMapRef.current.remove();
          leftMapRef.current = null;
        }
        if (rightMapRef.current) {
          if (rightMapRef.current._spinInterval) {
            clearInterval(rightMapRef.current._spinInterval);
          }
          rightMapRef.current.remove();
          rightMapRef.current = null;
        }

        // Reset parent component state
        if (onResetCompareMode) onResetCompareMode();
      }}
      className="absolute top-6 right-6 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl shadow-2xl hover:from-red-700 hover:to-red-800 transition-all duration-300 z-50 font-semibold border border-red-400/50 hover:scale-105"
    >
      ✕ Exit Comparison
    </button>
  );

  return (
    <div className="flex w-full h-screen relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {isLoading && (
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-2xl border border-cyan-500/30">
            <p className="text-lg font-semibold text-cyan-400">Loading NDVI data...</p>
            <div className="mt-3 h-1 w-48 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl shadow-2xl border border-red-400/50">
          ⚠️ {error}
        </div>
      )}

      <div ref={leftMapContainer} className="flex-1" />
      {globalCompareMode && (
        <div ref={rightMapContainer} className="flex-1 border-l-2 border-gray-400" />
      )}

      {/* Base map time slider HUD */}
      {!globalCompareMode && !pointCompareMode && ndviData.length > 0 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-md px-8 py-4 rounded-2xl shadow-2xl border border-cyan-500/30">
          <p className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            📅 {ndviData[frame]?.date} | 🌱 NDVI: <span className="text-emerald-400">{ndviData[frame]?.ndvi.toFixed(3)}</span>
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