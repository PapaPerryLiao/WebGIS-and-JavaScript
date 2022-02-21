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
        rectangle: false,
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

const ShowCircle = ({ x, y, radius }, layers) => {
    const circle = L.circle([y, x], { radius });
    layers.addLayer(circle);
    const center = L.latLng(y, x);
    const bounds = center.toBounds(radius * 2);
    return bounds;
};

const SearchData = ({ x, y, radius }) => {
    axios
        .get(`https://egis.moea.gov.tw/MoeaEGFxData_WebAPI_Inside/InnoServe/Factory?resptype=GeoJson&x=${x}&y=${y}&buffer=${radius}`)
        .then((response) => {
            console.log(response);
            let data = response.data;
            data = data.features.map((item) => ({
                x: item.geometry.coordinates[0],
                y: item.geometry.coordinates[1],
                content: item.properties.FactoryName,
            }));

            const bounds = ShowCircle({ x, y, radius }, layers);
            console.log(bounds);
            ShowMultiPoint(data, layers);
            layers.addTo(lMap);
            lMap.fitBounds(bounds);
        });
};

lMap.on(L.Draw.Event.CREATED, (e) => {
    const layer = e.layer;
    const type = e.layerType;
    drawItem.addLayer(layer);
    console.log("type", type);
    if (type === "circle") {
        const center = layer.getLatLng();
        const radius = layer.getRadius();
        console.log(`經度: ${center.lng}, 緯度: ${center.lat}`);
        console.log(`半徑: ${parseInt(radius)} (m)`);

        SearchData({
            x: center.lng,
            y: center.lat,
            radius: parseInt(radius),
        });
    }
});
