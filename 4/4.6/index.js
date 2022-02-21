gMap.data.loadGeoJson("Sample.json");

//// 設定樣式
gMap.data.setStyle((feature) => {
    return {
        strokeWeight: feature.getProperty("stroke-width"),
        strokeOpacity: feature.getProperty("stroke-opacity"),
        strokeColor: feature.getProperty("stroke"),
        fillColor: feature.getProperty("fill"),
        fillOpacity: feature.getProperty("fill-opacity"),
    };
});

// get Sample.json
// axios.get("/Sample.json").then(function (response) {
//     let data = response.data;
//     console.log(arguments);
//     console.log(data);
// });
