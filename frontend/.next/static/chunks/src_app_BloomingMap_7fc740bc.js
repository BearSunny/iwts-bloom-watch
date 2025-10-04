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
function BloomingMap() {
    var _regionData_beforeDateIndex, _regionData_beforeDateIndex_ndvi, _regionData_beforeDateIndex1, _regionData_afterDateIndex, _regionData_afterDateIndex_ndvi, _regionData_afterDateIndex1, _ndviData_frame, _ndviData_frame1, _ndviData_selectedLeftDate, _ndviData_selectedLeftDate1, _ndviData_selectedRightDate, _ndviData_selectedRightDate1;
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
    const [selectedLeftDate, setSelectedLeftDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedRightDate, setSelectedRightDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedRegion, setSelectedRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [regionData, setRegionData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sliderPosition, setSliderPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [regionalCompareMode, setRegionalCompareMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // For date picker in regional mode
    const [beforeDateIndex, setBeforeDateIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [afterDateIndex, setAfterDateIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showDatePicker, setShowDatePicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ✅ Fetch global NDVI
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BloomingMap.useEffect": ()=>{
            const fetchNDVI = {
                "BloomingMap.useEffect.fetchNDVI": async ()=>{
                    try {
                        const res = await api.get("/ndvi/global");
                        console.log("Global NDVI response:", res.data);
                        const data = res.data.data || res.data;
                        if (Array.isArray(data) && data.length > 0) {
                            setNdviData(data);
                        } else {
                            console.error("Invalid NDVI data format:", data);
                        }
                    } catch (err) {
                        var _err_response;
                        console.error("Error fetching NDVI:", err);
                        console.error("Error details:", (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data);
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
    const addRegionalNDVILayer = (map, data, sourceId, layerId)=>{
        var _geojson_features__geometry, _geojson_features_;
        if (!data) return;
        if (!map.isStyleLoaded()) {
            map.once('load', ()=>addRegionalNDVILayer(map, data, sourceId, layerId));
            return;
        }
        // Check if data has geojson or if it's raw data we need to visualize
        let geojson = data.geojson;
        // If no geojson, create a circle to represent the point
        if (!geojson && (selectedRegion === null || selectedRegion === void 0 ? void 0 : selectedRegion.lat) && (selectedRegion === null || selectedRegion === void 0 ? void 0 : selectedRegion.lon)) {
            geojson = {
                type: "FeatureCollection",
                features: [
                    {
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [
                                selectedRegion.lon,
                                selectedRegion.lat
                            ]
                        },
                        properties: {
                            ndvi: data.ndvi || 0,
                            date: data.date
                        }
                    }
                ]
            };
        }
        if (!geojson) return;
        if (!map.getSource(sourceId)) {
            map.addSource(sourceId, {
                type: "geojson",
                data: geojson
            });
        } else {
            map.getSource(sourceId).setData(geojson);
        }
        // Determine layer type based on geometry
        const geometryType = (_geojson_features_ = geojson.features[0]) === null || _geojson_features_ === void 0 ? void 0 : (_geojson_features__geometry = _geojson_features_.geometry) === null || _geojson_features__geometry === void 0 ? void 0 : _geojson_features__geometry.type;
        if (!map.getLayer(layerId)) {
            if (geometryType === "Point") {
                // For point data, use circles with size based on NDVI
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
                                "ndvi"
                            ],
                            0,
                            20,
                            0.5,
                            40,
                            1,
                            60
                        ],
                        "circle-color": [
                            "interpolate",
                            [
                                "linear"
                            ],
                            [
                                "get",
                                "ndvi"
                            ],
                            0,
                            "#ef4444",
                            0.2,
                            "#f97316",
                            0.4,
                            "#facc15",
                            0.6,
                            "#84cc16",
                            0.8,
                            "#22c55e",
                            1,
                            "#15803d"
                        ],
                        "circle-opacity": 0.6,
                        "circle-stroke-width": 2,
                        "circle-stroke-color": "#ffffff"
                    }
                });
            } else {
                // For polygon data, use fill
                map.addLayer({
                    id: layerId,
                    type: "fill",
                    source: sourceId,
                    paint: {
                        "fill-color": [
                            "interpolate",
                            [
                                "linear"
                            ],
                            [
                                "get",
                                "ndvi"
                            ],
                            0,
                            "#ef4444",
                            0.2,
                            "#f97316",
                            0.4,
                            "#facc15",
                            0.6,
                            "#84cc16",
                            0.8,
                            "#22c55e",
                            1,
                            "#15803d"
                        ],
                        "fill-opacity": 0.7
                    }
                });
                // Add outline
                if (!map.getLayer(layerId + "-outline")) {
                    map.addLayer({
                        id: layerId + "-outline",
                        type: "line",
                        source: sourceId,
                        paint: {
                            "line-color": "#ffffff",
                            "line-width": 2
                        }
                    });
                }
            }
        }
    };
    // ✅ Regional comparison map setup
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BloomingMap.useEffect": ()=>{
            if (regionalCompareMode && compareContainer.current && regionData.length > 0) {
                if (!compareMapRef.current) {
                    const compareMap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
                        container: compareContainer.current,
                        style: "mapbox://styles/mapbox/satellite-v9",
                        center: [
                            selectedRegion.lon || 0,
                            selectedRegion.lat || 0
                        ],
                        zoom: 12
                    });
                    compareMapRef.current = compareMap;
                    compareMap.on("load", {
                        "BloomingMap.useEffect": ()=>{
                            updateComparisonView();
                        }
                    }["BloomingMap.useEffect"]);
                }
                return ({
                    "BloomingMap.useEffect": ()=>{
                        if (compareMapRef.current) {
                            compareMapRef.current.remove();
                            compareMapRef.current = null;
                        }
                    }
                })["BloomingMap.useEffect"];
            }
        }
    }["BloomingMap.useEffect"], [
        regionalCompareMode,
        regionData
    ]);
    const updateComparisonView = ()=>{
        if (!compareMapRef.current || regionData.length === 0) return;
        if (!compareMapRef.current.isStyleLoaded()) {
            compareMapRef.current.once('load', updateComparisonView);
            return;
        }
        const beforeData = regionData[beforeDateIndex];
        const afterData = regionData[afterDateIndex];
        // Add both layers
        addRegionalNDVILayer(compareMapRef.current, beforeData, "before-source", "before-layer");
        addRegionalNDVILayer(compareMapRef.current, afterData, "after-source", "after-layer");
        // Create clip path effect using map bounds
        const canvas = compareMapRef.current.getCanvas();
        const width = canvas.width;
        const clipX = sliderPosition / 100 * width;
        // Use paint property to fade layers based on position
        if (compareMapRef.current.getLayer("after-layer")) {
            var _regionData__geojson_features__geometry, _regionData__geojson_features_, _regionData__geojson, _regionData_;
            // This is a simplified approach - we'll use opacity transition
            const afterOpacity = sliderPosition / 100;
            const beforeOpacity = 1 - sliderPosition / 100;
            compareMapRef.current.setPaintProperty("before-layer", "circle-opacity", beforeOpacity * 0.6);
            compareMapRef.current.setPaintProperty("after-layer", "circle-opacity", afterOpacity * 0.6);
            // For fill layers
            if (((_regionData_ = regionData[0]) === null || _regionData_ === void 0 ? void 0 : (_regionData__geojson = _regionData_.geojson) === null || _regionData__geojson === void 0 ? void 0 : (_regionData__geojson_features_ = _regionData__geojson.features[0]) === null || _regionData__geojson_features_ === void 0 ? void 0 : (_regionData__geojson_features__geometry = _regionData__geojson_features_.geometry) === null || _regionData__geojson_features__geometry === void 0 ? void 0 : _regionData__geojson_features__geometry.type) !== "Point") {
                compareMapRef.current.setPaintProperty("before-layer", "fill-opacity", beforeOpacity * 0.7);
                compareMapRef.current.setPaintProperty("after-layer", "fill-opacity", afterOpacity * 0.7);
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BloomingMap.useEffect": ()=>{
            if (regionalCompareMode && compareMapRef.current) {
                updateComparisonView();
            }
        }
    }["BloomingMap.useEffect"], [
        beforeDateIndex,
        afterDateIndex,
        sliderPosition,
        regionalCompareMode
    ]);
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
            const leftMap = createMap(leftMapContainer.current);
            leftMapRef.current = leftMap;
            if (globalCompareMode && rightMapContainer.current) {
                const rightMap = createMap(rightMapContainer.current);
                rightMapRef.current = rightMap;
            }
            const draw = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mapbox$2f$mapbox$2d$gl$2d$draw$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                displayControlsDefault: false,
                controls: {
                    polygon: true,
                    trash: true
                },
                styles: [
                    {
                        'id': 'gl-draw-polygon-fill',
                        'type': 'fill',
                        'paint': {
                            'fill-color': '#10b981',
                            'fill-opacity': 0.3
                        }
                    },
                    {
                        'id': 'gl-draw-polygon-stroke-active',
                        'type': 'line',
                        'paint': {
                            'line-color': '#10b981',
                            'line-width': 3
                        }
                    },
                    {
                        'id': 'gl-draw-line',
                        'type': 'line',
                        'paint': {
                            'line-color': '#10b981',
                            'line-width': 3
                        }
                    },
                    {
                        'id': 'gl-draw-polygon-and-line-vertex-active',
                        'type': 'circle',
                        'paint': {
                            'circle-radius': 6,
                            'circle-color': '#ffffff',
                            'circle-stroke-color': '#10b981',
                            'circle-stroke-width': 2
                        }
                    }
                ]
            });
            leftMap.addControl(draw, 'top-left');
            leftMap.on("click", {
                "BloomingMap.useEffect": async (e)=>{
                    const { lng, lat } = e.lngLat;
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker({
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
                        setBeforeDateIndex(0);
                        setAfterDateIndex(res.data.data.length - 1);
                        setShowDatePicker(true);
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
                            bbox,
                            lon: (bbox[0] + bbox[2]) / 2,
                            lat: (bbox[1] + bbox[3]) / 2
                        });
                        setRegionData(res.data.data);
                        setBeforeDateIndex(0);
                        setAfterDateIndex(res.data.data.length - 1);
                        setShowDatePicker(true);
                    } catch (err) {
                        console.error("Error fetching regional NDVI:", err);
                    }
                }
            }["BloomingMap.useEffect"]);
            return ({
                "BloomingMap.useEffect": ()=>{
                    if (leftMapRef.current) {
                        leftMapRef.current.remove();
                        leftMapRef.current = null;
                    }
                    if (rightMapRef.current) {
                        rightMapRef.current.remove();
                        rightMapRef.current = null;
                    }
                }
            })["BloomingMap.useEffect"];
        }
    }["BloomingMap.useEffect"], [
        globalCompareMode
    ]);
    // ✅ Animate pulses (stop when in regional compare mode)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BloomingMap.useEffect": ()=>{
            if (!leftMapRef.current || ndviData.length === 0 || regionalCompareMode || showDatePicker) return;
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
        regionalCompareMode,
        showDatePicker
    ]);
    const handleSliderDrag = (e)=>{
        if (!compareContainer.current) return;
        const rect = compareContainer.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percentage = x / rect.width * 100;
        setSliderPosition(percentage);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full h-screen relative",
        children: [
            !regionalCompareMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: leftMapContainer,
                        className: "flex-1"
                    }, void 0, false, {
                        fileName: "[project]/src/app/BloomingMap.js",
                        lineNumber: 480,
                        columnNumber: 11
                    }, this),
                    globalCompareMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: rightMapContainer,
                        className: "flex-1 border-l-2 border-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/src/app/BloomingMap.js",
                        lineNumber: 482,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: compareContainer,
                        className: "w-full h-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/BloomingMap.js",
                        lineNumber: 487,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: sliderRef,
                        className: "absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize z-20",
                        style: {
                            left: "".concat(sliderPosition, "%"),
                            transform: 'translateX(-50%)'
                        },
                        onMouseDown: (e)=>{
                            e.preventDefault();
                            const handleMouseMove = (moveEvent)=>{
                                handleSliderDrag(moveEvent);
                            };
                            const handleMouseUp = ()=>{
                                document.removeEventListener("mousemove", handleMouseMove);
                                document.removeEventListener("mouseup", handleMouseUp);
                            };
                            document.addEventListener("mousemove", handleMouseMove);
                            document.addEventListener("mouseup", handleMouseUp);
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-2xl border-2 border-gray-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M18 8L22 12L18 16M6 8L2 12L6 16"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 508,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/BloomingMap.js",
                                lineNumber: 507,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/BloomingMap.js",
                            lineNumber: 506,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/BloomingMap.js",
                        lineNumber: 489,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-lg shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold",
                                children: [
                                    "📅 ",
                                    (_regionData_beforeDateIndex = regionData[beforeDateIndex]) === null || _regionData_beforeDateIndex === void 0 ? void 0 : _regionData_beforeDateIndex.date
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/BloomingMap.js",
                                lineNumber: 514,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs opacity-90",
                                children: [
                                    "NDVI: ",
                                    ((_regionData_beforeDateIndex1 = regionData[beforeDateIndex]) === null || _regionData_beforeDateIndex1 === void 0 ? void 0 : (_regionData_beforeDateIndex_ndvi = _regionData_beforeDateIndex1.ndvi) === null || _regionData_beforeDateIndex_ndvi === void 0 ? void 0 : _regionData_beforeDateIndex_ndvi.toFixed(3)) || 'N/A'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/BloomingMap.js",
                                lineNumber: 515,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/BloomingMap.js",
                        lineNumber: 513,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 right-4 bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-lg shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold",
                                children: [
                                    "📅 ",
                                    (_regionData_afterDateIndex = regionData[afterDateIndex]) === null || _regionData_afterDateIndex === void 0 ? void 0 : _regionData_afterDateIndex.date
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/BloomingMap.js",
                                lineNumber: 518,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs opacity-90",
                                children: [
                                    "NDVI: ",
                                    ((_regionData_afterDateIndex1 = regionData[afterDateIndex]) === null || _regionData_afterDateIndex1 === void 0 ? void 0 : (_regionData_afterDateIndex_ndvi = _regionData_afterDateIndex1.ndvi) === null || _regionData_afterDateIndex_ndvi === void 0 ? void 0 : _regionData_afterDateIndex_ndvi.toFixed(3)) || 'N/A'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/BloomingMap.js",
                                lineNumber: 519,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/BloomingMap.js",
                        lineNumber: 517,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-lg text-xs",
                        children: [
                            "← Slide to compare | ",
                            Math.round(100 - sliderPosition),
                            "% Before | ",
                            Math.round(sliderPosition),
                            "% After →"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/BloomingMap.js",
                        lineNumber: 522,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 486,
                columnNumber: 9
            }, this),
            !regionalCompareMode && !showDatePicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 bg-white/95 backdrop-blur rounded-xl shadow-xl p-4 max-w-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-gray-800 mb-2 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg",
                                children: "🗺️"
                            }, void 0, false, {
                                fileName: "[project]/src/app/BloomingMap.js",
                                lineNumber: 532,
                                columnNumber: 13
                            }, this),
                            "How to Use"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/BloomingMap.js",
                        lineNumber: 531,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 text-sm text-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-500 font-bold",
                                        children: "1."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/BloomingMap.js",
                                        lineNumber: 537,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Click anywhere"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/BloomingMap.js",
                                                lineNumber: 538,
                                                columnNumber: 18
                                            }, this),
                                            " on the map to analyze a specific point"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/BloomingMap.js",
                                        lineNumber: 538,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/BloomingMap.js",
                                lineNumber: 536,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-500 font-bold",
                                        children: "2."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/BloomingMap.js",
                                        lineNumber: 541,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Draw a region:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/BloomingMap.js",
                                                lineNumber: 542,
                                                columnNumber: 18
                                            }, this),
                                            " Click the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block w-5 h-5 border-2 border-green-500 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/BloomingMap.js",
                                                lineNumber: 542,
                                                columnNumber: 60
                                            }, this),
                                            " polygon tool (top-left), then click multiple points to draw. Double-click to finish."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/BloomingMap.js",
                                        lineNumber: 542,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/BloomingMap.js",
                                lineNumber: 540,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-purple-500 font-bold",
                                        children: "3."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/BloomingMap.js",
                                        lineNumber: 545,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Select dates to compare vegetation changes over time"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/BloomingMap.js",
                                        lineNumber: 546,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/BloomingMap.js",
                                lineNumber: 544,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/BloomingMap.js",
                        lineNumber: 535,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 530,
                columnNumber: 9
            }, this),
            !regionalCompareMode && !showDatePicker && ndviData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    lineNumber: 555,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 554,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 flex flex-col gap-2",
                children: [
                    !regionalCompareMode && !showDatePicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setGlobalCompareMode(!globalCompareMode);
                            if (!globalCompareMode) {
                                setSelectedLeftDate(0);
                                setSelectedRightDate(ndviData.length - 1);
                            }
                        },
                        className: "bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-emerald-600",
                        children: globalCompareMode ? "Exit Global Compare" : "Global Compare"
                    }, void 0, false, {
                        fileName: "[project]/src/app/BloomingMap.js",
                        lineNumber: 563,
                        columnNumber: 11
                    }, this),
                    regionalCompareMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setRegionalCompareMode(false);
                            setShowDatePicker(false);
                        },
                        className: "bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600",
                        children: "Exit Regional Compare"
                    }, void 0, false, {
                        fileName: "[project]/src/app/BloomingMap.js",
                        lineNumber: 578,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 561,
                columnNumber: 7
            }, this),
            showDatePicker && regionData.length > 0 && !regionalCompareMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold mb-6 text-gray-800",
                            children: "Select Dates to Compare"
                        }, void 0, false, {
                            fileName: "[project]/src/app/BloomingMap.js",
                            lineNumber: 594,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                            children: "Before Date (Older Period)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/BloomingMap.js",
                                            lineNumber: 598,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: beforeDateIndex,
                                            onChange: (e)=>setBeforeDateIndex(parseInt(e.target.value)),
                                            className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none",
                                            children: regionData.map((item, idx)=>{
                                                var _item_ndvi;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: idx,
                                                    children: [
                                                        item.date,
                                                        " - NDVI: ",
                                                        ((_item_ndvi = item.ndvi) === null || _item_ndvi === void 0 ? void 0 : _item_ndvi.toFixed(3)) || 'N/A'
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/app/BloomingMap.js",
                                                    lineNumber: 607,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/BloomingMap.js",
                                            lineNumber: 601,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 597,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                            children: "After Date (Recent Period)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/BloomingMap.js",
                                            lineNumber: 615,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: afterDateIndex,
                                            onChange: (e)=>setAfterDateIndex(parseInt(e.target.value)),
                                            className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none",
                                            children: regionData.map((item, idx)=>{
                                                var _item_ndvi;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: idx,
                                                    children: [
                                                        item.date,
                                                        " - NDVI: ",
                                                        ((_item_ndvi = item.ndvi) === null || _item_ndvi === void 0 ? void 0 : _item_ndvi.toFixed(3)) || 'N/A'
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/app/BloomingMap.js",
                                                    lineNumber: 624,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/BloomingMap.js",
                                            lineNumber: 618,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 614,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/BloomingMap.js",
                            lineNumber: 596,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 mt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowDatePicker(false),
                                    className: "flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 633,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowDatePicker(false);
                                        setRegionalCompareMode(true);
                                    },
                                    className: "flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-green-600",
                                    children: "Compare →"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 639,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/BloomingMap.js",
                            lineNumber: 632,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/BloomingMap.js",
                    lineNumber: 593,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 592,
                columnNumber: 9
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
                                    lineNumber: 658,
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
                                    lineNumber: 659,
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
                                    lineNumber: 667,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/BloomingMap.js",
                            lineNumber: 657,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-lg mb-3",
                                    children: "Right Map Period"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/BloomingMap.js",
                                    lineNumber: 673,
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
                                    lineNumber: 674,
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
                                    lineNumber: 682,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/BloomingMap.js",
                            lineNumber: 672,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/BloomingMap.js",
                    lineNumber: 656,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/BloomingMap.js",
                lineNumber: 655,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/BloomingMap.js",
        lineNumber: 477,
        columnNumber: 5
    }, this);
}
_s(BloomingMap, "Eu/9pjdJVRhMhoiyWwODaNjkbjs=");
_c = BloomingMap;
var _c;
__turbopack_context__.k.register(_c, "BloomingMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_BloomingMap_7fc740bc.js.map