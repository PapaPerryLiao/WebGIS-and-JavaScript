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

// use proxy server on local
// https://github.com/garmeeh/local-cors-proxy
// use proxy server for github page 
// https://corsproxy.io/
const SearchData = ({ polyStr }) => {
    axios({
        method: "post",
        //url: `http://localhost:8010/proxy/MoeaEGFxData_WebAPI_Inside/InnoServe/LandMark`,
        url: 'https://corsproxy.io/?' + encodeURIComponent('https://egis.moea.gov.tw/MoeaEGFxData_WebAPI_Inside/InnoServe/LandMark'),
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
            content: item.properties.LandMark,
        }));

        ShowMultiPoint(data, layers);
        layers.addTo(lMap);
    });
};

const ShowMultiPoint = (dataList = [], layers) => {
    if (dataList.length > 0) {
        dataList.forEach((item) => {
            const marker = L.marker([item.y, item.x]).bindPopup(item.content);
            layers.addLayer(marker);
        });
    }
};

lMap.on(L.Draw.Event.CREATED, (e) => {
    const layer = e.layer;
    const type = e.layerType;
    drawItem.addLayer(layer);
    console.log("type", type);
    console.log(e);
    if (type === "polygon" || type === "rectangle") {
        const arr = layer.getLatLngs();
        console.log(arr);
        let polyList = [
            ...new Set(
                arr[0].map((item) => {
                    return `${item.lng} ${item.lat}`;
                })
            ),
        ];

        //陣列最後再加入第一個點, 形成頭尾相連
        // console.log(polyList);
        polyList.push(polyList[0]);

        SearchData({
            polyStr: polyList.join(","),
        });
    }
});
