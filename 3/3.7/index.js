const tileProvider = new H.map.provider.ImageTileProvider({
    min: 0,
    max: 19,
    opacity: 0.9,
    getURL: (x, y, z) => `https://wmts.nlsc.gov.tw/wmts/GeoSensitive2/default/GoogleMapsCompatible/${z}/${y}/${x}`,
});

const wmtsLayer = new H.map.layer.ObjectLayer(tileProvider, {
    projection: "EPSG:3857",
    opacity: 0.9,
});

hMap.addLayer(wmtsLayer);
