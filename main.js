  var data = [{
    type: "scatterpolargl",
    r: [1, 2, 3],
    theta: [50, 100, 200],
    marker: {
      symbol: "square"
    }
  }, {
    type: "scatterpolargl",
    r: [1, 2, 3],
    theta: [1, 2, 3],
    thetaunit: "radians"
  }, {
    type: "scatterpolargl",
    r: ["a", "b", "c", "b"],
    theta: ["D", "C", "B", "A"],
    subplot: "polar2"
  }, {
    type: "scatterpolargl",
    r: [50, 300, 900],
    theta: [0, 90, 180],
    subplot: "polar3"
  }, {
    type: "scatterpolargl",
    mode: "lines",
    r: [3, 3, 4, 3],
    theta: [0, 45, 90, 270],
    fill: "toself",
    subplot: "polar4"
  }]
  var layout = {
    polar: {
      domain: {
        x: [0, 0.46],
        y: [0.56, 1]
      },
      radialaxis: {
        range: [1, 4]
      },
      angularaxis: {
        thetaunit: "radians"
      }
    },
    polar2: {
      domain: {
        x: [0, 0.46],
        y: [0, 0.42]
      }
    },
    polar3: {
      domain: {
        x: [0.54, 1],
        y: [0.56, 1]
      },
      radialaxis: {
        type: "log",
        tickangle: 45
      },
      sector: [0, 180]
    },
    polar4: {
      domain: {
        x: [0.54, 1],
        y: [0, 0.44]
      },
      radialaxis: {
        visible: false,
        range: [0, 6]
      }
    },
    showlegend: false
  }
  Plotly.newPlot('myDiv', data, layout);
