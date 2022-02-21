//  ArcGIS API
require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {
    const myMap = new Map({
        basemap: "streets-vector",
    });
    const view = new MapView({
        container: "amap",
        map: myMap,
        zoom: 6,
        center: [121, 23.5],
    });
});
