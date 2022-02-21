const div = document.getElementById("demo");
const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        div.innerHTML = "Geolocation is not supported by this browser.";
    }
};

const showPosition = (position) => {
    div.innerHTML = `Latitude: ${position.coords.latitude}<br />
    Longitude: ${position.coords.longitude}`;
};

getLocation();
