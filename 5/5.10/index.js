// 使用fetch範例
fetch("Taipei.json")
    .then((res) => res.json())
    .then((response) => {
        const geoJSONLayer = L.geoJSON().addTo(lMap);
        geoJSONLayer.addData(response);
        const bounds = geoJSONLayer.getBounds();
        lMap.fitBounds(bounds);
    });

//// 使用axios範例
// axios.get('Taipei.json').then((response) => {
//     const data = response.data;
//     const geoJSONLayer = L.geoJSON().addTo(lMap);
//     geoJSONLayer.addData(data);
//     const bounds = geoJSONLayer.getBounds();
//     lMap.fitBounds(bounds);

//     console.log(arguments);
//     console.log(data);
// });
