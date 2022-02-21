const pointList = [
    { x: 121.5, y: 24 },
    { x: 121.2, y: 23.8 },
    { x: 121, y: 23.5 },
];

require(["esri/Map", "esri/views/MapView", "esri/Graphic"], (Map, MapView, Graphic) => {
    const myMap = new Map({
        basemap: "streets-vector",
    });
    const view = new MapView({
        container: "amap",
        map: myMap,
        zoom: 6,
        center: [121, 23.5],
    });

    const content = {
        title: "線資料圖徵",
    };

    const polyline = {
        type: "polyline",
        paths: pointList.map((item) => [item.x, item.y]),
        // paths格式: [[121.5, 24], [121.2, 23.8], [121, 23.5]]
    };

    const polylineGraphic = new Graphic({
        geometry: polyline,
        symbol: {
            type: "simple-line",
            color: [226, 119, 40],
            width: 4,
        },
        attributes: content,
        popupTemplate: {
            title: "{title}",
            content: [
                {
                    type: "fields",
                    fieldInfos: [
                        {
                            fieldName: "title",
                        },
                    ],
                },
            ],
        },
    });

    view.graphics.add(polylineGraphic);

    // 3秒後清除圖層
    setTimeout(() => view.graphics.remove(polylineGraphic), 3000);
});
