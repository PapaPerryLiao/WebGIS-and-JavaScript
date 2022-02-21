const pointList = [
    { x: 121.5, y: 24 },
    { x: 121.2, y: 23.8 },
    { x: 121, y: 23.5 },
];

const tgosPointList = pointList.map((item) => new TGOS.TGPoint(item.x, item.y));

const lineString = new TGOS.TGLineString(tgosPointList);

const line = new TGOS.TGLine(tMap, lineString, {
    strokeColor: "#00AA88",
    strokeWeight: 5,
});

// 清除圖層
// line.setMap(null);
