mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2Vyc29uMjMxMjk0IiwiYSI6ImNqYXNycjEzYzFrc3czM3FrbnZobTNsYXIifQ.Z9xZ5zDVRYervZFNTPuiUw";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/gerson231294/cjbdu3v1v8hgn2sntf58bdzwm",
  center: [-77.039, -9.489],
  zoom: 3,
  preserveDrawingBuffer: true,
  attributionControl: false
});

/* let data_res;

fetch("/data/idh_peru.json")
  .then(response => response.json())
  .then(json => {
    data_res = JSON.parse(json);
    console.log(data_res);
  }); */

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

map.on("load", function() {
  // Add source for state polygons hosted on Mapbox
  map.addSource("idh-peru", {
    type: "vector",
    url: "mapbox://" + "gerson231294.1714wicl"
  });

  // layer = idh_peru

  map.addLayer({
    id: "idh-peru",
    type: "fill",
    source: "idh-peru",
    "source-layer": "idh_peru",
    layout: {
      visibility: "visible"
    },
    paint: {
      "fill-color": "#ff0000",
      "fill-opacity": 1
    }
  });
});
