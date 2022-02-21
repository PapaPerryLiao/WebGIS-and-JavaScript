const Locate = () => {
    const locator = new TGOS.TGLocateService();
    const addressInput = document.getElementById("address");

    locator.locateWGS84(
        {
            address: addressInput.value,
        },
        (e, status) => {
            if (status != TGOS.TGLocatorStatus.OK) {
                return;
            }

            const location = e[0].geometry.location;
            const lat = location.y;
            const lng = location.x;

            const marker = L.marker([lat, lng]).addTo(lMap);

            const popup = L.popup().setLatLng([lat, lng]).setContent(`X坐標： ${location.x}，Y坐標： ${location.y}`).openOn(lMap);

            marker.bindPopup(popup);
        }
    );
};
