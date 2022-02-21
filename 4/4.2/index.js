// 官方範例KML
// "https://heremaps.github.io/maps-api-for-javascript-examples/display-kml-on-map/data/us-states.kml"

const reader = new H.data.kml.Reader("Sample.kml");
reader.parse();

const kmlLayer = reader.getLayer();
hMap.addLayer(kmlLayer);

// 清除圖層
// HMap.removeLayer(layer)

// 點擊事件
kmlLayer.getProvider().addEventListener("tap", (e) => {
    console.log("點擊事件", e.target.getData());
});

// 偵測kml載入狀態
reader.addEventListener("statechange", (e) => {
    if (e.state === H.data.AbstractReader.State.READY) {
        console.log("kml ready");
    } else if (e.state === H.data.AbstractReader.State.ERROR) {
        console.log("load kml error");
    }
});
