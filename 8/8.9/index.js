const marker = new L.Marker([23.5, 121], {
    bounceOnAdd: true,
    bounceOnAddOptions: { duration: 1500, height: 200, loop: 1 },
}).addTo(lMap);

marker.on("click", () => {
    marker.bounce({ duration: 500, height: 200, loop: 1 });
});
