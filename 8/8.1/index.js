const random = (min, max) => {
    return Math.random() * (max - min) + min;
};

// count為產生的點數量
const CreatePoint = (count) => {
    const arr = [];
    for (let i = 0; i < count; i++) {
        const longitude = random(120.5, 121.4); // 經度介於120.5~121.4
        const latitude = random(23, 24.6); // 緯度介於23~24.6

        arr.push({ x: longitude, y: latitude });
    }

    return arr;
};

var randomPoint = CreatePoint(300);
console.log(randomPoint);

randomPoint.map((item) => L.marker(new L.LatLng(item.y, item.x))).forEach((item) => lMap.addLayer(item));
