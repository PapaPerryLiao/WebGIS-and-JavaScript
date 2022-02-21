// 官方範例KML
// url: "https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml",
// url: "https://earthquake.usgs.gov/fdsnws/event/1/query?format=kml&minmagnitude=5.8",

//  ArcGIS API
require(["esri/Map", "esri/views/MapView", "esri/layers/KMLLayer"], function (Map, MapView, KMLLayer) {
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

    const layer = new KMLLayer({
        url: "https://earthquake.usgs.gov/fdsnws/event/1/query?format=kml&minmagnitude=5.8",
        // url: "Sample.kml",  // 不支援local kml
    });

    aMap.layers.add(layer);
});
