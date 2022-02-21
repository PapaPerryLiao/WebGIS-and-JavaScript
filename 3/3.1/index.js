const EXTENT = [-Math.PI * 6378137, Math.PI * 6378137];

const xyzToBounds = (x, y, z) => {
    var tileSize = (EXTENT[1] * 2) / Math.pow(2, z);
    var minx = EXTENT[0] + x * tileSize;
    var maxx = EXTENT[0] + (x + 1) * tileSize;
    var miny = EXTENT[1] - (y + 1) * tileSize;
    var maxy = EXTENT[1] - y * tileSize;
    return [minx, miny, maxx, maxy];
};

const getTileUrl = (coordinates, zoom) => {
    return `http://wms.nlsc.gov.tw/wms?SRS=EPSG:3857&HEIGHT=400&WIDTH=600&REQUEST=GetMap&TRANSPARENT=TRUE&VERSION=1.1.1&LAYERS=LANDSECT&STYLES=default&BBOX=${xyzToBounds(
        coordinates.x,
        coordinates.y,
        zoom
    ).join(",")}&FORMAT=image%2Fpng`;
};

const imageLayer = new google.maps.ImageMapType({
    getTileUrl: getTileUrl,
    name: "LANDSECT",
    alt: "LANDSECT",
    minZoom: 0,
    maxZoom: 19,
    opacity: 0.8,
});

gMap.overlayMapTypes.push(imageLayer);
