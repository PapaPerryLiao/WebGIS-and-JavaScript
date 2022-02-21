const pointList = [
    { x: 121.5, y: 24 },
    { x: 121.2, y: 23.8 },
    { x: 121, y: 23.5 },
];

const tgosPointList = pointList.map((item) => new TGOS.TGPoint(item.x, item.y));

const lineString = new TGOS.TGLineString(tgosPointList);

const linearRing = [];
linearRing.push(new TGOS.TGLinearRing(lineString));

const polygon = new TGOS.TGPolygon(linearRing);

const fill = new TGOS.TGFill(tMap, polygon, {
    fillColor: "#00FFFF",
    fillOpacity: 0.5,
    strokeColor: "#00FF00",
    strokeWeight: 3,
    strokeOpacity: 0.5,
});

// 清除圖層
// fill.setMap(null)
