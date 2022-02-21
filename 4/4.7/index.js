const reader = new H.data.geojson.Reader("Sample.json", {
    style: (mapObject) => {
        if (mapObject instanceof H.map.Polygon) {
            mapObject.setStyle({
                fillColor: "rgba(255, 0, 0, 0.5)",
                strokeColor: "rgba(0, 0, 255, 0.2)",
                lineWidth: 3,
            });
        }
    },
});

reader.parse();

const geojsonLayer = reader.getLayer();
hMap.addLayer(geojsonLayer);

// 清除圖層
// hMap.removeLayer(geojsonLayer);

// 點擊事件
geojsonLayer.getProvider().addEventListener("tap", (e) => {
    console.log(e.target.getData());
});

// 偵測geojson載入狀態
reader.addEventListener("statechange", (e) => {
    if (e.state === H.data.AbstractReader.State.READY) {
        console.log("geojson ready");
    } else if (e.state === H.data.AbstractReader.State.ERROR) {
        console.log("load geojson error");
    }
});
