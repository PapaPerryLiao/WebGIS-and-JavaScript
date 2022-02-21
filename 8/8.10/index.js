// 移動路徑的格式
const arr = [
    [25.15482253021388, 121.55273437500001],
    [23.673466557663005, 120.25634765625001],
    [21.94080665316361, 120.79467773437501],
    [24.985555713597012, 121.80541992187501],
];

const Move = (arr) => {
    const marker = L.Marker.movingMarker(arr, [1000, 3000, 500, 100], { autostart: true }).addTo(lMap);
    L.polyline(arr, { color: "red" }).addTo(lMap);
    lMap.fitBounds(arr);

    // 移動結束時觸發事件
    marker.on("end", function () {
        marker.bindPopup("<p>環島結束囉！</p>", { closeOnClick: false }).openPopup();
    });
};

const button = document.getElementById("btnMove");
button.addEventListener("click", () => {
    Move(arr);
});
