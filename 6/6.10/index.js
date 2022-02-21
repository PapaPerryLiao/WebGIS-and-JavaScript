// TDX ​/v2​/Tourism​/ScenicSpot 取得所有觀光景點資料
// https://tdx.transportdata.tw/api-service/swagger

const layers = L.layerGroup();
const drawItem = new L.FeatureGroup();
lMap.addLayer(drawItem);

const option = {
    position: "topleft",
    edit: {
        featureGroup: drawItem,
    },
    draw: {
        polyline: false,
        polygon: false,
        circle: false,
        marker: false,
    },
};

const drawControl = new L.Control.Draw(option);
lMap.addControl(drawControl);

const ShowMultiPoint = (dataList = [], layers) => {
    if (dataList.length > 0) {
        dataList.forEach((item) => {
            const marker = L.marker([item.y, item.x]).bindPopup(item.content);
            layers.addLayer(marker);
        });
    }
};

const SearchData = ({ minX, minY, maxX, maxY }) => {
    axios({
        method: "get",
        url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?%24top=1000&%24format=JSON`,
    }).then((response) => {
        console.log(response);
        let data = response.data;
        data = data
            .filter(
                (item) =>
                    item.Position.PositionLon < maxX &&
                    item.Position.PositionLon > minX &&
                    item.Position.PositionLat < maxY &&
                    item.Position.PositionLat > minY
            )
            .map((item) => ({
                x: item.Position.PositionLon,
                y: item.Position.PositionLat,
                content: `名稱: ${item.ScenicSpotName}, 地址: ${item.Address}`,
            }));

        ShowMultiPoint(data, layers);
        layers.addTo(lMap);
    });
};

lMap.on(L.Draw.Event.CREATED, (e) => {
    const layer = e.layer;
    const type = e.layerType;
    drawItem.addLayer(layer);
    console.log("type", type);
    console.log(e);
    if (type === "rectangle") {
        const arr = layer.getLatLngs();
        console.log(arr);
        let xList = arr[0].map((item) => item.lng);
        let yList = arr[0].map((item) => item.lat);

        SearchData({
            maxX: Math.max(...xList),
            minX: Math.min(...xList),
            maxY: Math.max(...yList),
            minY: Math.min(...yList),
        });
    }
});
