// Leaflet API

// 舊版寫法 L.KML.js 要用DOMParser
// var kmlLayer;
// axios.get("/Sample.kml").then(function (response) {
//     let bounds;
//     let data = response.data;
//     const parser = new DOMParser();
//     const kmlData = parser.parseFromString(data, "text/xml"); // 解析KML
//     console.log(data);

//     kmlLayer = new L.KML(kmlData); // KML套疊
//     lMap.addLayer(kmlLayer);
//     bounds = kmlLayer.getBounds(); // zoom至KML範圍
//     lMap.fitBounds(bounds);
// });

// 新版寫法
const kmlLayer = new L.KML("Sample.kml", { async: true }).on("loaded", (e) => {
    lMap.fitBounds(e.target.getBounds());
});

// Method 1 加入圖層
//kmlLayer.addTo(lMap);

// Method 2
const layers = L.layerGroup().addLayer(kmlLayer).addTo(lMap);

//清除圖層
//layers.removeLayer(kmlLayer)
