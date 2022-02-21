const svgMarkup = `<svg width="24" height="24" 
    xmlns="http://www.w3.org/2000/svg">
    <rect stroke="white" fill="#1b468d" x="1" y="1" width="22" 
    height="22" /><text x="12" y="18" font-size="12pt" 
    font-family="Arial" font-weight="bold" text-anchor="middle" 
    fill="white">H</text></svg>`;
const icon = new H.map.Icon(svgMarkup);

const coords = { lat: 23.5, lng: 121 };
const marker = new H.map.Marker(coords, { icon: icon });
marker.setData(`<div style="width: 120px; text-align: center;">lat: 23.5, lng: 121</div>`);
hMap.addObject(marker);
hMap.setCenter(coords);

marker.addEventListener(
    "tap",
    (e) => {
        const geometry = e.target.getGeometry();
        const { x, y } = hMap.geoToScreen(geometry);

        const bubble = new H.ui.InfoBubble(hMap.screenToGeo(x, y - 30), {
            content: e.target.getData(),
        });

        ui.addBubble(bubble);
    },
    false
);
