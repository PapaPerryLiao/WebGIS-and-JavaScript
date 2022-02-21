//  ArcGIS API
require(["esri/Map", "esri/views/MapView", "esri/layers/GeoJSONLayer"], (Map, MapView, GeoJSONLayer) => {
    const aMap = new Map({
        basemap: "streets-vector",
    });
    const view = new MapView({
        container: "amap",
        map: aMap,
        zoom: 6,
        center: [121, 23.5],
    });

    // 程式撰寫處

    const template = {
        title: "GeoJson 資訊視窗",
        content: "跟著本書範例學習，GeoJson好簡單！",
    };

    const geojsonLayer = new GeoJSONLayer({
        url: "Sample.json",
        popupTemplate: template,
    });

    aMap.layers.add(geojsonLayer);
});
