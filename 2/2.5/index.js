// Leaflet API
const LMap = L.map(document.getElementById("lmap"), {
    center: [23.5, 121],
    zoom: 7,
    crs: L.CRS.EPSG3857,
});
L.tileLayer(
    "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGVycnlsaWFvIiwiYSI6ImNrdGVkYWJueTJveWEycm84NzZrMXJyZjAifQ.s8EyAc5U3E1c7wcN1qlE9w",
    {
        maxZoom: 18,
        attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        id: "mapbox.streets",
    }
).addTo(LMap);

const marker = L.marker([23.5, 121]).bindPopup(`lat: 23.5, lng: 121`);

marker.addTo(LMap);

// 清除圖層
// LMap.removeLayer(marker);

// 補充: 獨立popup物件
// const popup = L.popup().setLatLng([23.5, 121]).setContent(`lat: 23.5, lng: 121`).openOn(LMap);
// console.log(popup);
