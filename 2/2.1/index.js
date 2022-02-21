const marker = new google.maps.Marker({
    position: { lat: 23.5, lng: 121 },
    map: gMap,
    title: "你好！我是點資料圖徵！",
});

const infowindow = new google.maps.InfoWindow({
    content: `lat: 23.5, lng: 121`,
});

marker.addListener("click", function () {
    infowindow.open(gMap, marker);
});
