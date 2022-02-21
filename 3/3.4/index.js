const wmsLayer = new TGOS.TGWmsLayer(
    "http://wms.nlsc.gov.tw/wms?SRS=EPSG:4326&HEIGHT=400&WIDTH=600&REQUEST=GetMap&TRANSPARENT=TRUE&VERSION=1.1.1&LAYERS=B5000&STYLES=default&BBOX=120.190057,25.302059,122.200555,23.843379&FORMAT=image%2Fpng",
    {
        map: tMap,
        preserveViewport: true,
        wmsVisible: true,
        zIndex: 1,
        opacity: 1,
    }
);

// 移除圖層
//wmsLayer.removeWmsLayer();
