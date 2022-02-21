require(["esri/Map", "esri/views/MapView", "esri/widgets/LayerList", "esri/layers/WMTSLayer"], (Map, MapView, LayerList, WMTSLayer) => {
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

    const wmtsLayer = new WMTSLayer({
        url: `https://wmts.nlsc.gov.tw/wmts`,
        activeLayer: {
            id: "ROAD",
            title: "道路路網",
        },
    });

    aMap.layers.add(wmtsLayer);

    view.when(() => {
        const layerList = new LayerList({
            view: view,
        });
        view.ui.add(layerList, "bottom-left");
    });

    view.layerViews.add(wmtsLayer);
});
