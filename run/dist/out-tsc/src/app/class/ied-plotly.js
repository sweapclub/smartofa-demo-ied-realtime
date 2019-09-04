export class IedPlotly {
    constructor(fmName, rawIED) {
        this.iedAP = {
            data: [
                {
                    type: "scatter",
                    x: [],
                    y: [],
                    name: "Predict",
                    marker: {
                        color: "#198C19",
                        line: {
                            width: 0
                        },
                        size: 1
                    }
                },
                {
                    type: "scatter",
                    x: [],
                    y: [],
                    name: "Actual",
                    marker: {
                        color: "#FFFFF",
                        line: {
                            width: 0
                        },
                        size: 1
                    },
                    connectgaps: false
                }
            ],
            layout: {
                title: `Prediction VS Actual`,
                font: {
                    size: 10
                },
                margin: {
                    l: 50,
                    r: 30,
                    b: 30,
                    t: 50
                },
                xaxis: {
                    zeroline: false,
                    // '2018-12-17 13:47:00'
                    range: ['2018-12-08 00:00:00', '2018-12-08 00:00:00']
                },
                showlegend: false,
                plot_bgcolor: "#FFF3",
                paper_bgcolor: "#FFF3",
                annotations: [{
                        xref: 'paper',
                        yref: 'paper',
                        x: 0,
                        xanchor: 'center',
                        y: 1,
                        yanchor: 'bottom',
                        text: 'Ethane (ppm)',
                        showarrow: false
                    }],
                height: 320
            },
            config: {
                responsive: true,
                displaylogo: false,
                modeBarButtonsToRemove: [
                    "lasso2d",
                    "select2d",
                    "sendDataToCloud",
                    "autoScale2d",
                    "zoom2d",
                    "pan2d",
                    "zoomIn2d",
                    "zoomOut2d",
                    "autoScale2d",
                    "resetScale2d",
                    "hoverClosestCartesian",
                    "hoverCompareCartesian",
                    "zoom3d",
                    "pan3d",
                    "orbitRotation",
                    "tableRotation",
                    "resetCameraDefault3d",
                    "resetCameraLastSave3d",
                    "hoverClosest3d",
                    "zoomInGeo",
                    "zoomOutGeo",
                    "resetGeo",
                    "hoverClosestGeo",
                    "hoverClosestGl2d",
                    "hoverClosestPie",
                    "toggleHover",
                    // "toImage",
                    "resetViews",
                    "toggleSpikelines"
                ]
            }
        };
        this.iedRE = {
            data: [
                {
                    type: "scatter",
                    x: [],
                    y: [],
                    name: "",
                    mode: 'lines+markers',
                    marker: {
                        color: "#D50000",
                        size: 1
                    },
                    connectgaps: true,
                    showlegend: false
                },
                {
                    type: "scatter",
                    x: [],
                    y: [],
                    name: "",
                    marker: {
                        color: "#FF5252",
                        line: {
                            width: 0
                        },
                        size: 1
                    },
                    line: {
                        dash: "dashdot",
                    },
                    hoverinfo: "text",
                    showlegend: false,
                },
                {
                    type: "scatter",
                    x: [],
                    y: [],
                    name: "",
                    marker: {
                        color: "#FF5252",
                        line: {
                            width: 0
                        },
                        size: 1
                    },
                    line: {
                        dash: "dashdot",
                        shape: 'linear'
                    },
                    hoverinfo: "text",
                    showlegend: false
                },
            ],
            layout: {
                title: `Residual (Actual - Prediction)`,
                font: {
                    size: 10
                },
                margin: {
                    l: 50,
                    r: 30,
                    b: 30,
                    t: 50
                },
                plot_bgcolor: "#FFF3",
                paper_bgcolor: "#FFF3",
                showlegend: true,
                xaxis: {
                    zeroline: false,
                    range: ['2018-12-08 00:00:00', '2018-12-08 00:00:00']
                },
                yaxis: {
                    zeroline: true,
                    range: [-8, 8]
                },
                height: 320
            },
            config: {
                responsive: true,
                displaylogo: false,
                modeBarButtonsToRemove: [
                    "lasso2d",
                    "select2d",
                    "sendDataToCloud",
                    "autoScale2d",
                    "zoom2d",
                    "pan2d",
                    "zoomIn2d",
                    "zoomOut2d",
                    "autoScale2d",
                    "resetScale2d",
                    "hoverClosestCartesian",
                    "hoverCompareCartesian",
                    "zoom3d",
                    "pan3d",
                    "orbitRotation",
                    "tableRotation",
                    "resetCameraDefault3d",
                    "resetCameraLastSave3d",
                    "hoverClosest3d",
                    "zoomInGeo",
                    "zoomOutGeo",
                    "resetGeo",
                    "hoverClosestGeo",
                    "hoverClosestGl2d",
                    "hoverClosestPie",
                    "toggleHover",
                    // "toImage",
                    "resetViews",
                    "toggleSpikelines"
                ]
            }
        };
        this.tags = [];
        this.genTagData(fmName, rawIED);
    }
    genTagData(fmNamem, rawTag) {
        let annotation = fmNamem.substring(0, 1);
        if (annotation == 'F') {
            annotation = "Flow (Ton/Hr)";
        }
        else if (annotation == 'P') {
            annotation = "Pressure (Kg/cm^2)";
        }
        else {
            annotation = "";
        }
        this.iedAP.layout.annotations[0].text = annotation;
        rawTag.forEach((e, i) => {
            // change TAG_DATA_DATE to fake
            this.iedAP.data[0].x.push(e.TAG_DATA_DATE);
            this.iedAP.data[1].x.push(e.TAG_DATA_DATE);
            this.iedAP.data[0].y.push(e.PREDICT_VALUE);
            this.iedAP.data[1].y.push(e.ACTUAL_VALUE);
            this.iedRE.data[0].x.push(e.TAG_DATA_DATE);
            this.iedRE.data[0].y.push(e.RESIDUAL_VALUE);
        });
        this.tags.push(this.iedAP);
        this.tags.push(this.iedRE);
    }
    plotTag() {
        return this.tags;
    }
}
//# sourceMappingURL=ied-plotly.js.map