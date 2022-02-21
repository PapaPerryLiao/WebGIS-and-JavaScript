proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
proj4.defs("EPSG:3826", "+proj=tmerc +lat_0=0 +lon_0=121 +k=0.9999 +x_0=250000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
proj4.defs("EPSG:3857", "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs");
proj4.defs("EPSG:3828", "+proj=tmerc +lat_0=0 +lon_0=121 +k=0.9999 +x_0=250000 +y_0=0 +ellps=aust_SA");

const EPSG4326 = new proj4.Proj("EPSG:4326"); // WGS84
const EPSG3826 = new proj4.Proj("EPSG:3826"); // TWD97
const EPSG3857 = new proj4.Proj("EPSG:3857"); // Google投影
const EPSG3828 = new proj4.Proj("EPSG:3828"); // TWD67

//4326轉3826 (經緯度轉TWD97)
const result = proj4(EPSG4326, EPSG3826, [121, 23.5]);
console.log(result);
