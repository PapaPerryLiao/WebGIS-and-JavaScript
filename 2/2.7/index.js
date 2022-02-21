const pointList = [
    { lat: 23, lng: 120 },
    { lat: 23.2, lng: 120.5 },
    { lat: 23.4, lng: 120.7 },
    { lat: 24, lng: 121 },
    { lat: 24.5, lng: 121.8 },
];

const lineString = new H.geo.LineString();

pointList.forEach((item) => {
    lineString.pushPoint(item);
});

const polyline = new H.map.Polyline(lineString, {
    style: {
        lineWidth: 4,
    },
});

hMap.addObject(polyline);

// 清除圖層
// hMap.removeObject(polyline)
