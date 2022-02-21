const pointList = [
    { x: 121.5, y: 24 },
    { x: 121.2, y: 23.8 },
    { x: 121, y: 23.5 },
];

const googlePolygonData = pointList.map((item) => {
    return {
        lat: item.y,
        lng: item.x,
    };
});

const polygon = new google.maps.Polygon({
    path: googlePolygonData,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
});

console.log(polygon);

polygon.setMap(gMap);

// 清除圖層
// polygon.setMap(null);
