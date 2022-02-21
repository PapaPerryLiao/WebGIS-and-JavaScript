const url = "https://wmts.nlsc.gov.tw/wmts/";

const wmtsLayer = new TGOS.TGWmtsLayer(
    url,
    tMap,
    {
        matrixSet: "GoogleMapsCompatible",
        layer: "GeoSensitive",
        format: "image/png",
        style: "default",
    },
    {
        wmtsVisible: true,
        zIndex: 0,
        opacity: 0.6,
    }
);
