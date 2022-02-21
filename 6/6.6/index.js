const drawItem = new L.FeatureGroup();
lMap.addLayer(drawItem);

const option = {
    position: "topleft",
    edit: {
        featureGroup: drawItem,
    },
};

const drawControl = new L.Control.Draw(option);
lMap.addControl(drawControl);

//// Method 1
// lMap.on("draw:created", function (e) {
//     const layer = e.layer;
//     console.log(arguments);
//     drawItem.addLayer(layer);
// });

//// Method 2
// lMap.on(L.Draw.Event.CREATED, (e) => {
//     const layer = e.layer;
//     const type = e.layerType;
//     drawItem.addLayer(layer);
//     console.log("type", type);
//     if (type === "circle") {
//         const center = layer.getLatLng();
//         const radius = layer.getRadius();
//         console.log(`經度: ${center.lng}, 緯度: ${center.lat}`);
//         console.log(`半徑: ${radius} (m)`);
//     }
// });

lMap.on(L.Draw.Event.CREATED, (e) => {
    const layer = e.layer;
    const type = e.layerType;
    drawItem.addLayer(layer);
    console.log("type", type);

    if (type === "circle") {
        const center = layer.getLatLng();
        const radius = layer.getRadius();
        console.log(`經度: ${center.lng}, 緯度: ${center.lat}`);
        console.log(`半徑: ${radius} (m)`);
    } else if (type === "marker") {
        const point = layer.getLatLng();
        console.log(`經度: ${point.lng}, 緯度: ${point.lat}`);
    } else if (type === "rectangle") {
        let arr = layer.getLatLngs();
        arr = arr[0].map((item) => {
            return {
                x: item.lng,
                y: item.lat,
            };
        });
        console.log(arr);
    } else if (type === "polygon") {
        let arr = layer.getLatLngs();
        arr = [...new Set(arr[0].map((item) => `${item.lng},${item.lat}`))].map((item) => {
            const coordinate = item.split(",");
            return {
                x: coordinate[0],
                y: coordinate[1],
            };
        });
        console.log(arr);
    }
});
