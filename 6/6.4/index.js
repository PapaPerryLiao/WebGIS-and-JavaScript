//// 經濟地理圖資中心 鄰近商家查詢 API範例
// https://egis.moea.gov.tw/MoeaEGFxData_WebAPI_Inside/InnoServe/BusinessBUSM?resptype=GeoJson&x=121.4&y=25&buffer=1000

const layers = L.layerGroup();

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
    // console.log(circle.getBounds());
    const center = L.latLng(y, x);
    const bounds = center.toBounds(radius * 2);
    return bounds;
};

const SearchData = ({ x, y, radius }) => {
    axios
        .get(`https://egis.moea.gov.tw/MoeaEGFxData_WebAPI_Inside/InnoServe/BusinessBUSM?resptype=GeoJson&x=${x}&y=${y}&buffer=${radius}`)
        .then((response) => {
            console.log(response);
            let data = response.data;
            data = data.features.map((item) => ({
                x: item.geometry.coordinates[0],
                y: item.geometry.coordinates[1],
                content: item.properties.BussName,
            }));

            const bounds = ShowCircle({ x, y, radius }, layers);
            console.log(bounds);
            ShowMultiPoint(data, layers);
            layers.addTo(lMap);
            lMap.fitBounds(bounds);
        });
};

const onSearchClick = () => {
    const longitude_input = document.getElementById("longitude_input");
    const latitude_input = document.getElementById("latitude_input");
    const radius_input = document.getElementById("radius_input");

    SearchData({
        x: longitude_input.value,
        y: latitude_input.value,
        radius: radius_input.value,
    });
};

const onRemoveClick = () => {
    const longitude_input = document.getElementById("longitude_input");
    const latitude_input = document.getElementById("latitude_input");
    const radius_input = document.getElementById("radius_input");

    longitude_input.value = "";
    latitude_input.value = "";
    radius_input.value = "";

    removeLayers();
};

const removeLayers = () => {
    layers.clearLayers();
};
