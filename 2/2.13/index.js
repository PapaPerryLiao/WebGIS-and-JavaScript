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

    // 程式碼撰寫處

    const polygon = {
        type: "polygon",
        rings: pointList.map((item) => [item.x, item.y]),
        // rings格式: [[ 121.5, 24], [121.2, 23.8], [ 121,23.5]]
    };

    const content = {
        title: "面資料圖徵",
        note: "跟著本書範例學習，ArcGIS好簡單",
    };

    const fillSymbol = {
        type: "simple-fill",
        color: [227, 139, 79, 0.8],
        outline: {
            color: [255, 255, 255],
            width: 1,
        },
    };

    const polygonGraphic = new Graphic({
        geometry: polygon,
        symbol: fillSymbol,
        attributes: content,
        popupTemplate: {
            title: "{title}",
            content: [
                {
                    type: "fields",
                    fieldInfos: [
                        {
                            fieldName: "note",
                        },
                    ],
                },
            ],
        },
    });

    view.graphics.add(polygonGraphic);

    // 3秒後清除圖層
    setTimeout(() => view.graphics.remove(polygonGraphic), 3000);
});
