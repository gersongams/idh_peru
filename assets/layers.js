const mapLayers = [
  [
    {
      id: "highlight",
      type: "line",
      source: "highlight",
      layout: {},
      paint: {
        "line-color": "#000000",
        "line-width": 3
      }
    }
  ],
  [
    {
      id: "idh-peru",
      type: "fill",
      source: "maps",
      "source-layer": "idh_peru",
      maxzoom: 20,
      paint: {
        "fill-color": {
          property: "IDH",
          type: "exponential",
          stops: [[1, "#ff0000"]]
        },
        "fill-opacity": {
          stops: [[0, 0.5], [8, 0.5], [10, 0]]
        }
      }
    }
  ],
  [
    {
      id: "poblacion",
      type: "fill",
      source: "maps",
      "source-layer": "idh_peru",
      maxzoom: 20,
      layout: {
        visibility: "none"
      },
      paint: {
        "fill-color": {
          property: "Poblacion",
          type: "exponential",
          stops: [[1, "#00ff00"]]
        },
        "fill-opacity": {
          stops: [[0, 0.5], [8, 0.5], [10, 0]]
        }
      }
    }
  ],
  [
    {
      id: "evn",
      type: "fill",
      source: "maps",
      "source-layer": "idh_peru",
      maxzoom: 20,
      layout: {
        visibility: "none"
      },
      paint: {
        "fill-color": {
          property: "EVN",
          type: "exponential",
          stops: [[1, "#0000ff"]]
        },
        "fill-opacity": {
          stops: [[0, 0.5], [8, 0.5], [10, 0]]
        }
      }
    }
  ],
  [
    {
      id: "pob_esc",
      type: "fill",
      source: "maps",
      "source-layer": "idh_peru",
      maxzoom: 20,
      layout: {
        visibility: "none"
      },
      paint: {
        "fill-color": {
          property: "POB_ESC",
          type: "exponential",
          stops: [[1, "#7fcdbb"]]
        },
        "fill-opacity": {
          stops: [[0, 0.5], [8, 0.5], [10, 0]]
        }
      }
    }
  ],
  [
    {
      id: "poredad_25",
      type: "fill",
      source: "maps",
      "source-layer": "idh_peru",
      maxzoom: 20,
      layout: {
        visibility: "none"
      },
      paint: {
        "fill-color": {
          property: "POREDAD_25",
          type: "exponential",
          stops: [[1, "#332a85"]]
        },
        "fill-opacity": {
          stops: [[0, 0.5], [8, 0.5], [10, 0]]
        }
      }
    }
  ],
  [
    {
      id: "ing_promed",
      type: "fill",
      source: "maps",
      "source-layer": "idh_peru",
      maxzoom: 20,
      layout: {
        visibility: "none"
      },
      paint: {
        "fill-color": {
          property: "ING_PROMED",
          type: "exponential",
          stops: [[1, "#225ea8"]]
        },
        "fill-opacity": {
          stops: [[0, 0.5], [8, 0.5], [10, 0]]
        }
      }
    }
  ]
];
