const url = "https://api.tgos.tw/TGOS_API/wrarb.kml";

const kmlLayer = new TGOS.TGKmlLayer(url, {
    map: tMap,
    suppressInfoWindows: false,
    preserveViewport: true,
    zIndex: 1,
});
