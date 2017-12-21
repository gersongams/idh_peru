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

const toggleableLayers = [
  {
    id: ["idh-peru"],
    name: ["Indice de Desarrollo Humano"]
  },
  {
    id: ["poblacion"],
    name: ["Población"]
  },
  {
    id: ["evn"],
    name: ["Esperanza de Vida al Nacer"]
  },
  {
    id: ["pob_esc"],
    name: ["Población Escolarizada"]
  },
  {
    id: ["poredad_25"],
    name: ["Población Mayor a 25"]
  },
  {
    id: ["ing_promed"],
    name: ["Ingreso promedio"]
  }
];

function hideAllLayers() {
  toggleableLayers.forEach(function(layer, i) {
    var link = menusocial.children[i];
    link.className = "";
    layer.id.forEach(function(layerId) {
      map.setLayoutProperty(layerId, "visibility", "none");
    });
  });
}

function setOnLinkClickHandler(link, layer) {
  link.onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    hideAllLayers();
    this.className = "active";
    layer.id.forEach(function(layerId) {
      map.setLayoutProperty(layerId, "visibility", "visible");
    });
  };
}

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

function addLayerNav(map) {
  var menusocial = document.getElementById("menusocial");

  toggleableLayers.forEach(function(layer) {
    console.log(layer);
    var link = document.createElement("a");
    link.href = "#";
    link.textContent = layer.name;

    setOnLinkClickHandler(link, layer);

    menusocial.appendChild(link);
  });
}

map.on("load", function() {
  // Add source for state polygons hosted on Mapbox
  // layer = idh_peru

  addCustomLayers(map);
  addLayerNav(map);

  var ID_PROV = 0;
  var click = "FALSE";

  map.on("click", function(e) {
    if (click === "TRUE") {
      click = "FALSE";
    } else {
      click = "TRUE";
    }
    console.log(click);
  });

  map.on("mousemove", function(e) {
    if (click === "FALSE") {
      var indicadores = map.queryRenderedFeatures(e.point, {
        layers: [
          "idh-peru",
          "poblacion",
          "evn",
          "pob_esc",
          "poredad_25",
          "ing_promed"
        ]
      });

      if (indicadores.length > 0) {
        indicadores.map(function(e2) {
          console.log(e2.properties);
          return e2;
        });
      }

      if (indicadores.length > 0 && map.getZoom() < 8.0) {
        map.getSource("highlight").setData({
          type: "FeatureCollection",
          features: indicadores
        });
        if (indicadores[0].properties.ID_PROV !== ID_PROV) {
          ID_PROV = indicadores[0].properties.FIPS;
        }
      } else if (indicadores.length > 0 && map.getZoom() >= 8.0) {
        map.getSource("highlight").setData({
          type: "FeatureCollection",
          features: indicadores
        });
        if (indicadores[0].properties.ID_PROV !== ID_PROV) {
          ID_PROV = indicadores[0].properties.FIPS;
        }
      } else {
        map.getCanvas().style.cursor = "default";
      }
    }
  });
});
