const url = "Sample.json";

const tgData = new TGOS.TGData({ map: tMap }); //建立幾何圖層物件
tgData.loadGeoJson(url);
