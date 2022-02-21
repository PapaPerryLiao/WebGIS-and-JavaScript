proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
proj4.defs("EPSG:3826", "+proj=tmerc +lat_0=0 +lon_0=121 +k=0.9999 +x_0=250000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

const EPSG4326 = new proj4.Proj("EPSG:4326"); // WGS84
const EPSG3826 = new proj4.Proj("EPSG:3826"); // TWD97

const btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener("click", (e) => {
    let x = document.getElementById("x");
    let y = document.getElementById("y");
    let type = document.querySelector('input[name="coordinate"]:checked');

    if (type.value === "WGS84") {
        const marker = L.marker([y.value, x.value]).addTo(lMap);
    } else {
        // 實作 利用TWD97轉換為WGS84後，再定位
        const result = proj4(EPSG3826, EPSG4326, [Number(x.value), Number(y.value)]);
        const marker = L.marker([result[1], result[0]]).addTo(lMap);
    }
});
