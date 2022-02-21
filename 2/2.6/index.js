const pointList = [
    { x: 121.5, y: 24 },
    { x: 121.2, y: 23.8 },
    { x: 121, y: 23.5 },
];

const line = new google.maps.Polyline({
    path: pointList.map((item) => {
        return { lat: item.y, lng: item.x };
    }),
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
});

line.setMap(gMap);

// 清除圖層
// line.setMap(null);
