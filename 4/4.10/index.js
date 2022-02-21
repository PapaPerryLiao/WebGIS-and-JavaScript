// Leaflet API

const geoJSONLayer = L.geoJSON();
const layers = L.layerGroup();

axios.get("/Sample.json").then((response) => {
    const data = response.data;
    geoJSONLayer.addData(data);

    // Method 1 加入圖層
    // geoJSONLayer.addTo(lMap);

    // Method 2
    layers.addLayer(geoJSONLayer).addTo(lMap);

    const bounds = geoJSONLayer.getBounds();
    lMap.fitBounds(bounds);
});

//清除圖層
//layers.removeLayer(geoJSONLayer)
