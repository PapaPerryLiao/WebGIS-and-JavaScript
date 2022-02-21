//單一樣式
const markers = L.markerClusterGroup({
    iconCreateFunction: (cluster) => {
        const number = cluster.getChildCount();
        return L.divIcon({ html: number, className: "cluster cluster-yellow", iconSize: L.point(25, 25) });
    },
});

//加入樣式邏輯
// const markers = L.markerClusterGroup({
//     iconCreateFunction: (cluster) => {
//         const number = cluster.getChildCount();
//         let icon = IconLogic(number);

//         return L.divIcon({ html: number, className: icon.className, iconSize: icon.point });
//     },
// });

// number為數量
const IconLogic = (number) => {
    let className = "cluster";
    let point;

    if (number < 100) {
        className += " cluster-green";
        point = L.point(25, 25);
    } else if (number < 200) {
        className += " cluster-yellow";
        point = L.point(30, 30);
    } else {
        className += " cluster-red";
        point = L.point(35, 35);
    }

    return {
        className,
        point,
    };
};

const addCluster = (arr) => {
    arr.map((item) =>
        L.marker(new L.LatLng(item.y, item.x)) // 新增Marker
            .bindPopup(`<p>經度: ${item.x}</p><p>緯度: ${item.y}</p>`)
    ) // 資訊視窗
        .forEach((item) => markers.addLayer(item)); // 把marker加入 L.markerClusterGroup中

    lMap.addLayer(markers);
};

addCluster(randomPoint);
