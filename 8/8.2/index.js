const markers = L.markerClusterGroup();

const addCluster = (arr) => {
    arr.map((item) =>
        L.marker(new L.LatLng(item.y, item.x)) // 新增Marker
            .bindPopup(`<p>經度: ${item.x}</p><p>緯度: ${item.y}</p>`)
    ) // 資訊視窗
        .forEach((item) => markers.addLayer(item)); // 把marker加入 L.markerClusterGroup中

    lMap.addLayer(markers);
};

addCluster(randomPoint);
