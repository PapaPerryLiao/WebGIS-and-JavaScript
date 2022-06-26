//// 經濟地理圖資中心 鄰近商家查詢

const layers = L.layerGroup();

const ShowMultiPoint = (dataList = [], layers) => {
    if (dataList.length > 0) {
        dataList.forEach((item) => {
            const marker = L.marker([item.y, item.x]).bindPopup(item.content);
            layers.addLayer(marker);
        });
    }
};

const ShowPolygon = (dataList = []) => {
    const leafletPointList = dataList.map((item) => [item.y, item.x]);

    const polygon = L.polygon(leafletPointList, { color: "red" });
    layers.addLayer(polygon);

    return polygon.getBounds();
};

//// CORS problem
// const SearchData = ({ polyStr }) => {
//     axios({
//         method: "post",
//         url: `https://egis.moea.gov.tw/MoeaEGFxData_WebAPI_Inside/InnoServe/BusinessBUSM`,
//         data: {
//             PolygenStr: polyStr,
//             respType: "geojson",
//         },
//     });
// };

// use proxy server on local
// https://github.com/garmeeh/local-cors-proxy
// use proxy server for github page 
// https://corsproxy.io/
const SearchData = ({ polyStr }) => {
    axios({
        method: "post",
        // url: `http://localhost:8010/proxy/MoeaEGFxData_WebAPI_Inside/InnoServe/BusinessBUSM`,
        url: 'https://corsproxy.io/?' + encodeURIComponent('https://egis.moea.gov.tw/MoeaEGFxData_WebAPI_Inside/InnoServe/BusinessBUSM'),
        data: {
            PolygenStr: polyStr,
            respType: "geojson",
        },
    }).then((response) => {
        console.log(response);
        let data = response.data;
        data = data.features.map((item) => ({
            x: item.geometry.coordinates[0],
            y: item.geometry.coordinates[1],
            content: `名稱: ${item.properties.BussName}, 地址: ${item.properties.Addr}`,
        }));

        ShowMultiPoint(data, layers);
    });
};

const onSearchClick = () => {
    const coordinate_input = document.getElementById("coordinate_input");

    const polygonData = coordinate_input.value.split(",").map((item) => ({
        x: item.trim().split(" ")[0],
        y: item.trim().split(" ")[1],
    }));
    console.log("polygonData", polygonData);

    const bounds = ShowPolygon(polygonData);
    layers.addTo(lMap);
    lMap.fitBounds(bounds);

    SearchData({
        polyStr: coordinate_input.value,
    });
};

const onRemoveClick = () => {
    const coordinate_input = document.getElementById("coordinate_input");

    coordinate_input.value = "";

    removeLayers();
};

const removeLayers = () => {
    layers.clearLayers();
};
