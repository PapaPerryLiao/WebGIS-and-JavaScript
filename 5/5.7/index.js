fetch("https://maps.googleapis.com/maps/api/geocode/json?address=台北101&key=yourAPIKey")
    .then((res) => res.json())
    .then((res) => {
        const geocodingResult = res.results[0];
        const lat = geocodingResult.geometry.location.lat;
        const lng = geocodingResult.geometry.location.lng;

        const marker = L.marker([lat, lng]).addTo(lMap);

        let popup = L.popup().setLatLng([lat, lng]).setContent(`lat: ${lat}, lng: ${lng}`).openOn(lMap);

        marker.bindPopup(popup);
    });
