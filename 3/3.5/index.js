const wmsLayer = L.tileLayer.wms("http://wms.nlsc.gov.tw/wms", {
    layers: "TOWN",
    styles: "default",
    bgcolor: "0xFFFFFF",
    transparent: true,
    format: "image/png",
    version: "1.1.1",
    uppercase: true, //  WMS request parameter keys will be uppercase.
    crs: L.CRS.EPSG3857,
    opacity: 1,
});

// Method 1 加入圖層
// wmsLayer.addTo(lMap);

// Method 2
const layers = L.layerGroup().addLayer(wmsLayer).addTo(lMap);

//清除圖層
//layers.removeLayer(wmsLayer);
