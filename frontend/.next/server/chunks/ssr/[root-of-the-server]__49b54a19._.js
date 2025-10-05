module.exports = [
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/keyv [external] (keyv, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("keyv", () => require("keyv"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[project]/src/app/BloomingMap.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BloomingMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mapbox$2f$mapbox$2d$gl$2d$draw$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mapbox/mapbox-gl-draw/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mapbox-gl/dist/mapbox-gl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mapbox$2f$mapbox$2d$gl$2d$geocoder$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mapbox/mapbox-gl-geocoder/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].accessToken = ("TURBOPACK compile-time value", "pk.eyJ1Ijoic3VubnkxNzMiLCJhIjoiY21nOWtwM2h2MDd4bjJpb3B3MGV4bXYyMyJ9.a1NLLN95JZ8EbhL8LJ-2VQ");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5000/api");
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: API_BASE_URL,
    timeout: 60000
});
// Generate ~300 random global points
const generateRandomPoints = (count = 300)=>{
    const points = [];
    for(let i = 0; i < count; i++){
        const lat = Math.random() * 180 - 90;
        const lon = Math.random() * 360 - 180;
        points.push([
            lon,
            lat
        ]);
    }
    return points;
};
const globalPoints = generateRandomPoints();
function BloomingMap({ compareMode, onResetCompareMode }) {
    const leftMapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightMapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const compareContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftMapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightMapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const compareMapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [ndviData, setNdviData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [frame, setFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [globalCompareMode, setGlobalCompareMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pointCompareMode, setPointCompareMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedLeftDate, setSelectedLeftDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedRightDate, setSelectedRightDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedPoints, setSelectedPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        first: null,
        second: null
    });
    const [pointData, setPointData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        first: [],
        second: []
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Update comparison handling based on mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!compareMode) return;
        switch(compareMode.type){
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
    }, [
        compareMode
    ]);
    // ✅ Fetch global NDVI
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchNDVI = async ()=>{
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
            } finally{
                setIsLoading(false);
            }
        };
        fetchNDVI();
    }, [
        compareMode?.dateRange
    ]);
    const generatePulseData = (ndviValue, date)=>({
            type: "FeatureCollection",
            features: globalPoints.map(([lon, lat])=>({
                    type: "Feature",
                    geometry: {
                        type: "Point",
                        coordinates: [
                            lon,
                            lat
                        ]
                    },
                    properties: {
                        ndvi: ndviValue,
                        date,
                        intensity: Math.max(0, Math.min(1, (ndviValue - 0.28) / 0.22))
                    }
                }))
        });
    const addPulseLayer = (map, sourceId, layerId, data)=>{
        // Check if map is loaded
        if (!map.isStyleLoaded()) {
            map.once('load', ()=>addPulseLayer(map, sourceId, layerId, data));
            return;
        }
        if (!map.getSource(sourceId)) {
            map.addSource(sourceId, {
                type: "geojson",
                data
            });
        } else {
            map.getSource(sourceId).setData(data);
        }
        if (!map.getLayer(layerId)) {
            map.addLayer({
                id: layerId,
                type: "circle",
                source: sourceId,
                paint: {
                    "circle-radius": [
                        "interpolate",
                        [
                            "linear"
                        ],
                        [
                            "get",
                            "intensity"
                        ],
                        0,
                        3,
                        1,
                        14
                    ],
                    "circle-color": [
                        "interpolate",
                        [
                            "linear"
                        ],
                        [
                            "get",
                            "intensity"
                        ],
                        0,
                        "#3b82f6",
                        0.3,
                        "#fbbf24",
                        0.6,
                        "#10b981",
                        1,
                        "#059669"
                    ],
                    "circle-opacity": 0.8,
                    "circle-blur": 0.5,
                    "circle-stroke-width": 1,
                    "circle-stroke-color": [
                        "interpolate",
                        [
                            "linear"
                        ],
                        [
                            "get",
                            "intensity"
                        ],
                        0,
                        "#60a5fa",
                        1,
                        "#34d399"
                    ],
                    "circle-stroke-opacity": 0.6
                }
            });
        }
    };
    // ✅ Init maps & interactions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!leftMapContainer.current) return;
        const createMap = (container, isMainMap = true)=>{
            const map = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Map({
                container,
                style: "mapbox://styles/mapbox/dark-v11",
                center: [
                    0,
                    20
                ],
                zoom: isMainMap ? 1.8 : 1.5,
                projection: 'globe',
                attributionControl: false
            });
            // Enhanced globe styling on load
            map.on('style.load', ()=>{
                // Atmospheric glow
                map.setFog({
                    color: 'rgb(30, 41, 59)',
                    'high-color': 'rgb(15, 23, 42)',
                    'horizon-blend': 0.05,
                    'space-color': 'rgb(2, 6, 23)',
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
                    const spinGlobe = ()=>{
                        if (spinEnabled && !userInteracting) {
                            const center = map.getCenter();
                            center.lng += 0.15;
                            map.easeTo({
                                center,
                                duration: 100,
                                easing: (n)=>n
                            });
                        }
                    };
                    map.on('mousedown', ()=>{
                        userInteracting = true;
                    });
                    map.on('mouseup', ()=>{
                        userInteracting = false;
                        setTimeout(()=>{
                            if (!userInteracting) spinEnabled = true;
                        }, 3000);
                    });
                    map.on('dragstart', ()=>{
                        userInteracting = true;
                        spinEnabled = false;
                    });
                    map.on('dragend', ()=>{
                        userInteracting = false;
                        setTimeout(()=>{
                            if (!userInteracting) spinEnabled = true;
                        }, 3000);
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
        leftMapRef.current.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mapbox$2f$mapbox$2d$gl$2d$geocoder$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            accessToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].accessToken,
            useBrowserFocus: true,
            mapboxgl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
        }), "top-left");
        // Create right map for global compare
        if (globalCompareMode && rightMapContainer.current) {
            const rightMap = createMap(rightMapContainer.current);
            rightMapRef.current = rightMap;
            rightMapRef.current.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mapbox$2f$mapbox$2d$gl$2d$geocoder$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
                accessToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].accessToken,
                useBrowserFocus: true,
                mapboxgl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            }), "top-left");
        }
        // Point comparison click handler
        const clickHandler = async (e)=>{
            if (!pointCompareMode) return;
            const { lng, lat } = e.lngLat;
            const color = !selectedPoints.first ? "#2563eb" : "#16a34a";
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Marker({
                color
            }).setLngLat([
                lng,
                lat
            ]).addTo(leftMapRef.current);
            try {
                const res = await api.get("/ndvi/point", {
                    params: {
                        lat,
                        lon: lng,
                        start: compareMode?.dateRange?.start,
                        end: compareMode?.dateRange?.end,
                        buffer: 1000
                    }
                });
                if (!selectedPoints.first) {
                    setSelectedPoints((prev)=>({
                            ...prev,
                            first: {
                                lat,
                                lon: lng
                            }
                        }));
                    setPointData((prev)=>({
                            ...prev,
                            first: res.data.data
                        }));
                } else if (!selectedPoints.second) {
                    setSelectedPoints((prev)=>({
                            ...prev,
                            second: {
                                lat,
                                lon: lng
                            }
                        }));
                    setPointData((prev)=>({
                            ...prev,
                            second: res.data.data
                        }));
                }
            } catch (err) {
                console.error("Error fetching point NDVI:", err);
            }
        };
        if (leftMapRef.current) {
            leftMapRef.current.on("click", clickHandler);
        }
        // Improved cleanup function
        return ()=>{
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
    }, [
        globalCompareMode,
        pointCompareMode,
        compareMode?.dateRange
    ]);
    // ✅ Animate pulses (stop when in regional compare mode)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
            const interval = setInterval(()=>{
                i = (i + 1) % ndviData.length;
                setFrame(i);
                const { ndvi, date } = ndviData[i];
                const pulseData = generatePulseData(ndvi, date);
                addPulseLayer(leftMapRef.current, "ndvi-source-left", "ndvi-layer-left", pulseData);
            }, 1500);
            return ()=>clearInterval(interval);
        }
    }, [
        ndviData,
        globalCompareMode,
        selectedLeftDate,
        selectedRightDate,
        pointCompareMode
    ]);
    const handleSliderDrag = (e)=>{
        if (!compareContainer.current) return;
        const rect = compareContainer.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percentage = x / rect.width * 100;
        setSliderPosition(percentage);
    };
    // Update ExitButton to properly reset everything
    const ExitButton = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>{
                // Reset all comparison states
                setGlobalCompareMode(false);
                setPointCompareMode(false);
                setSelectedPoints({
                    first: null,
                    second: null
                });
                setPointData({
                    first: [],
                    second: []
                });
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
            },
            className: "absolute top-6 right-6 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl shadow-2xl hover:from-red-700 hover:to-red-800 transition-all duration-300 z-50 font-semibold border border-red-400/50 hover:scale-105",
            children: "✕ Exit Comparison"
        }, void 0, false, {
            fileName: "[project]/src/app/BloomingMap.js",
            lineNumber: 371,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full h-screen relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950",
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-2xl border border-cyan-500/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg font-semibold text-cyan-400",
                            children: "Loading NDVI data..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/BloomingMap.js",
                            lineNumber: 411,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 h-1 w-48 bg-slate-700 rounded-full overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-gradient-to-r from-cyan-500 to-emerald-500 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/app/BloomingMap.js",
                                lineNumber: 413,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/BloomingMap.js",
                            lineNumber: 412,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/BloomingMap.js",
                    lineNumber: 410,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 409,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl shadow-2xl border border-red-400/50",
                children: [
                    "⚠️ ",
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 420,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: leftMapContainer,
                className: "flex-1"
            }, void 0, false, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            globalCompareMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: rightMapContainer,
                className: "flex-1 border-l-2 border-gray-400"
            }, void 0, false, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 427,
                columnNumber: 9
            }, this),
            !globalCompareMode && !pointCompareMode && ndviData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-md px-8 py-4 rounded-2xl shadow-2xl border border-cyan-500/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400",
                    children: [
                        "📅 ",
                        ndviData[frame]?.date,
                        " | 🌱 NDVI: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-emerald-400",
                            children: ndviData[frame]?.ndvi.toFixed(3)
                        }, void 0, false, {
                            fileName: "[project]/src/app/BloomingMap.js",
                            lineNumber: 434,
                            columnNumber: 51
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/BloomingMap.js",
                    lineNumber: 433,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 432,
                columnNumber: 9
            }, this),
            pointCompareMode && selectedPoints.first && selectedPoints.second && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl bg-black/80 p-6 rounded-2xl shadow-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-lg mb-3 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-4 h-4 rounded-full bg-blue-600 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/BloomingMap.js",
                                            lineNumber: 445,
                                            columnNumber: 17
                                        }, this),
                                        "Point 1 NDVI Trend"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 444,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400 text-sm",
                                    children: pointData.first.map((data, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                data.date,
                                                ": ",
                                                data.ndvi.toFixed(3)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/app/BloomingMap.js",
                                            lineNumber: 450,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 448,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/BloomingMap.js",
                            lineNumber: 443,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-lg mb-3 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-4 h-4 rounded-full bg-green-600 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/BloomingMap.js",
                                            lineNumber: 456,
                                            columnNumber: 17
                                        }, this),
                                        "Point 2 NDVI Trend"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 455,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400 text-sm",
                                    children: pointData.second.map((data, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                data.date,
                                                ": ",
                                                data.ndvi.toFixed(3)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/app/BloomingMap.js",
                                            lineNumber: 461,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 459,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/BloomingMap.js",
                            lineNumber: 454,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/BloomingMap.js",
                    lineNumber: 442,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 441,
                columnNumber: 9
            }, this),
            (globalCompareMode || pointCompareMode) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExitButton, {}, void 0, false, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 469,
                columnNumber: 51
            }, this),
            globalCompareMode && ndviData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl bg-black/80 p-6 rounded-2xl shadow-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-lg mb-3",
                                    children: "Left Map Period"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 476,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: "0",
                                    max: ndviData.length - 1,
                                    value: selectedLeftDate,
                                    onChange: (e)=>setSelectedLeftDate(parseInt(e.target.value)),
                                    className: "w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 477,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-sm text-gray-400",
                                    children: [
                                        ndviData[selectedLeftDate]?.date,
                                        " → NDVI ",
                                        ndviData[selectedLeftDate]?.ndvi.toFixed(3)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 485,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/BloomingMap.js",
                            lineNumber: 475,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-lg mb-3",
                                    children: "Right Map Period"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 491,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: "0",
                                    max: ndviData.length - 1,
                                    value: selectedRightDate,
                                    onChange: (e)=>setSelectedRightDate(parseInt(e.target.value)),
                                    className: "w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 492,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-sm text-gray-400",
                                    children: [
                                        ndviData[selectedRightDate]?.date,
                                        " → NDVI ",
                                        ndviData[selectedRightDate]?.ndvi.toFixed(3)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 500,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/BloomingMap.js",
                            lineNumber: 490,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/BloomingMap.js",
                    lineNumber: 474,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 473,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/BloomingMap.js",
        lineNumber: 407,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/gallery/gallleryItem.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const GalleryItem = ({ name, imageUrl, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: "flex flex-col items-center justify-center w-20 m-2 cursor-pointer hover:scale-105 transition",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: imageUrl,
                alt: name,
                className: "w-18 h-auto mb-1"
            }, void 0, false, {
                fileName: "[project]/src/app/gallery/gallleryItem.js",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-center",
                children: name
            }, void 0, false, {
                fileName: "[project]/src/app/gallery/gallleryItem.js",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/gallery/gallleryItem.js",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = GalleryItem;
}),
"[project]/src/app/gallery/infoModal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const InfoModal = ({ flower, onClose })=>{
    if (!flower) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-row text-center w-64 p-4 justify-center bg-secondary",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "mb-4 px-3 py-1 bg-highlight text-white font-bold rounded-3xl self-start",
                    children: "Explore other species"
                }, void 0, false, {
                    fileName: "[project]/src/app/gallery/infoModal.js",
                    lineNumber: 9,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: flower.image_url,
                    alt: flower.name,
                    className: "w-40 mx-auto mb-3"
                }, void 0, false, {
                    fileName: "[project]/src/app/gallery/infoModal.js",
                    lineNumber: 15,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-bold mb-2",
                    children: flower.name
                }, void 0, false, {
                    fileName: "[project]/src/app/gallery/infoModal.js",
                    lineNumber: 20,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "italic mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Scientific Name:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/gallery/infoModal.js",
                            lineNumber: 21,
                            columnNumber: 36
                        }, ("TURBOPACK compile-time value", void 0)),
                        " ",
                        flower.scientific_name
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/gallery/infoModal.js",
                    lineNumber: 21,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Origin:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/gallery/infoModal.js",
                            lineNumber: 23,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        " ",
                        flower.origin
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/gallery/infoModal.js",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Description:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/gallery/infoModal.js",
                            lineNumber: 26,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        " ",
                        flower.description
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/gallery/infoModal.js",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/gallery/infoModal.js",
            lineNumber: 8,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/gallery/infoModal.js",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = InfoModal;
}),
"[project]/src/app/gallery/speciesGallery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$gallery$2f$gallleryItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/gallery/gallleryItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$gallery$2f$infoModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/gallery/infoModal.js [app-ssr] (ecmascript)");
;
;
;
;
;
let species = [
    {
        name: "California wildrose",
        scientific_name: "Rosa californica",
        origin: "Western North America (California, Oregon, Baja California)",
        description: "A native wild rose with pink fragrant blooms and thorny stems. Often used in erosion control and natural landscaping. Symbolizes resilience and natural beauty.",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Rosa_californica_2004-07-20.jpg/1920px-Rosa_californica_2004-07-20.jpg"
    },
    {
        name: "Carolina spiderlily",
        scientific_name: "Hymenocallis occidentalis",
        origin: "Southeastern United States",
        description: "A striking perennial with spider-like white flowers and long, narrow petals. Commonly found in moist woodlands and riverbanks. Symbolizes purity and elegance.",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Hymenocallis_occidentalis_Arkansas.jpg/250px-Hymenocallis_occidentalis_Arkansas.jpg"
    },
    {
        name: "Common sunflower",
        scientific_name: "Helianthus annuus",
        origin: "North America",
        description: "A tall, iconic plant with large yellow flower heads that follow the sun (heliotropism). Widely cultivated for seeds and oil. Symbolizes warmth, positivity, and admiration.",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/250px-Sunflower_sky_backdrop.jpg"
    },
    {
        name: "Lady tulip",
        scientific_name: "Tulipa clusiana",
        origin: "Native to Iran, Afghanistan, and the Himalayas",
        description: "A graceful tulip with slender petals that open into a star-like shape, often bicolored in red and white. Popular in ornamental gardens. Symbolizes grace, elegance, and new beginnings.",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Tulip_Tulipa_clusiana_%27Lady_Jane%27_Rock_Ledge_Flower_2000px.jpg/250px-Tulip_Tulipa_clusiana_%27Lady_Jane%27_Rock_Ledge_Flower_2000px.jpg"
    }
];
function SpeciesGallery() {
    const [selectedFlower, setSelectedFlower] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const gallery = species;
    if (selectedFlower) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$gallery$2f$infoModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        flower: selectedFlower,
        onClose: ()=>setSelectedFlower(null)
    }, void 0, false, {
        fileName: "[project]/src/app/gallery/speciesGallery.js",
        lineNumber: 60,
        columnNumber: 7
    }, this);
    else return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "side-bar",
        className: "flex-row text-center w-64 p-4 justify-center bg-primary",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-bold text-2xl"
            }, void 0, false, {
                fileName: "[project]/src/app/gallery/speciesGallery.js",
                lineNumber: 71,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/src/app/gallery/speciesGallery.js",
                lineNumber: 72,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-bold text-2xl",
                children: " Search for a species "
            }, void 0, false, {
                fileName: "[project]/src/app/gallery/speciesGallery.js",
                lineNumber: 73,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/src/app/gallery/speciesGallery.js",
                lineNumber: 74,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: " Featured Species"
            }, void 0, false, {
                fileName: "[project]/src/app/gallery/speciesGallery.js",
                lineNumber: 75,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "side-bar",
                className: "flex flex-wrap text-center justify-center",
                children: gallery.map((flower, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$gallery$2f$gallleryItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        name: flower.name,
                        imageUrl: flower.image_url,
                        onClick: ()=>setSelectedFlower(flower)
                    }, index, false, {
                        fileName: "[project]/src/app/gallery/speciesGallery.js",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/gallery/speciesGallery.js",
                lineNumber: 76,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                fileName: "[project]/src/app/gallery/speciesGallery.js",
                lineNumber: 89,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/src/app/gallery/speciesGallery.js",
                lineNumber: 90,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: " All Species"
            }, void 0, false, {
                fileName: "[project]/src/app/gallery/speciesGallery.js",
                lineNumber: 91,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/src/app/gallery/speciesGallery.js",
                lineNumber: 92,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/gallery/speciesGallery.js",
        lineNumber: 67,
        columnNumber: 7
    }, this);
}
const __TURBOPACK__default__export__ = SpeciesGallery;
}),
"[project]/src/app/sideBar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$gallery$2f$speciesGallery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/gallery/speciesGallery.js [app-ssr] (ecmascript)");
;
;
;
function SideBar({ showSpecies }) {
    if (showSpecies) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$gallery$2f$speciesGallery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/sideBar.js",
        lineNumber: 5,
        columnNumber: 27
    }, this);
    else return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "side-bar",
        className: "justify-center w-10 bg-primary duration-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "./bloom.svg",
            className: "h-10"
        }, void 0, false, {
            fileName: "[project]/src/app/sideBar.js",
            lineNumber: 9,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/sideBar.js",
        lineNumber: 8,
        columnNumber: 7
    }, this);
}
const __TURBOPACK__default__export__ = SideBar;
}),
"[project]/src/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$BloomingMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/BloomingMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sideBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/sideBar.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    const [showSpecies, setShowSpecies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCompareModal, setShowCompareModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [compareMode, setCompareMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dateRange, setDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        start: "2024-01-01",
        end: "2024-12-31"
    });
    const handleResetCompareMode = ()=>{
        setCompareMode(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full h-screen flex flex-row justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sideBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                showSpecies: showSpecies
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "navigator",
                className: `
          fixed top-[15px] flex z-10 transition-transform duration-300
          ${showSpecies ? "translate-x-[200px]" : "translate-x-[0px]"}
        `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "./flower.svg",
                                className: "absolute my-[5px] mx-[25px] w-10 h-[20px]",
                                alt: "flower"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "species",
                                className: "h-[30px] mx-[20px] px-[40px] w-40 bg-primary font-bold text-white text-left rounded-3xl",
                                onClick: ()=>setShowSpecies((prev)=>{
                                        const next = !prev;
                                        console.log("Sidebar expanded:", next);
                                        return next;
                                    }),
                                children: "Species"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "./comparison.svg",
                                className: "absolute my-[5px] mx-[25px] w-10 h-[20px]",
                                alt: "Comparison icon"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "locations",
                                onClick: ()=>setShowCompareModal(true),
                                className: "h-[30px] mx-[20px] px-[40px] w-40 bg-primary font-bold text-white text-left rounded-3xl",
                                children: "Comparison"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            showCompareModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl p-8 w-[500px] shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-800",
                                    children: "Choose Comparison Mode"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCompareModal(false),
                                    className: "text-gray-500 hover:text-gray-700",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                    children: "Date Range"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: dateRange.start,
                                            onChange: (e)=>setDateRange((prev)=>({
                                                        ...prev,
                                                        start: e.target.value
                                                    })),
                                            className: "block w-full px-3 py-2 border border-gray-300 rounded-md"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: dateRange.end,
                                            onChange: (e)=>setDateRange((prev)=>({
                                                        ...prev,
                                                        end: e.target.value
                                                    })),
                                            className: "block w-full px-3 py-2 border border-gray-300 rounded-md"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setCompareMode({
                                            type: "global",
                                            dateRange
                                        });
                                        setShowCompareModal(false);
                                    },
                                    className: "px-6 py-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 font-semibold transition-colors",
                                    children: "🌍 Global NDVI Comparison"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setCompareMode({
                                            type: "point",
                                            dateRange
                                        });
                                        setShowCompareModal(false);
                                    },
                                    className: "px-6 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold transition-colors",
                                    children: "📍 Compare Two Points"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setCompareMode({
                                            type: "export",
                                            dateRange
                                        });
                                        setShowCompareModal(false);
                                    },
                                    className: "px-6 py-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 font-semibold transition-colors",
                                    children: "📊 Export Analysis Charts"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 71,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 70,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$BloomingMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                compareMode: compareMode,
                onResetCompareMode: handleResetCompareMode
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__49b54a19._.js.map