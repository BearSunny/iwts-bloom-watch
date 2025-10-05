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
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BloomingMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/mapbox-gl/dist/mapbox-gl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f40$mapbox$2f$mapbox$2d$gl$2d$geocoder$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/@mapbox/mapbox-gl-geocoder/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].accessToken = ("TURBOPACK compile-time value", "pk.eyJ1Ijoic3VubnkxNzMiLCJhIjoiY21nOWtwM2h2MDd4bjJpb3B3MGV4bXYyMyJ9.a1NLLN95JZ8EbhL8LJ-2VQ");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5000");
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
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
    const leftMapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightMapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const compareContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftMapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightMapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const compareMapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [ndviData, setNdviData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [frame, setFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [globalCompareMode, setGlobalCompareMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pointCompareMode, setPointCompareMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedLeftDate, setSelectedLeftDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedRightDate, setSelectedRightDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedPoints, setSelectedPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        first: null,
        second: null
    });
    const [pointData, setPointData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        first: [],
        second: []
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Update comparison handling based on mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
            map.once("load", ()=>addPulseLayer(map, sourceId, layerId, data));
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
                        2,
                        1,
                        10
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
                        "#60a5fa",
                        0.3,
                        "#facc15",
                        0.6,
                        "#22c55e",
                        1,
                        "#15803d"
                    ],
                    "circle-opacity": 0.6,
                    "circle-blur": 0.7
                }
            });
        }
    };
    // ✅ Init maps & interactions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!leftMapContainer.current) return;
        const createMap = (container)=>{
            const map = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Map({
                container,
                style: "mapbox://styles/mapbox/light-v11",
                center: [
                    0,
                    20
                ],
                zoom: 1.5
            });
            return map;
        };
        // Always create the left map
        const leftMap = createMap(leftMapContainer.current);
        leftMapRef.current = leftMap;
        leftMapRef.current.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f40$mapbox$2f$mapbox$2d$gl$2d$geocoder$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            accessToken: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].accessToken,
            useBrowserFocus: true,
            mapboxgl: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
        }), "top-left");
        // Create right map for global compare
        if (globalCompareMode && rightMapContainer.current) {
            const rightMap = createMap(rightMapContainer.current);
            rightMapRef.current = rightMap;
            rightMapRef.current.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f40$mapbox$2f$mapbox$2d$gl$2d$geocoder$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
                accessToken: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].accessToken,
                useBrowserFocus: true,
                mapboxgl: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            }), "top-left");
        }
        // Point comparison click handler
        const clickHandler = async (e)=>{
            if (!pointCompareMode) return;
            const { lng, lat } = e.lngLat;
            const color = !selectedPoints.first ? "#2563eb" : "#16a34a";
            new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Marker({
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
                    leftMapRef.current.remove();
                    leftMapRef.current = null;
                }
                if (rightMapRef.current) {
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    const ExitButton = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    leftMapRef.current.remove();
                    leftMapRef.current = null;
                }
                if (rightMapRef.current) {
                    rightMapRef.current.remove();
                    rightMapRef.current = null;
                }
                // Reset parent component state
                if (onResetCompareMode) onResetCompareMode();
            },
            className: "absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 transition-colors z-50",
            children: "Exit Comparison"
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
            lineNumber: 336,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full h-screen relative",
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-4 rounded-lg shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-semibold",
                        children: "Loading NDVI data..."
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                        lineNumber: 370,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                    lineNumber: 369,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                lineNumber: 368,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg",
                children: error
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                lineNumber: 376,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: leftMapContainer,
                className: "flex-1"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                lineNumber: 381,
                columnNumber: 7
            }, this),
            globalCompareMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: rightMapContainer,
                className: "flex-1 border-l-2 border-gray-400"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                lineNumber: 383,
                columnNumber: 9
            }, this),
            !globalCompareMode && !pointCompareMode && ndviData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 px-4 py-2 rounded-lg shadow",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-semibold",
                    children: [
                        "📅 ",
                        ndviData[frame]?.date,
                        " | 🌱 NDVI:",
                        " ",
                        ndviData[frame]?.ndvi.toFixed(3)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                    lineNumber: 392,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                lineNumber: 391,
                columnNumber: 9
            }, this),
            pointCompareMode && selectedPoints.first && selectedPoints.second && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl bg-black/80 p-6 rounded-2xl shadow-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-lg mb-3 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-4 h-4 rounded-full bg-blue-600 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                                            lineNumber: 405,
                                            columnNumber: 17
                                        }, this),
                                        "Point 1 NDVI Trend"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                                    lineNumber: 404,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400 text-sm",
                                    children: pointData.first.map((data, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                data.date,
                                                ": ",
                                                data.ndvi.toFixed(3)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                                            lineNumber: 410,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                                    lineNumber: 408,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                            lineNumber: 403,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-lg mb-3 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-4 h-4 rounded-full bg-green-600 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                                            lineNumber: 418,
                                            columnNumber: 17
                                        }, this),
                                        "Point 2 NDVI Trend"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                                    lineNumber: 417,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400 text-sm",
                                    children: pointData.second.map((data, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                data.date,
                                                ": ",
                                                data.ndvi.toFixed(3)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                                            lineNumber: 423,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                                    lineNumber: 421,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                            lineNumber: 416,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                    lineNumber: 402,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                lineNumber: 401,
                columnNumber: 9
            }, this),
            (globalCompareMode || pointCompareMode) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExitButton, {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                lineNumber: 433,
                columnNumber: 51
            }, this),
            globalCompareMode && ndviData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl bg-black/80 p-6 rounded-2xl shadow-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-lg mb-3",
                                    children: "Left Map Period"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                                    lineNumber: 440,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: "0",
                                    max: ndviData.length - 1,
                                    value: selectedLeftDate,
                                    onChange: (e)=>setSelectedLeftDate(parseInt(e.target.value)),
                                    className: "w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                                    lineNumber: 441,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-sm text-gray-400",
                                    children: [
                                        ndviData[selectedLeftDate]?.date,
                                        " → NDVI",
                                        " ",
                                        ndviData[selectedLeftDate]?.ndvi.toFixed(3)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                                    lineNumber: 449,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                            lineNumber: 439,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-lg mb-3",
                                    children: "Right Map Period"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                                    lineNumber: 456,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: "0",
                                    max: ndviData.length - 1,
                                    value: selectedRightDate,
                                    onChange: (e)=>setSelectedRightDate(parseInt(e.target.value)),
                                    className: "w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                                    lineNumber: 457,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-sm text-gray-400",
                                    children: [
                                        ndviData[selectedRightDate]?.date,
                                        " → NDVI",
                                        " ",
                                        ndviData[selectedRightDate]?.ndvi.toFixed(3)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                                    lineNumber: 465,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                            lineNumber: 455,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                    lineNumber: 438,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                lineNumber: 437,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
        lineNumber: 366,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/gallleryItem.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const GalleryItem = ({ name, imageUrl, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: "flex flex-col items-center justify-center w-20 m-2 cursor-pointer hover:scale-105 transition",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: imageUrl,
                alt: name,
                className: "w-18 h-auto mb-1"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/gallleryItem.js",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-center",
                children: name
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/gallleryItem.js",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/gallleryItem.js",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = GalleryItem;
}),
"[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/infoModal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const InfoModal = ({ flower, onClose })=>{
    if (!flower) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-row text-center w-80 p-4 justify-center bg-secondary",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "mb-4 px-3 py-1 bg-highlight text-white font-bold rounded-3xl self-start",
                    children: "Explore other species"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/infoModal.js",
                    lineNumber: 9,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: flower.image_url,
                    alt: flower.name,
                    className: "w-40 mx-auto mb-3"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/infoModal.js",
                    lineNumber: 15,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-bold mb-2",
                    children: flower.name
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/infoModal.js",
                    lineNumber: 20,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "italic mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Scientific Name:"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/infoModal.js",
                            lineNumber: 21,
                            columnNumber: 36
                        }, ("TURBOPACK compile-time value", void 0)),
                        " ",
                        flower.scientific_name
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/infoModal.js",
                    lineNumber: 21,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Origin:"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/infoModal.js",
                            lineNumber: 23,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        " ",
                        flower.origin
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/infoModal.js",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Description:"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/infoModal.js",
                            lineNumber: 26,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        " ",
                        flower.description
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/infoModal.js",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/infoModal.js",
            lineNumber: 8,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/infoModal.js",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = InfoModal;
}),
"[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$gallery$2f$gallleryItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/gallleryItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$gallery$2f$infoModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/infoModal.js [app-ssr] (ecmascript)");
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
    const [selectedFlower, setSelectedFlower] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const gallery = species;
    if (selectedFlower) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$gallery$2f$infoModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        flower: selectedFlower,
        onClose: ()=>setSelectedFlower(null)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
        lineNumber: 60,
        columnNumber: 7
    }, this);
    else return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "side-bar",
        className: "flex-row text-center w-80 p-4 justify-center bg-primary",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-bold text-2xl"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
                lineNumber: 71,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
                lineNumber: 72,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-bold text-2xl",
                children: " Search for a species "
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
                lineNumber: 73,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
                lineNumber: 74,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: " Featured Species"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
                lineNumber: 75,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "side-bar",
                className: "flex flex-wrap text-center justify-center",
                children: gallery.map((flower, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$gallery$2f$gallleryItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        name: flower.name,
                        imageUrl: flower.image_url,
                        onClick: ()=>setSelectedFlower(flower)
                    }, index, false, {
                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
                lineNumber: 76,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
                lineNumber: 89,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
                lineNumber: 90,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: " All Species"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
                lineNumber: 91,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
                lineNumber: 92,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
        lineNumber: 67,
        columnNumber: 7
    }, this);
}
const __TURBOPACK__default__export__ = SpeciesGallery;
}),
"[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/sideBar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$gallery$2f$speciesGallery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js [app-ssr] (ecmascript)");
;
;
;
function SideBar({ showSpecies }) {
    if (showSpecies) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$gallery$2f$speciesGallery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/sideBar.js",
        lineNumber: 5,
        columnNumber: 27
    }, this);
    else return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "side-bar",
        className: "justify-center w-10 bg-primary duration-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "./bloom.svg",
            className: "h-10"
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/sideBar.js",
            lineNumber: 12,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/sideBar.js",
        lineNumber: 8,
        columnNumber: 7
    }, this);
}
const __TURBOPACK__default__export__ = SideBar;
}),
"[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/chart/NDVIChart.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/chart.js/dist/chart.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/react-chartjs-2/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chartjs$2d$adapter$2d$date$2d$fns$2f$dist$2f$chartjs$2d$adapter$2d$date$2d$fns$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.esm.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Filler"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TimeScale"]);
// === NDVI DATA ===
const ndviData = [
    {
        date: "2024-01-01",
        ndvi: 0.328372877845626
    },
    {
        date: "2024-01-17",
        ndvi: 0.3133371984834311
    },
    {
        date: "2024-02-02",
        ndvi: 0.3164387600096921
    },
    {
        date: "2024-02-18",
        ndvi: 0.31208659739892214
    },
    {
        date: "2024-03-05",
        ndvi: 0.31966332975949524
    },
    {
        date: "2024-03-21",
        ndvi: 0.33007922383256183
    },
    {
        date: "2024-04-06",
        ndvi: 0.35177632452720925
    },
    {
        date: "2024-04-22",
        ndvi: 0.37442884545118443
    },
    {
        date: "2024-05-08",
        ndvi: 0.3989218979442026
    },
    {
        date: "2024-05-24",
        ndvi: 0.4314162413513212
    },
    {
        date: "2024-06-09",
        ndvi: 0.45418827669947287
    },
    {
        date: "2024-06-25",
        ndvi: 0.47499360239633026
    },
    {
        date: "2024-07-11",
        ndvi: 0.47279709475136944
    },
    {
        date: "2024-07-27",
        ndvi: 0.48198399499941424
    },
    {
        date: "2024-08-12",
        ndvi: 0.4815237719484111
    },
    {
        date: "2024-08-28",
        ndvi: 0.46748123043769413
    },
    {
        date: "2024-09-13",
        ndvi: 0.44788238171909645
    },
    {
        date: "2024-09-29",
        ndvi: 0.4162884776820417
    },
    {
        date: "2024-10-15",
        ndvi: 0.3905575547898575
    },
    {
        date: "2024-10-31",
        ndvi: 0.3633956063834815
    },
    {
        date: "2024-11-16",
        ndvi: 0.3526573643016067
    },
    {
        date: "2024-12-02",
        ndvi: 0.34495404214567377
    },
    {
        date: "2024-12-18",
        ndvi: 0.3352773682018393
    }
];
// === Crosshair Plugin ===
const crosshairPlugin = {
    id: "crosshair",
    afterDatasetsDraw (chart) {
        const { ctx, tooltip, chartArea: { top, bottom, left, right } } = chart;
        if (!tooltip?.getActiveElements()?.length) return;
        const { x, y } = tooltip.getActiveElements()[0].element;
        ctx.save();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgba(0,0,0,0.25)";
        ctx.setLineDash([
            3,
            3
        ]);
        ctx.beginPath();
        ctx.moveTo(x, top);
        ctx.lineTo(x, bottom);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(left, y);
        ctx.lineTo(right, y);
        ctx.stroke();
        ctx.restore();
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(crosshairPlugin);
// === COMPONENT ===
const NDVIChart = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Export PNG function exposed to parent
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, ()=>({
            exportToPNG () {
                if (!chartRef.current) return;
                const imageUrl = chartRef.current.toBase64Image("image/png", 1.0);
                const link = document.createElement("a");
                link.href = imageUrl;
                link.download = "NDVI_Chart.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }));
    const data = {
        labels: ndviData.map((d)=>d.date),
        datasets: [
            {
                label: "NDVI",
                data: ndviData.map((d)=>d.ndvi.toFixed(3)),
                fill: true,
                backgroundColor: (context)=>{
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(0, "rgba(34,197,94,0.4)");
                    gradient.addColorStop(1, "rgba(34,197,94,0.0)");
                    return gradient;
                },
                borderColor: "rgba(22,163,74,1)",
                pointRadius: 3,
                tension: 0.3,
                pointBackgroundColor: "rgba(22,163,74,1)"
            }
        ]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: "nearest",
            intersect: false
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false,
                external: (context)=>{
                    const { chart, tooltip } = context;
                    let tooltipEl = document.getElementById("custom-tooltip");
                    if (!tooltipEl) {
                        tooltipEl = document.createElement("div");
                        tooltipEl.id = "custom-tooltip";
                        tooltipEl.className = "absolute bg-white border border-gray-300 rounded-lg shadow-md p-2 text-sm pointer-events-none";
                        chart.canvas.parentNode.appendChild(tooltipEl);
                    }
                    if (tooltip.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }
                    if (tooltip.body) {
                        const { dataIndex } = tooltip.dataPoints[0];
                        const d = ndviData[dataIndex];
                        tooltipEl.innerHTML = `
              <div><b>${new Date(d.date).toDateString()}</b></div>
              <div>NDVI: ${d.ndvi.toFixed(3)}</div>
            `;
                    }
                    const { offsetLeft, offsetTop } = chart.canvas;
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.left = offsetLeft + tooltip.caretX + 15 + "px";
                    tooltipEl.style.top = offsetTop + tooltip.caretY - 30 + "px";
                }
            }
        },
        scales: {
            x: {
                type: "time",
                time: {
                    unit: "month",
                    displayFormats: {
                        month: "MMM"
                    }
                },
                grid: {
                    color: "rgba(0,0,0,0.05)"
                },
                title: {
                    display: true,
                    text: "Date"
                }
            },
            y: {
                min: 0,
                max: 1,
                ticks: {
                    stepSize: 0.1,
                    callback: (v)=>v.toFixed(1)
                },
                grid: {
                    color: "rgba(0,0,0,0.05)"
                },
                title: {
                    display: true,
                    text: "NDVI (0–1.0)"
                }
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
            ref: chartRef,
            data: data,
            options: options
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/chart/NDVIChart.js",
            lineNumber: 184,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/chart/NDVIChart.js",
        lineNumber: 183,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
const __TURBOPACK__default__export__ = NDVIChart;
}),
"[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js'\n\nExpected '</', got 'isOpen'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6ea59cd2._.js.map