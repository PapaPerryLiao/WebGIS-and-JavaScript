const getTileUrl = (coordinates, zoom) => {
    return `https://wmts.nlsc.gov.tw/wmts/ConvenienceStore/default/GoogleMapsCompatible/${zoom}/${coordinates.y}/${coordinates.x}`;
};

const imageLayer = new google.maps.ImageMapType({
    getTileUrl: getTileUrl,
    name: "ConvenienceStore",
    alt: "ConvenienceStore",
    minZoom: 0,
    maxZoom: 19,
});

gMap.overlayMapTypes.push(imageLayer);
