// Leaflet API
const lMap = L.map(document.getElementById("lmap"), {
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
).addTo(lMap);
