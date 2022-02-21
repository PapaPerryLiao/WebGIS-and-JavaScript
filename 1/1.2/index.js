// Here Maps API
const platform = new H.service.Platform({
    apikey: yourAPIKey,
});

const defaultLayers = platform.createDefaultLayers();

console.log("defaultLayers", defaultLayers);

const hMap = new H.Map(document.getElementById("hmap"), defaultLayers.raster.normal.map, {
    zoom: 7,
    center: { lat: 23.5, lng: 121 },
    pixelRatio: 1,
});
const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));
const ui = H.ui.UI.createDefault(hMap, defaultLayers);
