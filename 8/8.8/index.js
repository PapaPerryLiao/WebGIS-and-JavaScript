const option = {
    scaleRadius: false,
    radius: 50,
    useLocalExtrema: true,
    latField: "y",
    lngField: "x",
    valueField: "value",
    maxOpacity: 0.5,
};

const heatmapLayer = new HeatmapOverlay(option);

const data = {
    max: 100,
    data: randomPoint,
};

heatmapLayer.setData(data);

heatmapLayer.addTo(lMap);
