lMap.addEventListener("mousemove", (e) => {
    const coordinateDiv = document.getElementsByClassName("coordinate-mouse")[0];
    coordinateDiv.innerText = `經度: ${e.latlng.lng.toFixed(6)}, 緯度: ${e.latlng.lat.toFixed(6)}
    `;
});
