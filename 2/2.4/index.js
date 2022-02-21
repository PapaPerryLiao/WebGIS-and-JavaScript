const point = new TGOS.TGPoint(121, 23.5);
const marker = new TGOS.TGMarker(tMap, point, "點資料圖徵");

const infoWindow = new TGOS.TGInfoWindow(`lat: 23.5, lng: 121`, point, {
    maxWidth: 1000,
    pixelOffset: new TGOS.TGSize(5, -30), // InfoWindow起始位置的偏移量, 向右X為正, 向上Y為負
    zIndex: 0,
});

TGOS.TGEvent.addListener(marker, "click", () => {
    infoWindow.open(tMap);
});
