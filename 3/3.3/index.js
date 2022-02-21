require(["esri/Map", "esri/views/MapView", "esri/widgets/LayerList", "esri/layers/WMSLayer"], (Map, MapView, LayerList, WMSLayer) => {
    const aMap = new Map({
        basemap: "streets-vector",
    });
    const view = new MapView({
        container: "amap",
        map: aMap,
        zoom: 6,
        center: [121, 23.5],
    });

    // 程式撰寫處

    const wmsLayer = new WMSLayer({
        url: "https://ows.terrestris.de/osm/service",
        sublayers: [
            {
                title: "OpenStreetMap - Default",
                name: "OSM-WMS",
            },
            {
                title: "OpenStreetMap - Dark",
                name: "Dark",
            },
        ],
        opacity: 0.8,
    });

    aMap.layers.add(wmsLayer);

    view.when(() => {
        const layerList = new LayerList({
            view: view,
        });
        view.ui.add(layerList, "bottom-left");
    });

    view.layerViews.add(wmsLayer);
});
