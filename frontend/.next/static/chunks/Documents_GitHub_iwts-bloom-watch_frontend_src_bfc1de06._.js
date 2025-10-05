(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BloomingMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/mapbox-gl/dist/mapbox-gl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f40$mapbox$2f$mapbox$2d$gl$2d$geocoder$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/@mapbox/mapbox-gl-geocoder/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken = ("TURBOPACK compile-time value", "pk.eyJ1Ijoic3VubnkxNzMiLCJhIjoiY21nOWtwM2h2MDd4bjJpb3B3MGV4bXYyMyJ9.a1NLLN95JZ8EbhL8LJ-2VQ");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5000");
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: API_BASE_URL,
    timeout: 60000
});
// Generate ~300 random global points
const generateRandomPoints = function() {
    let count = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 300;
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
function BloomingMap(param) {
    let { compareMode, onResetCompareMode } = param;
    var _ndviData_frame, _ndviData_frame1, _ndviData_selectedLeftDate, _ndviData_selectedLeftDate1, _ndviData_selectedRightDate, _ndviData_selectedRightDate1;
    _s();
    const leftMapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightMapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const compareContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftMapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightMapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const compareMapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [ndviData, setNdviData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [frame, setFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [globalCompareMode, setGlobalCompareMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pointCompareMode, setPointCompareMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedLeftDate, setSelectedLeftDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedRightDate, setSelectedRightDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedPoints, setSelectedPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        first: null,
        second: null
    });
    const [pointData, setPointData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        first: [],
        second: []
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Update comparison handling based on mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BloomingMap.useEffect": ()=>{
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
        }
    }["BloomingMap.useEffect"], [
        compareMode
    ]);
    // ✅ Fetch global NDVI
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BloomingMap.useEffect": ()=>{
            const fetchNDVI = {
                "BloomingMap.useEffect.fetchNDVI": async ()=>{
                    setIsLoading(true);
                    setError(null);
                    try {
                        var _compareMode_dateRange, _compareMode_dateRange1;
                        const res = await api.get("/ndvi/global", {
                            params: {
                                start: compareMode === null || compareMode === void 0 ? void 0 : (_compareMode_dateRange = compareMode.dateRange) === null || _compareMode_dateRange === void 0 ? void 0 : _compareMode_dateRange.start,
                                end: compareMode === null || compareMode === void 0 ? void 0 : (_compareMode_dateRange1 = compareMode.dateRange) === null || _compareMode_dateRange1 === void 0 ? void 0 : _compareMode_dateRange1.end
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
                }
            }["BloomingMap.useEffect.fetchNDVI"];
            fetchNDVI();
        }
    }["BloomingMap.useEffect"], [
        compareMode === null || compareMode === void 0 ? void 0 : compareMode.dateRange
    ]);
    const generatePulseData = (ndviValue, date)=>({
            type: "FeatureCollection",
            features: globalPoints.map((param)=>{
                let [lon, lat] = param;
                return {
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
                };
            })
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BloomingMap.useEffect": ()=>{
            if (!leftMapContainer.current) return;
            const createMap = {
                "BloomingMap.useEffect.createMap": (container)=>{
                    const map = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
                        container,
                        style: "mapbox://styles/mapbox/light-v11",
                        center: [
                            0,
                            20
                        ],
                        zoom: 1.5
                    });
                    return map;
                }
            }["BloomingMap.useEffect.createMap"];
            // Always create the left map
            const leftMap = createMap(leftMapContainer.current);
            leftMapRef.current = leftMap;
            leftMapRef.current.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f40$mapbox$2f$mapbox$2d$gl$2d$geocoder$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                accessToken: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken,
                useBrowserFocus: true,
                mapboxgl: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            }), "top-left");
            // Create right map for global compare
            if (globalCompareMode && rightMapContainer.current) {
                const rightMap = createMap(rightMapContainer.current);
                rightMapRef.current = rightMap;
                rightMapRef.current.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f40$mapbox$2f$mapbox$2d$gl$2d$geocoder$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                    accessToken: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken,
                    useBrowserFocus: true,
                    mapboxgl: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                }), "top-left");
            }
            // Point comparison click handler
            const clickHandler = {
                "BloomingMap.useEffect.clickHandler": async (e)=>{
                    if (!pointCompareMode) return;
                    const { lng, lat } = e.lngLat;
                    const color = !selectedPoints.first ? "#2563eb" : "#16a34a";
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker({
                        color
                    }).setLngLat([
                        lng,
                        lat
                    ]).addTo(leftMapRef.current);
                    try {
                        var _compareMode_dateRange, _compareMode_dateRange1;
                        const res = await api.get("/ndvi/point", {
                            params: {
                                lat,
                                lon: lng,
                                start: compareMode === null || compareMode === void 0 ? void 0 : (_compareMode_dateRange = compareMode.dateRange) === null || _compareMode_dateRange === void 0 ? void 0 : _compareMode_dateRange.start,
                                end: compareMode === null || compareMode === void 0 ? void 0 : (_compareMode_dateRange1 = compareMode.dateRange) === null || _compareMode_dateRange1 === void 0 ? void 0 : _compareMode_dateRange1.end,
                                buffer: 1000
                            }
                        });
                        if (!selectedPoints.first) {
                            setSelectedPoints({
                                "BloomingMap.useEffect.clickHandler": (prev)=>({
                                        ...prev,
                                        first: {
                                            lat,
                                            lon: lng
                                        }
                                    })
                            }["BloomingMap.useEffect.clickHandler"]);
                            setPointData({
                                "BloomingMap.useEffect.clickHandler": (prev)=>({
                                        ...prev,
                                        first: res.data.data
                                    })
                            }["BloomingMap.useEffect.clickHandler"]);
                        } else if (!selectedPoints.second) {
                            setSelectedPoints({
                                "BloomingMap.useEffect.clickHandler": (prev)=>({
                                        ...prev,
                                        second: {
                                            lat,
                                            lon: lng
                                        }
                                    })
                            }["BloomingMap.useEffect.clickHandler"]);
                            setPointData({
                                "BloomingMap.useEffect.clickHandler": (prev)=>({
                                        ...prev,
                                        second: res.data.data
                                    })
                            }["BloomingMap.useEffect.clickHandler"]);
                        }
                    } catch (err) {
                        console.error("Error fetching point NDVI:", err);
                    }
                }
            }["BloomingMap.useEffect.clickHandler"];
            if (leftMapRef.current) {
                leftMapRef.current.on("click", clickHandler);
            }
            // Improved cleanup function
            return ({
                "BloomingMap.useEffect": ()=>{
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
                }
            })["BloomingMap.useEffect"];
        }
    }["BloomingMap.useEffect"], [
        globalCompareMode,
        pointCompareMode,
        compareMode === null || compareMode === void 0 ? void 0 : compareMode.dateRange
    ]);
    // ✅ Animate pulses (stop when in regional compare mode)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BloomingMap.useEffect": ()=>{
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
                const interval = setInterval({
                    "BloomingMap.useEffect.interval": ()=>{
                        i = (i + 1) % ndviData.length;
                        setFrame(i);
                        const { ndvi, date } = ndviData[i];
                        const pulseData = generatePulseData(ndvi, date);
                        addPulseLayer(leftMapRef.current, "ndvi-source-left", "ndvi-layer-left", pulseData);
                    }
                }["BloomingMap.useEffect.interval"], 1500);
                return ({
                    "BloomingMap.useEffect": ()=>clearInterval(interval)
                })["BloomingMap.useEffect"];
            }
        }
    }["BloomingMap.useEffect"], [
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
    const ExitButton = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full h-screen relative",
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-4 rounded-lg shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg",
                children: error
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                lineNumber: 376,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: leftMapContainer,
                className: "flex-1"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                lineNumber: 381,
                columnNumber: 7
            }, this),
            globalCompareMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: rightMapContainer,
                className: "flex-1 border-l-2 border-gray-400"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                lineNumber: 383,
                columnNumber: 9
            }, this),
            !globalCompareMode && !pointCompareMode && ndviData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 px-4 py-2 rounded-lg shadow",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-semibold",
                    children: [
                        "📅 ",
                        (_ndviData_frame = ndviData[frame]) === null || _ndviData_frame === void 0 ? void 0 : _ndviData_frame.date,
                        " | 🌱 NDVI:",
                        " ",
                        (_ndviData_frame1 = ndviData[frame]) === null || _ndviData_frame1 === void 0 ? void 0 : _ndviData_frame1.ndvi.toFixed(3)
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
            pointCompareMode && selectedPoints.first && selectedPoints.second && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl bg-black/80 p-6 rounded-2xl shadow-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-lg mb-3 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400 text-sm",
                                    children: pointData.first.map((data, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-lg mb-3 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400 text-sm",
                                    children: pointData.second.map((data, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            (globalCompareMode || pointCompareMode) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExitButton, {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                lineNumber: 433,
                columnNumber: 51
            }, this),
            globalCompareMode && ndviData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl bg-black/80 p-6 rounded-2xl shadow-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-lg mb-3",
                                    children: "Left Map Period"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                                    lineNumber: 440,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-sm text-gray-400",
                                    children: [
                                        (_ndviData_selectedLeftDate = ndviData[selectedLeftDate]) === null || _ndviData_selectedLeftDate === void 0 ? void 0 : _ndviData_selectedLeftDate.date,
                                        " → NDVI",
                                        " ",
                                        (_ndviData_selectedLeftDate1 = ndviData[selectedLeftDate]) === null || _ndviData_selectedLeftDate1 === void 0 ? void 0 : _ndviData_selectedLeftDate1.ndvi.toFixed(3)
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-lg mb-3",
                                    children: "Right Map Period"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                                    lineNumber: 456,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-sm text-gray-400",
                                    children: [
                                        (_ndviData_selectedRightDate = ndviData[selectedRightDate]) === null || _ndviData_selectedRightDate === void 0 ? void 0 : _ndviData_selectedRightDate.date,
                                        " → NDVI",
                                        " ",
                                        (_ndviData_selectedRightDate1 = ndviData[selectedRightDate]) === null || _ndviData_selectedRightDate1 === void 0 ? void 0 : _ndviData_selectedRightDate1.ndvi.toFixed(3)
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
_s(BloomingMap, "9XE+46gS+qvoA+Wf9KE4YWCyNBY=");
_c = BloomingMap;
var _c;
__turbopack_context__.k.register(_c, "BloomingMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/gallleryItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const GalleryItem = (param)=>{
    let { name, imageUrl, onClick } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: "flex flex-col items-center justify-center w-20 m-2 cursor-pointer hover:scale-105 transition",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: imageUrl,
                alt: name,
                className: "w-18 h-auto mb-1"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/gallleryItem.js",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_c = GalleryItem;
const __TURBOPACK__default__export__ = GalleryItem;
var _c;
__turbopack_context__.k.register(_c, "GalleryItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/infoModal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const InfoModal = (param)=>{
    let { flower, onClose } = param;
    if (!flower) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-row text-center w-80 p-4 justify-center bg-secondary",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "mb-4 px-3 py-1 bg-highlight text-white font-bold rounded-3xl self-start",
                    children: "Explore other species"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/infoModal.js",
                    lineNumber: 9,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: flower.image_url,
                    alt: flower.name,
                    className: "w-40 mx-auto mb-3"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/infoModal.js",
                    lineNumber: 15,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-bold mb-2",
                    children: flower.name
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/infoModal.js",
                    lineNumber: 20,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "italic mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
_c = InfoModal;
const __TURBOPACK__default__export__ = InfoModal;
var _c;
__turbopack_context__.k.register(_c, "InfoModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$gallery$2f$gallleryItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/gallleryItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$gallery$2f$infoModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/infoModal.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const [selectedFlower, setSelectedFlower] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const gallery = species;
    if (selectedFlower) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$gallery$2f$infoModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        flower: selectedFlower,
        onClose: ()=>setSelectedFlower(null)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
        lineNumber: 60,
        columnNumber: 7
    }, this);
    else return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "side-bar",
        className: "flex-row text-center w-80 p-4 justify-center bg-primary",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-bold text-2xl"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
                lineNumber: 71,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
                lineNumber: 72,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-bold text-2xl",
                children: " Search for a species "
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
                lineNumber: 73,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
                lineNumber: 74,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: " Featured Species"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
                lineNumber: 75,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "side-bar",
                className: "flex flex-wrap text-center justify-center",
                children: gallery.map((flower, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$gallery$2f$gallleryItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
                lineNumber: 89,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
                lineNumber: 90,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: " All Species"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js",
                lineNumber: 91,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
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
_s(SpeciesGallery, "s7iLTBoGk2D9u8NQ4QT3g3deNKw=");
_c = SpeciesGallery;
const __TURBOPACK__default__export__ = SpeciesGallery;
var _c;
__turbopack_context__.k.register(_c, "SpeciesGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/hooks/useBloomModel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBloomModel",
    ()=>useBloomModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useBloomModel() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Send input to get prediction
    const sendPrediction = async (payload)=>{
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("http://localhost:3000/api/model", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const result = await res.json();
            if (!res.ok) throw new Error(result.message || "Prediction failed");
            setData(result.result || null);
            return result.result;
        } catch (err) {
            setError(err.message);
            return null;
        } finally{
            setLoading(false);
        }
    };
    // Retrieve all stored predictions (empty POST)
    const getPredictions = async ()=>{
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("http://localhost:3000/api/model", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({})
            });
            const result = await res.json();
            if (!res.ok) throw new Error(result.message || "Failed to fetch predictions");
            setData(result.results || []);
            return result.results;
        } catch (err) {
            setError(err.message);
            return [];
        } finally{
            setLoading(false);
        }
    };
    return {
        data,
        loading,
        error,
        sendPrediction,
        getPredictions
    };
}
_s(useBloomModel, "QWXYazGZi4Gt8Bx0Jk+qWzQvd34=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/mapbox-gl/dist/mapbox-gl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$hooks$2f$useBloomModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/hooks/useBloomModel.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken = ("TURBOPACK compile-time value", "pk.eyJ1Ijoic3VubnkxNzMiLCJhIjoiY21nOWtwM2h2MDd4bjJpb3B3MGV4bXYyMyJ9.a1NLLN95JZ8EbhL8LJ-2VQ"); // Replace this with your actual token
function DashBoard() {
    _s();
    const mapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const marker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { sendPrediction, data, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$hooks$2f$useBloomModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBloomModel"])();
    const [latitude, setLatitude] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [longitude, setLongitude] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [species, setSpecies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [year, setYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().getFullYear());
    // Initialize map
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashBoard.useEffect": ()=>{
            if (map.current) return; // prevent multiple initializations
            map.current = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/light-v11",
                center: [
                    105.8,
                    21.0
                ],
                zoom: 4
            });
            // Add click handler to place pin
            map.current.on("click", {
                "DashBoard.useEffect": (e)=>{
                    const { lng, lat } = e.lngLat;
                    setLatitude(lat.toFixed(5));
                    setLongitude(lng.toFixed(5));
                    if (marker.current) marker.current.remove();
                    marker.current = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker({
                        color: "#E79473"
                    }).setLngLat([
                        lng,
                        lat
                    ]).addTo(map.current);
                }
            }["DashBoard.useEffect"]);
        }
    }["DashBoard.useEffect"], []);
    const handleSubmit = async ()=>{
        if (!latitude || !longitude || !species || !year) {
            alert("Please fill in all fields and select a location on the map.");
            return;
        }
        await sendPrediction({
            latitude,
            longitude,
            species,
            year
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-40 inset-auto flex-col text-center align-center justify-center w-150 h-[400px] p-4 pb-15 bg-white rounded-2xl shadow-md",
        style: {
            "--color-primary": "#498467",
            "--color-secondary": "#52B788",
            "--color-fill": "#B2D3A8",
            "--color-highlight": "#E79473",
            "--color-text": "#ffffff",
            backgroundColor: "var(--color-fill)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-6 bg-[var(--color-primary)] text-[var(--color-text)] shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold mb-2",
                        children: "🌸 Bloom Prediction Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-md max-w-xl mx-auto",
                        children: "This dashboard predicts the expected bloom date of a flower species at a specific location and year using environmental modeling data."
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "border-t-4 border-[var(--color-highlight)] my-4"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex flex-col items-center gap-6 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[90%] h-[350px] rounded-2xl overflow-hidden border-4 border-[var(--color-secondary)] shadow-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: mapContainer,
                            className: "w-full h-full"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[var(--color-primary)] font-medium",
                        children: "📍 Click on the map to set your desired location."
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col w-80 gap-3 text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-semibold text-[var(--color-primary)]",
                                children: "Flower Species"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Enter flower species name...",
                                value: species,
                                onChange: (e)=>setSpecies(e.target.value),
                                className: "border border-[var(--color-secondary)] rounded-lg p-2 focus:outline-none"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-semibold text-[var(--color-primary)]",
                                children: "Year"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: year,
                                min: 2020,
                                max: 2100,
                                onChange: (e)=>setYear(e.target.value),
                                className: "border border-[var(--color-secondary)] rounded-lg p-2 focus:outline-none"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSubmit,
                                disabled: loading,
                                className: "mt-3 bg-[var(--color-highlight)] text-[var(--color-text)] font-semibold py-2 rounded-lg hover:opacity-90",
                                children: loading ? "Predicting..." : "Predict Bloom Date"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "border-t-4 border-[var(--color-highlight)] my-4"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex flex-col items-center py-4",
                children: [
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-600",
                        children: [
                            "⚠️ ",
                            error
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                        lineNumber: 119,
                        columnNumber: 19
                    }, this),
                    data ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[var(--color-secondary)] text-[var(--color-text)] w-96 p-4 rounded-2xl shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold mb-2",
                                children: "🌼 Prediction Result"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Species:"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    data.species
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Coordinates:"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    data.latitude,
                                    ", ",
                                    data.longitude
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Year:"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    data.year
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Predicted Bloom Date:"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--color-highlight)] font-bold",
                                        children: data.predicted_date
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[var(--color-primary)] italic",
                        children: 'No prediction yet — fill in the details and click "Predict Bloom Date".'
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(DashBoard, "+DMFptNmmS2Qe/WEIkh5De2CLRo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$hooks$2f$useBloomModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBloomModel"]
    ];
});
_c = DashBoard;
var _c;
__turbopack_context__.k.register(_c, "DashBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/sideBar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$gallery$2f$speciesGallery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/gallery/speciesGallery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$dashBoard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/dashBoard.js [app-client] (ecmascript)");
;
;
;
;
function SideBar(param) {
    let { showSpecies, showDashBoard } = param;
    if (showSpecies) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$gallery$2f$speciesGallery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/sideBar.js",
        lineNumber: 6,
        columnNumber: 27
    }, this);
    else if (showDashBoard) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$dashBoard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/sideBar.js",
        lineNumber: 7,
        columnNumber: 34
    }, this);
    else return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "side-bar",
        className: "justify-center w-10 bg-primary duration-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "./bloom.svg",
            className: "h-10"
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/sideBar.js",
            lineNumber: 14,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/sideBar.js",
        lineNumber: 10,
        columnNumber: 7
    }, this);
}
_c = SideBar;
const __TURBOPACK__default__export__ = SideBar;
var _c;
__turbopack_context__.k.register(_c, "SideBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/chart/NDVIChart.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chartjs$2d$adapter$2d$date$2d$fns$2f$dist$2f$chartjs$2d$adapter$2d$date$2d$fns$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Filler"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TimeScale"]);
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
        var _tooltip_getActiveElements;
        const { ctx, tooltip, chartArea: { top, bottom, left, right } } = chart;
        if (!(tooltip === null || tooltip === void 0 ? void 0 : (_tooltip_getActiveElements = tooltip.getActiveElements()) === null || _tooltip_getActiveElements === void 0 ? void 0 : _tooltip_getActiveElements.length)) return;
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
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(crosshairPlugin);
// === COMPONENT ===
const NDVIChart = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s((props, ref)=>{
    _s();
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Export PNG function exposed to parent
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "NDVIChart.useImperativeHandle": ()=>({
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
            })
    }["NDVIChart.useImperativeHandle"]);
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
                        tooltipEl.innerHTML = "\n              <div><b>".concat(new Date(d.date).toDateString(), "</b></div>\n              <div>NDVI: ").concat(d.ndvi.toFixed(3), "</div>\n            ");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
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
}, "KD+9/EyPXFqCNCR4QIapfuQ9/s4=")), "KD+9/EyPXFqCNCR4QIapfuQ9/s4=");
_c1 = NDVIChart;
const __TURBOPACK__default__export__ = NDVIChart;
var _c, _c1;
__turbopack_context__.k.register(_c, "NDVIChart$forwardRef");
__turbopack_context__.k.register(_c1, "NDVIChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$BloomingMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$sideBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/sideBar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$chart$2f$NDVIChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/chart/NDVIChart.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Home() {
    _s();
    const [showSpecies, setShowSpecies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCompareModal, setShowCompareModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDashBoard, setShowDashBoard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [compareMode, setCompareMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showGraph, setShowGraph] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dateRange, setDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        start: "2024-01-01",
        end: "2024-12-31"
    });
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleResetCompareMode = ()=>{
        setCompareMode(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full h-screen flex flex-row justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$sideBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                showSpecies: showSpecies
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "navigator",
                className: "\n          fixed top-[15px] flex z-10 transition-transform duration-300\n          ".concat(showSpecies ? "translate-x-[200px]" : "translate-x-[0px]", "\n        "),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "./flower.svg",
                                className: "absolute my-[5px] mx-[25px] w-10 h-[20px]",
                                alt: "flower"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "species",
                                className: "h-[30px] mx-[20px] px-[40px] w-40 bg-primary font-bold text-white text-left rounded-3xl",
                                onClick: ()=>setShowSpecies((prev)=>{
                                        const next = !prev;
                                        console.log("Sidebar expanded:", next);
                                        return next;
                                    }),
                                children: "Species"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "./comparison.svg",
                                className: "absolute my-[5px] mx-[25px] w-10 h-[20px]",
                                alt: "Comparison icon"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "locations",
                                onClick: ()=>setShowCompareModal(true),
                                className: "h-[30px] mx-[20px] px-[40px] w-40 bg-primary font-bold text-white text-left rounded-3xl",
                                children: "Comparison"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "./comparison.svg",
                                className: "absolute my-[5px] mx-[25px] w-10 h-[20px]",
                                alt: "Comparison icon"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "locations",
                                onClick: ()=>setShowDashBoard(true),
                                className: "h-[30px] mx-[20px] px-[40px] bg-primary font-bold text-white text-left rounded-3xl",
                                children: "Farmer's Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            showCompareModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl p-8 w-[500px] shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-800",
                                    children: "Choose Comparison Mode"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCompareModal(false),
                                    className: "text-gray-500 hover:text-gray-700",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                    children: "Date Range"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: dateRange.start,
                                            onChange: (e)=>setDateRange((prev)=>({
                                                        ...prev,
                                                        start: e.target.value
                                                    })),
                                            className: "block w-full px-3 py-2 border border-gray-300 rounded-md"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: dateRange.end,
                                            onChange: (e)=>setDateRange((prev)=>({
                                                        ...prev,
                                                        end: e.target.value
                                                    })),
                                            className: "block w-full px-3 py-2 border border-gray-300 rounded-md"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setCompareMode({
                                            type: "export",
                                            dateRange
                                        });
                                        setShowCompareModal(false);
                                        setShowGraph((prev)=>{
                                            const next = !prev;
                                            return next;
                                        });
                                    },
                                    className: "px-6 py-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 font-semibold transition-colors",
                                    children: "📊 Export Analysis Charts"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                    lineNumber: 92,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                lineNumber: 91,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$BloomingMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                compareMode: compareMode,
                onResetCompareMode: handleResetCompareMode
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            showGraph ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-40 inset-auto flex-col text-center align-center justify-center w-150 h-[400px] p-4 pb-15 bg-white rounded-2xl shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full justify-between mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-3 py-1 bg-highlight text-white font-semibold rounded-3xl",
                                onClick: ()=>setShowGraph(false),
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-bold text-primary mt-3",
                                children: "NDVI Value Chart"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-3 py-1 bg-primary text-white font-semibold rounded-3xl",
                                onClick: ()=>{
                                    var _chartRef_current;
                                    return (_chartRef_current = chartRef.current) === null || _chartRef_current === void 0 ? void 0 : _chartRef_current.exportToPNG();
                                },
                                children: "Export Graph"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$chart$2f$NDVIChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ref: chartRef
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                lineNumber: 172,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(Home, "MdS8Qo5BRJh4iY4YE6HFinQMPrs=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_GitHub_iwts-bloom-watch_frontend_src_bfc1de06._.js.map