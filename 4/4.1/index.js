//// 原生KmlLayer方法 不支援相對路徑, 只支援絕對路徑
const kmlLayer = new google.maps.KmlLayer("https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml", {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: gMap,
});

//// https://github.com/geocodezip/geoxml3
// const xmlParser = new geoXML3.parser({
//     map: gMap,
// });
// xmlParser.parse("Sample.kml");
