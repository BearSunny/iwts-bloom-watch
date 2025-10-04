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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f40$mapbox$2f$mapbox$2d$gl$2d$draw$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/@mapbox/mapbox-gl-draw/index.js [app-client] (ecmascript)");
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
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:3000");
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
function BloomingMap() {
    var _ndviData_frame, _ndviData_frame1, _regionData_currentIndex, _regionData_currentIndex1;
    _s();
    const leftMapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightMapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftMapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightMapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [ndviData, setNdviData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [frame, setFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [comparisonMode, setComparisonMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 🔹 Extra states for point/region
    const [selectedRegion, setSelectedRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [regionData, setRegionData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ✅ Fetch global NDVI
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BloomingMap.useEffect": ()=>{
            const fetchNDVI = {
                "BloomingMap.useEffect.fetchNDVI": async ()=>{
                    try {
                        const res = await api.get("/ndvi/global");
                        setNdviData(res.data.data); // [{date, ndvi}]
                    } catch (err) {
                        console.error("Error fetching NDVI:", err);
                    }
                }
            }["BloomingMap.useEffect.fetchNDVI"];
            fetchNDVI();
        }
    }["BloomingMap.useEffect"], []);
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
                "BloomingMap.useEffect.createMap": (container)=>new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
                        container,
                        style: "mapbox://styles/mapbox/light-v11",
                        center: [
                            0,
                            20
                        ],
                        zoom: 1.5
                    })
            }["BloomingMap.useEffect.createMap"];
            const leftMap = createMap(leftMapContainer.current);
            leftMapRef.current = leftMap;
            leftMapRef.current.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f40$mapbox$2f$mapbox$2d$gl$2d$geocoder$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                accessToken: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken,
                useBrowserFocus: true,
                mapboxgl: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            }), "top-left");
            if (comparisonMode && rightMapContainer.current) {
                const rightMap = createMap(rightMapContainer.current);
                rightMapRef.current = rightMap;
                rightMapRef.current.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f40$mapbox$2f$mapbox$2d$gl$2d$geocoder$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                    accessToken: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken,
                    useBrowserFocus: true,
                    mapboxgl: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                }), "top-left");
            }
            // 🔹 Add interactions (click + draw)
            const draw = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f40$mapbox$2f$mapbox$2d$gl$2d$draw$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                displayControlsDefault: false,
                controls: {
                    polygon: true,
                    trash: true
                }
            });
            leftMap.addControl(draw);
            leftMap.on("click", {
                "BloomingMap.useEffect": async (e)=>{
                    const { lng, lat } = e.lngLat;
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker({
                        color: "lime"
                    }).setLngLat([
                        lng,
                        lat
                    ]).addTo(leftMap);
                    try {
                        const res = await api.get("/ndvi/point", {
                            params: {
                                lat,
                                lon: lng,
                                start: "2024-03-01",
                                end: "2024-05-31",
                                buffer: 1000
                            }
                        });
                        setSelectedRegion({
                            lat,
                            lon: lng
                        });
                        setRegionData(res.data.data);
                        setCurrentIndex(0);
                        setIsPlaying(true);
                    } catch (err) {
                        console.error("Error fetching point NDVI:", err);
                    }
                }
            }["BloomingMap.useEffect"]);
            leftMap.on("draw.create", {
                "BloomingMap.useEffect": async (e)=>{
                    const coords = e.features[0].geometry.coordinates[0];
                    const lons = coords.map({
                        "BloomingMap.useEffect.lons": (c)=>c[0]
                    }["BloomingMap.useEffect.lons"]);
                    const lats = coords.map({
                        "BloomingMap.useEffect.lats": (c)=>c[1]
                    }["BloomingMap.useEffect.lats"]);
                    const bbox = [
                        Math.min(...lons),
                        Math.min(...lats),
                        Math.max(...lons),
                        Math.max(...lats)
                    ];
                    try {
                        const res = await api.get("/ndvi/regional", {
                            params: {
                                bbox: bbox.join(","),
                                start: "2024-03-01",
                                end: "2024-05-31"
                            }
                        });
                        setSelectedRegion({
                            bbox
                        });
                        setRegionData(res.data.data);
                        setCurrentIndex(0);
                        setIsPlaying(true);
                    } catch (err) {
                        console.error("Error fetching regional NDVI:", err);
                    }
                }
            }["BloomingMap.useEffect"]);
            return ({
                "BloomingMap.useEffect": ()=>{
                    if (leftMapRef.current) leftMapRef.current.remove();
                    if (rightMapRef.current) rightMapRef.current.remove();
                }
            })["BloomingMap.useEffect"];
        }
    }["BloomingMap.useEffect"], [
        comparisonMode
    ]);
    // ✅ Animate pulses
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BloomingMap.useEffect": ()=>{
            if (!leftMapRef.current || ndviData.length === 0) return;
            let i = 0;
            const interval = setInterval({
                "BloomingMap.useEffect.interval": ()=>{
                    i = (i + 1) % ndviData.length;
                    setFrame(i);
                    const { ndvi, date } = ndviData[i];
                    const pulseData = generatePulseData(ndvi, date);
                    addPulseLayer(leftMapRef.current, "ndvi-source-left", "ndvi-layer-left", pulseData);
                    if (comparisonMode && rightMapRef.current) {
                        addPulseLayer(rightMapRef.current, "ndvi-source-right", "ndvi-layer-right", pulseData);
                    }
                }
            }["BloomingMap.useEffect.interval"], 1500);
            return ({
                "BloomingMap.useEffect": ()=>clearInterval(interval)
            })["BloomingMap.useEffect"];
        }
    }["BloomingMap.useEffect"], [
        ndviData,
        comparisonMode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full h-screen relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: leftMapContainer,
                className: "flex-1"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            comparisonMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: rightMapContainer,
                className: "flex-1 border-l border-gray-300"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                lineNumber: 251,
                columnNumber: 9
            }, this),
            ndviData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    lineNumber: 260,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                lineNumber: 259,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setComparisonMode(!comparisonMode),
                className: "absolute top-4 right-4 bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg",
                children: comparisonMode ? "Exit Comparison" : "Compare"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            selectedRegion && regionData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-20 left-1/2 -translate-x-1/2 w-[80%] max-w-2xl z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black/80 p-5 rounded-2xl shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-white text-lg mb-2",
                            children: [
                                "NDVI Timeline •",
                                " ",
                                selectedRegion.lat ? "".concat(selectedRegion.lat.toFixed(2), "°, ").concat(selectedRegion.lon.toFixed(2), "°") : "Region"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                            lineNumber: 278,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "range",
                            min: "0",
                            max: regionData.length - 1,
                            value: currentIndex,
                            onChange: (e)=>{
                                setCurrentIndex(parseInt(e.target.value));
                                setIsPlaying(false);
                            },
                            className: "w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                            lineNumber: 287,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 text-sm text-gray-400",
                            children: [
                                (_regionData_currentIndex = regionData[currentIndex]) === null || _regionData_currentIndex === void 0 ? void 0 : _regionData_currentIndex.date,
                                " → NDVI",
                                " ",
                                (_regionData_currentIndex1 = regionData[currentIndex]) === null || _regionData_currentIndex1 === void 0 ? void 0 : _regionData_currentIndex1.ndvi.toFixed(3)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                            lineNumber: 299,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                    lineNumber: 277,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
                lineNumber: 276,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js",
        lineNumber: 248,
        columnNumber: 5
    }, this);
}
_s(BloomingMap, "nlrzp2HmoCPL8rOVgiaOyO1Mzs8=");
_c = BloomingMap;
var _c;
__turbopack_context__.k.register(_c, "BloomingMap");
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
(()=>{
    const e = new Error("Cannot find module './species.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
function SideBar(param) {
    let { showSpecies } = param;
    if (showSpecies) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Species, {}, void 0, false, {
        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/sideBar.js",
        lineNumber: 5,
        columnNumber: 27
    }, this);
    else return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "side-bar",
        className: "justify-center w-10 bg-primary",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "./bloom.svg",
            className: "h-10"
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/sideBar.js",
            lineNumber: 9,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/sideBar.js",
        lineNumber: 8,
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
"[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$BloomingMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/BloomingMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$sideBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/sideBar.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Home() {
    _s();
    const [showSpecies, setShowSpecies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full h-screen flex flex-row justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$sideBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                showSpecies: showSpecies
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "navigator",
                className: "absolute flex my-[15px] z-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "./flower.svg",
                                className: "absolute my-[5px] mx-[25px] w-10 h-[20px]"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "species",
                                className: "h-[30px] mx-[20px] px-[40px] w-40 bg-primary font-bold text-white text-left rounded-3xl",
                                onClick: ()=>{
                                    setShowSpecies(!showSpecies), console.log(showSpecies);
                                },
                                children: "Species"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "./comparison.svg",
                                className: "absolute my-[5px] mx-[25px] w-10 h-[20px]"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "locations",
                                className: "h-[30px] mx-[20px] px-[40px] w-40 bg-primary font-bold text-white text-left rounded-3xl",
                                children: "Comparison"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$iwts$2d$bloom$2d$watch$2f$frontend$2f$src$2f$app$2f$BloomingMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/iwts-bloom-watch/frontend/src/app/page.js",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(Home, "d2fM+ZWPYFWGojwmp7/4dArkKR8=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_GitHub_iwts-bloom-watch_frontend_src_app_22f71906._.js.map