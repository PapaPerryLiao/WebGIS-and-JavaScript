const heatmapInstance = h337.create({
    container: document.querySelector("#heatmap"),
    backgroundColor: "rgba(0,0,0,.75)",
    gradient: {
        ".5": "blue",
        ".8": "red",
        ".95": "yellow",
    },
    maxOpacity: 0.9,
    minOpacity: 0.3,
});

document.querySelector("#heatmap").onmousemove = (e) => {
    heatmapInstance.addData({
        x: e.layerX,
        y: e.layerY,
        value: 1,
    });
};
