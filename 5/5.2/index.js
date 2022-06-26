const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
};

const showPosition = (position) => {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;

    const marker = L.marker([lat, lng]).addTo(lMap);

    const popup = L.popup().setLatLng([lat, lng]).setContent(`lat: ${lat}, lng: ${lng}`).openOn(lMap);

    marker.bindPopup(popup);
};

getLocation();
