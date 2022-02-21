const Locate = () => {
    const locator = new TGOS.TGLocateService();
    let districtInput = document.getElementById("district");

    locator.locateWGS84(
        {
            district: districtInput.value,
        },
        (e, status) => {
            if (status != TGOS.TGLocatorStatus.OK) {
                console.log("查無行政區");
            } else {
                const result = e[0].geometry.geometry.rings_[0].linestring.path.map((item) => [item.y, item.x]);
                console.log(result);

                // Leaflet Show Polygon
                const polygon = L.polygon(result, { color: "red" }).addTo(lMap);
                lMap.fitBounds(polygon.getBounds());
            }
        }
    );
};
