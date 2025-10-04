(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/BloomingMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BloomingMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mapbox$2f$mapbox$2d$gl$2d$draw$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mapbox/mapbox-gl-draw/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mapbox-gl/dist/mapbox-gl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken = ("TURBOPACK compile-time value", "pk.eyJ1Ijoic3VubnkxNzMiLCJhIjoiY21nOWtwM2h2MDd4bjJpb3B3MGV4bXYyMyJ9.a1NLLN95JZ8EbhL8LJ-2VQ");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5000/api");
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
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
    const leftMapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightMapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const compareContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftMapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightMapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const compareMapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [ndviData, setNdviData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [frame, setFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [globalCompareMode, setGlobalCompareMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pointCompareMode, setPointCompareMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedLeftDate, setSelectedLeftDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedRightDate, setSelectedRightDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedPoints, setSelectedPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        first: null,
        second: null
    });
    const [pointData, setPointData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        first: [],
        second: []
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Update comparison handling based on mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BloomingMap.useEffect": ()=>{
            if (!leftMapContainer.current) return;
            const createMap = {
                "BloomingMap.useEffect.createMap": (container)=>{
                    const map = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
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
            leftMapRef.current = createMap(leftMapContainer.current);
            // Create right map for global compare
            if (globalCompareMode && rightMapContainer.current) {
                rightMapRef.current = createMap(rightMapContainer.current);
            }
            // Point comparison click handler
            const clickHandler = {
                "BloomingMap.useEffect.clickHandler": async (e)=>{
                    if (!pointCompareMode) return;
                    const { lng, lat } = e.lngLat;
                    const color = !selectedPoints.first ? "#2563eb" : "#16a34a";
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    const ExitButton = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            fileName: "[project]/src/app/BloomingMap.js",
            lineNumber: 277,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full h-screen relative",
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-4 rounded-lg shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-semibold",
                        children: "Loading NDVI data..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/BloomingMap.js",
                        lineNumber: 311,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/BloomingMap.js",
                    lineNumber: 310,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 309,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 317,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: leftMapContainer,
                className: "flex-1"
            }, void 0, false, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            globalCompareMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: rightMapContainer,
                className: "flex-1 border-l-2 border-gray-400"
            }, void 0, false, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 324,
                columnNumber: 9
            }, this),
            !globalCompareMode && !pointCompareMode && ndviData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 px-4 py-2 rounded-lg shadow",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-semibold",
                    children: [
                        "📅 ",
                        (_ndviData_frame = ndviData[frame]) === null || _ndviData_frame === void 0 ? void 0 : _ndviData_frame.date,
                        " | 🌱 NDVI: ",
                        (_ndviData_frame1 = ndviData[frame]) === null || _ndviData_frame1 === void 0 ? void 0 : _ndviData_frame1.ndvi.toFixed(3)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/BloomingMap.js",
                    lineNumber: 330,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 329,
                columnNumber: 9
            }, this),
            pointCompareMode && selectedPoints.first && selectedPoints.second && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl bg-black/80 p-6 rounded-2xl shadow-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-lg mb-3 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-4 h-4 rounded-full bg-blue-600 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/BloomingMap.js",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, this),
                                        "Point 1 NDVI Trend"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 341,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400 text-sm",
                                    children: pointData.first.map((data, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                data.date,
                                                ": ",
                                                data.ndvi.toFixed(3)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/app/BloomingMap.js",
                                            lineNumber: 347,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 345,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/BloomingMap.js",
                            lineNumber: 340,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-lg mb-3 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-4 h-4 rounded-full bg-green-600 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/BloomingMap.js",
                                            lineNumber: 353,
                                            columnNumber: 17
                                        }, this),
                                        "Point 2 NDVI Trend"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 352,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400 text-sm",
                                    children: pointData.second.map((data, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                data.date,
                                                ": ",
                                                data.ndvi.toFixed(3)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/app/BloomingMap.js",
                                            lineNumber: 358,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 356,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/BloomingMap.js",
                            lineNumber: 351,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/BloomingMap.js",
                    lineNumber: 339,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 338,
                columnNumber: 9
            }, this),
            (globalCompareMode || pointCompareMode) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExitButton, {}, void 0, false, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 366,
                columnNumber: 51
            }, this),
            globalCompareMode && ndviData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl bg-black/80 p-6 rounded-2xl shadow-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-lg mb-3",
                                    children: "Left Map Period"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 373,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: "0",
                                    max: ndviData.length - 1,
                                    value: selectedLeftDate,
                                    onChange: (e)=>setSelectedLeftDate(parseInt(e.target.value)),
                                    className: "w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 374,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-sm text-gray-400",
                                    children: [
                                        (_ndviData_selectedLeftDate = ndviData[selectedLeftDate]) === null || _ndviData_selectedLeftDate === void 0 ? void 0 : _ndviData_selectedLeftDate.date,
                                        " → NDVI ",
                                        (_ndviData_selectedLeftDate1 = ndviData[selectedLeftDate]) === null || _ndviData_selectedLeftDate1 === void 0 ? void 0 : _ndviData_selectedLeftDate1.ndvi.toFixed(3)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 382,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/BloomingMap.js",
                            lineNumber: 372,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-lg mb-3",
                                    children: "Right Map Period"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 388,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: "0",
                                    max: ndviData.length - 1,
                                    value: selectedRightDate,
                                    onChange: (e)=>setSelectedRightDate(parseInt(e.target.value)),
                                    className: "w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 389,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-sm text-gray-400",
                                    children: [
                                        (_ndviData_selectedRightDate = ndviData[selectedRightDate]) === null || _ndviData_selectedRightDate === void 0 ? void 0 : _ndviData_selectedRightDate.date,
                                        " → NDVI ",
                                        (_ndviData_selectedRightDate1 = ndviData[selectedRightDate]) === null || _ndviData_selectedRightDate1 === void 0 ? void 0 : _ndviData_selectedRightDate1.ndvi.toFixed(3)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 397,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/BloomingMap.js",
                            lineNumber: 387,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/BloomingMap.js",
                    lineNumber: 371,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 370,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/BloomingMap.js",
        lineNumber: 307,
        columnNumber: 5
    }, this);
}
_s(BloomingMap, "la3N0c1i7Jbt+9UXui01fvgOYNE=");
_c = BloomingMap;
var _c;
__turbopack_context__.k.register(_c, "BloomingMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$BloomingMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/BloomingMap.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Home() {
    _s();
    const [showCompareModal, setShowCompareModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [compareMode, setCompareMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dateRange, setDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        start: "2024-01-01",
        end: "2024-12-31"
    });
    const handleResetCompareMode = ()=>{
        setCompareMode(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full h-screen flex flex-row justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "side-bar",
                className: "justify-center w-10 bg-primary",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "./bloom.svg",
                    className: "h-10",
                    alt: "Bloom logo"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "navigator",
                className: "absolute flex my-[15px] z-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "./flower.svg",
                                className: "absolute my-[5px] mx-[25px] w-10 h-[20px]",
                                alt: "Flower icon"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "species",
                                className: "h-[30px] mx-[20px] px-[40px] w-40 bg-primary font-bold text-white text-left rounded-3xl",
                                children: "Species"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "./comparison.svg",
                                className: "absolute my-[5px] mx-[25px] w-10 h-[20px]",
                                alt: "Comparison icon"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "locations",
                                onClick: ()=>setShowCompareModal(true),
                                className: "h-[30px] mx-[20px] px-[40px] w-40 bg-primary font-bold text-white text-left rounded-3xl",
                                children: "Comparison"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            showCompareModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl p-8 w-[500px] shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-800",
                                    children: "Choose Comparison Mode"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCompareModal(false),
                                    className: "text-gray-500 hover:text-gray-700",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                    children: "Date Range"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: dateRange.start,
                                            onChange: (e)=>setDateRange((prev)=>({
                                                        ...prev,
                                                        start: e.target.value
                                                    })),
                                            className: "block w-full px-3 py-2 border border-gray-300 rounded-md"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: dateRange.end,
                                            onChange: (e)=>setDateRange((prev)=>({
                                                        ...prev,
                                                        end: e.target.value
                                                    })),
                                            className: "block w-full px-3 py-2 border border-gray-300 rounded-md"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 46,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 45,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$BloomingMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                compareMode: compareMode,
                onResetCompareMode: handleResetCompareMode
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(Home, "vvoPcdnt1v7bdk35or/0iGK/QvA=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_ca7f6912._.js.map