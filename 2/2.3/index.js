//  ArcGIS API
require(["esri/Map", "esri/views/MapView", "esri/Graphic"], (Map, MapView, Graphic) => {
    const aMap = new Map({
        basemap: "streets-vector",
    });
    const view = new MapView({
        container: "amap",
        map: aMap,
        zoom: 6,
        center: [121, 23.5],
    });

    const point = {
        type: "point",
        longitude: 121,
        latitude: 23.5,
    };

    const markerSymbol = {
        type: "simple-marker",
        color: "red",
        outline: {
            color: [255, 255, 255],
            width: 2,
        },
    };

    const content = {
        title: "點資料圖徵",
        lng: "121",
        lat: "23.5",
    };

    const pointGraphic = new Graphic({
        geometry: point,
        symbol: markerSymbol,
        attributes: content,
        popupTemplate: {
            title: "{title}",
            content: [
                {
                    type: "fields",
                    fieldInfos: [
                        {
                            fieldName: "lng",
                        },
                        {
                            fieldName: "lat",
                        },
                    ],
                },
            ],
        },
    });

    view.graphics.add(pointGraphic);
});
