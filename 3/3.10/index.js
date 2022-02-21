const layer = L.tileLayer("https://wmts.nlsc.gov.tw/wmts/fireplug/default/GoogleMapsCompatible/{z}/{y}/{x}", {
    maxZoom: 18,
    id: "fireplug",
});

// Method 1 加入圖層
// layer.addTo(lMap);

// Method 2
const layers = L.layerGroup().addLayer(layer).addTo(lMap);

//清除圖層
//layers.removeLayer(layer);
