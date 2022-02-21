const route = [
    [23, 120.3508],
    [25.15, 121.523333],
];
const marker = L.Marker.movingMarker(route, [4000]).addTo(lMap);
L.polyline(route).addTo(lMap);

marker.once("click", () => {
    marker.start();
    marker.on("click", () => {
        if (marker.isRunning()) {
            marker.pause();
        } else {
            marker.start();
        }
    });
});
