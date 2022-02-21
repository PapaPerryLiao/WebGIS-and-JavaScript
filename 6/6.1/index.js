var data;
const inputFile = document.getElementById("upload");
const layers = L.layerGroup();

const ShowMultiPoint = (dataList = [], layers) => {
    if (dataList.length > 0) {
        dataList.forEach((item) => {
            const marker = L.marker([item.y, item.x]).bindPopup(item.content);
            layers.addLayer(marker);
        });
    }
};

const LoadJSON = () => {
    const file = inputFile.files[0];
    const reader = new FileReader();
    console.log(`檔案名稱: ${file.name}，檔案大小： ${file.size}。`);

    reader.readAsText(file);
    reader.onload = () => {
        let result = JSON.parse(reader.result);
        data = result;
        console.log(data);
        ShowMultiPoint(OrganizeData(data), layers);
        layers.addTo(lMap);
    };
};
inputFile.addEventListener("change", LoadJSON);

const OrganizeData = (data) => {
    let arr = data.results.map((item) => {
        return {
            x: item.geometry.location.lng,
            y: item.geometry.location.lat,
            name: item.name,
            icon: item.icon,
            photo: item.photos[0].html_attributions[0],
            address: item.vicinity,
            content: `<div class="infoWindow">
                        <h2>${item.name}</h2>
                        <p>經度: ${item.geometry.location.lng}</p>
                        <p>緯度: ${item.geometry.location.lat}</p>
                        <p>地址: ${item.vicinity}</p>
                      </div>
    `,
        };
    });

    return arr;
};
