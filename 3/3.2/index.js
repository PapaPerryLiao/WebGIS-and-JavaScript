const EXTENT = [-Math.PI * 6378137, Math.PI * 6378137];

const xyzToBounds = (x, y, z) => {
    const tileSize = (EXTENT[1] * 2) / Math.pow(2, z);
    const minx = EXTENT[0] + x * tileSize;
    const maxx = EXTENT[0] + (x + 1) * tileSize;
    const miny = EXTENT[1] - (y + 1) * tileSize;
    const maxy = EXTENT[1] - y * tileSize;
    return [minx, miny, maxx, maxy];
};

const getTileUrl = (x, y, zoom) => {
    console.log("xyz", `x: ${x}, y: ${y}, z: ${zoom}`);
    return `http://wms.nlsc.gov.tw/wms?SRS=EPSG:3857&HEIGHT=400&WIDTH=600&REQUEST=GetMap&TRANSPARENT=TRUE&VERSION=1.1.1&LAYERS=LUIMAP109&STYLES=default&BBOX=${xyzToBounds(
        x,
        y,
        zoom
    ).join(",")}&FORMAT=image%2Fpng`;
};

const tileProvider = new H.map.provider.ImageTileProvider({
    min: 0,
    max: 19,
    opacity: 0.5,
    getURL: getTileUrl,
});

const wmsLayer = new H.map.layer.ObjectLayer(tileProvider, {
    projection: "EPSG:3857",
    opacity: 0.5,
});

hMap.addLayer(wmsLayer);
