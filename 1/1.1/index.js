// Google Map API
const GMap = new google.maps.Map(document.getElementById("gmap"), {
    center: { lat: 23.5, lng: 121 },
    zoom: 7,
    maxZoom: 18,
    minZoom: 0,
});

const getMapInformation = () => {
    const center = GMap.getCenter();
    const latitude = center.lat();
    const longitude = center.lng();
    const bounds = GMap.getBounds();
    const zoom = GMap.getZoom();

    console.log("緯度", latitude);
    console.log("經度", longitude);
    console.log("邊界", bounds);
    console.log("縮放層級", zoom);
};
