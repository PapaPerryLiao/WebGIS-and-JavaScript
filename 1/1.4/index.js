// Method 1
// const tMap = new TGOS.TGOnlineMap(document.getElementById("tmap"), "EPSG3857");

// Method 2
const tMap = new TGOS.TGOnlineMap(document.getElementById("tmap"), TGOS.TGCoordSys.EPSG3857, {
    center: new TGOS.TGPoint(121, 23.5),
});
