mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2Vyc29uMjMxMjk0IiwiYSI6ImNqYXNycjEzYzFrc3czM3FrbnZobTNsYXIifQ.Z9xZ5zDVRYervZFNTPuiUw";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/gerson231294/cjbdu3v1v8hgn2sntf58bdzwm",
  hash: true,
  center: [-77.039, -9.489],
  zoom: 3,
  preserveDrawingBuffer: true,
  attributionControl: false
});

function addCustomLayers(map) {
  mapSources.forEach(function(source) {
    let id = source[0];
    let obj = source[1];
    map.addSource(id, obj);
  });

  mapLayers.forEach(function(layer) {
    let obj = layer[0];
    let label = layer[1];
    map.addLayer(obj, label);
  });
}
