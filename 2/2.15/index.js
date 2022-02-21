const pointList = [
    { x: 121.5, y: 24 },
    { x: 121.2, y: 23.8 },
    { x: 121, y: 23.5 },
];

const leafletPointList = pointList.map((item) => [item.y, item.x]);

const polygon = L.polygon(leafletPointList, { color: "red" });

// Method 1 加入圖層
//polygon.addTo(lMap);

// Method 2
const layers = L.layerGroup().addLayer(polygon).addTo(lMap);

lMap.fitBounds(polygon.getBounds());

//清除圖層
// layers.removeLayer(polygon);
