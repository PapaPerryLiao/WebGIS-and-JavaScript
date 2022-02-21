const layers = L.layerGroup();

const ShowMultiPoint = (dataList = [], layers) => {
    if (dataList.length > 0) {
        dataList.forEach((item) => {
            const marker = L.marker([item.y, item.x]).bindPopup(item.content);
            layers.addLayer(marker);
        });
    }
};

const OrganizeData = (data) => {
    const stopData = data
        ?.filter(({ Direction }) => Direction === 0)[0]
        ?.Stops.map((item) => ({
            x: item.StopPosition.PositionLon,
            y: item.StopPosition.PositionLat,
            name: item.StopName.Zh_tw,
            content: `<div class="infoWindow">
                           <h2>${item.StopName.Zh_tw}</h2>
                           <p>經度: ${item.StopPosition.PositionLon}</p>
                           <p>緯度: ${item.StopPosition.PositionLat}</p>
                       </div>
                    `,
        }));

    console.log("stopData", stopData);
    return stopData;
};

const GetBusData = () => {
    axios({
        method: "get",
        url: "https://ptx.transportdata.tw/MOTC/v2/Bus/DisplayStopOfRoute/City/Taipei/670?$top=100&$format=JSON",
    }).then((result) => {
        const data = result.data;
        console.log(data);
        const stopData = OrganizeData(result.data);
        ShowMultiPoint(stopData, layers);
        layers.addTo(lMap);
    });
};

GetBusData();
