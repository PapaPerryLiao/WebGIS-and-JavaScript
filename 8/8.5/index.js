const markers = L.markerClusterGroup({
    iconCreateFunction: function (cluster) {
        const number = cluster.getChildCount();
        let icon = IconLogic(number);

        return L.divIcon({ html: number, className: icon.className, iconSize: icon.point });
    },
});

var polySelected;
markers.on("clusterclick", function (e) {
    const number = e.layer.getAllChildMarkers().length;

    if (number < 100) {
        // 群聚數量小於100才繪製蜘蛛網
        e.layer.spiderfy();
    }

    if (polySelected) {
        LMap.removeLayer(polySelected);
    }

    polySelected = L.polygon(e.layer.getConvexHull());
    LMap.addLayer(polySelected);

    console.log(e.layer.getConvexHull());
    console.log("群聚數量: " + number);
});

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
