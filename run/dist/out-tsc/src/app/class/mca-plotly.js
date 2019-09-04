export class McaPlotly {
    constructor(rawResult, rawFrequencyHigh, rawFrequencyLow, rawAlarm, rawGraph) {
        this.fLGraph = {
            data: [
                {
                    type: "scatter",
                    x: [],
                    y: [],
                    name: "",
                    text: [],
                    marker: {
                        color: "#0277bd",
                        line: {
                            width: 0
                        },
                        size: 1
                    },
                    orientation: 'h',
                    connectgaps: false,
                    showlegend: false,
                },
                {
                    type: "scatter",
                    x: [],
                    y: [],
                    name: "Rotor",
                    mode: 'markers',
                    text: [],
                    marker: {
                        color: "rgb(255, 20, 147)",
                        size: 5
                    },
                    // hover: 't',
                    hoverinfo: 'none',
                    orientation: 'h',
                    connectgaps: false,
                },
                {
                    type: "scatter",
                    x: [],
                    y: [],
                    name: "Stator",
                    mode: 'markers',
                    text: [],
                    marker: {
                        color: "rgb(130, 111, 155)",
                        size: 5
                    },
                    // hover: 't',
                    hoverinfo: 'none',
                    orientation: 'h',
                    connectgaps: false,
                }
            ],
            layout: {
                font: {
                    size: 10
                },
                margin: {
                    l: 40,
                    r: 50,
                    b: 40,
                    t: 40
                },
                title: 'FFTIB(Low Frequency)',
                autoexpand: true,
                xaxis: {
                    showline: true,
                    zeroline: false,
                    layer: "below traces",
                    range: [0, 400]
                },
                yaxis: {
                    // fixedrange: true,
                    zeroline: false,
                    layer: "below traces",
                    ticks: '',
                    title: {
                        text: 'Amplitude (dB)',
                        font: {
                            size: 14,
                            color: '#7f7f7f'
                        }
                    }
                },
                height: 180,
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
                    "toImage",
                    "resetViews",
                    "toggleSpikelines"
                ]
            }
        };
        this.fHGraph = {
            data: [
                {
                    type: "scatter",
                    x: [],
                    y: [],
                    name: "",
                    text: [],
                    marker: {
                        color: "#ff6f00",
                        line: {
                            width: 0
                        },
                        size: 1
                    },
                    orientation: 'h',
                    connectgaps: false,
                    showlegend: false,
                },
                {
                    type: "scatter",
                    x: [],
                    y: [],
                    name: "Eccentric",
                    mode: 'markers',
                    text: [],
                    marker: {
                        color: "rgb(255, 0, 0)",
                        size: 5
                    },
                    hoverinfo: 'none',
                    orientation: 'h',
                    connectgaps: false,
                },
                {
                    type: "scatter",
                    x: [],
                    y: [],
                    name: "Stator",
                    mode: 'markers',
                    text: [],
                    marker: {
                        color: "rgb(141, 78, 133)",
                        size: 5
                    },
                    hoverinfo: 'none',
                    orientation: 'h',
                    connectgaps: false,
                }
            ],
            layout: {
                font: {
                    size: 10
                },
                margin: {
                    l: 40,
                    r: 50,
                    b: 40,
                    t: 40
                },
                title: 'FFTIB(Hi Frequency)',
                autoexpand: true,
                xaxis: {
                    showline: true,
                    zeroline: false,
                    layer: "below traces",
                    range: [0, 6000]
                },
                yaxis: {
                    // fixedrange: true,
                    zeroline: false,
                    layer: "below traces",
                    ticks: '',
                    title: {
                        text: 'Amplitude (dB)',
                        font: {
                            size: 14,
                            color: '#7f7f7f'
                        }
                    }
                },
                height: 180,
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
                    "toImage",
                    "resetViews",
                    "toggleSpikelines"
                ]
            }
        };
        this.resultGraph = {
            data: [],
            layout: {
                font: {
                    size: 10
                },
                margin: {
                    l: 40,
                    r: 50,
                    b: 40,
                    t: 40
                },
                title: '',
                autoexpand: true,
                xaxis: {
                    showline: true,
                    zeroline: false,
                    layer: "below traces",
                },
                yaxis: {
                    // fixedrange: true,
                    zeroline: false,
                    layer: "below traces",
                    ticks: '',
                },
                height: 200,
                shapes: [
                    {
                        type: 'line',
                        xref: 'paper',
                        yref: 'y',
                        x0: 0,
                        y0: null,
                        x1: 1,
                        y1: null,
                        line: {
                            color: '#d50000',
                            width: 3,
                            dash: 'dashdot',
                        }
                    },
                    {
                        type: 'line',
                        xref: 'paper',
                        yref: 'y',
                        x0: 0,
                        y0: null,
                        x1: 1,
                        y1: null,
                        line: {
                            color: '#ffd600',
                            width: 3,
                            dash: 'dashdot',
                        }
                    },
                ]
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
                    "toImage",
                    "resetViews",
                    "toggleSpikelines"
                ]
            }
        };
        this.objFreqHigh = [];
        this.objFreqLow = [];
        this.objResult = [];
        this.objFreqLow = this.genFrequency(rawFrequencyLow);
        this.objFreqHigh = this.genFrequency(rawFrequencyHigh, true);
        this.genResult(rawResult, rawAlarm, rawGraph);
    }
    genFrequency(freq, isHigh = false) {
        let tmpGraph = [];
        if (isHigh) {
            tmpGraph = [
                JSON.parse(JSON.stringify(this.fHGraph)),
                JSON.parse(JSON.stringify(this.fHGraph)),
                JSON.parse(JSON.stringify(this.fHGraph))
            ];
        }
        else {
            tmpGraph = [
                JSON.parse(JSON.stringify(this.fLGraph)),
                JSON.parse(JSON.stringify(this.fLGraph)),
                JSON.parse(JSON.stringify(this.fLGraph))
            ];
        }
        freq.forEach(e => {
            tmpGraph[0].data[0].x.push(e.FHZ);
            tmpGraph[0].data[0].y.push(e.IA);
            tmpGraph[1].data[0].x.push(e.FHZ);
            tmpGraph[1].data[0].y.push(e.IB);
            tmpGraph[2].data[0].x.push(e.FHZ);
            tmpGraph[2].data[0].y.push(e.IC);
            // add Alarm
            // HIGH
            if (isHigh) {
                tmpGraph[0].data[1].x.push(e.FHZ);
                tmpGraph[0].data[2].x.push(e.FHZ);
                this.addHFreqAlarm(e.IA_CHECK, e.IA, tmpGraph[0].data, e.DATADATE);
                tmpGraph[1].data[1].x.push(e.FHZ);
                tmpGraph[1].data[2].x.push(e.FHZ);
                this.addHFreqAlarm(e.IB_CHECK, e.IB, tmpGraph[1].data, e.DATADATE);
                tmpGraph[2].data[1].x.push(e.FHZ);
                tmpGraph[2].data[2].x.push(e.FHZ);
                this.addHFreqAlarm(e.IC_CHECK, e.IC, tmpGraph[2].data, e.DATADATE);
            }
            // LOW
            else {
                tmpGraph[0].data[1].x.push(e.FHZ);
                tmpGraph[0].data[2].x.push(e.FHZ);
                this.addLFreqAlarm(e.IA_CHECK, e.IA, tmpGraph[0].data, e.DATADATE);
                tmpGraph[1].data[1].x.push(e.FHZ);
                tmpGraph[1].data[2].x.push(e.FHZ);
                this.addLFreqAlarm(e.IB_CHECK, e.IB, tmpGraph[1].data, e.DATADATE);
                tmpGraph[2].data[1].x.push(e.FHZ);
                tmpGraph[2].data[2].x.push(e.FHZ);
                this.addLFreqAlarm(e.IC_CHECK, e.IC, tmpGraph[2].data, e.DATADATE);
            }
            // END
        });
        // console.log(tmpGraph);
        return tmpGraph;
    }
    genResult(results, alarms, graphs) {
        // let objResult = [];
        for (let i = 1; i <= 8; i++) {
            const objTmp = {
                name: graphs.filter(res => res.Graph == i).map(rMap => rMap.Description)[0],
                graph: [JSON.parse(JSON.stringify(this.resultGraph)), JSON.parse(JSON.stringify(this.resultGraph)), JSON.parse(JSON.stringify(this.resultGraph))]
            };
            objTmp.graph[0].layout.title = objTmp.name;
            objTmp.graph[0].layout.shapes[0].y0 = 50;
            objTmp.graph[0].layout.shapes[0].y1 = 50;
            objTmp.graph[0].layout.shapes[1].y0 = 30;
            objTmp.graph[0].layout.shapes[1].y1 = 30;
            const setGraph = alarms.filter(res => res.Graph == i);
            // gen result
            let tmpResult = [];
            let tag;
            let tmpTag = {
                type: "scatter",
                x: [],
                y: [],
                name: "Risk Score",
                text: [],
                marker: {
                    line: {
                        width: 0
                    },
                    size: 1
                },
                hover: 't',
                orientation: 'h',
                connectgaps: false,
                showlegend: true,
            };
            for (let l = 1; l <= 3; l++) {
                objTmp.graph[l - 1].layout.shapes[0].y0 = setGraph[0].Alarm;
                objTmp.graph[l - 1].layout.shapes[0].y1 = setGraph[0].Alarm;
                objTmp.graph[l - 1].layout.shapes[1].y0 = setGraph[0].Warning;
                objTmp.graph[l - 1].layout.shapes[1].y1 = setGraph[0].Warning;
                // show all at current(4) / current unbalance(5)
                if (i != 5 && i != 6) {
                    switch (l) {
                        case 1:
                            tmpResult = results.filter(f => f.PHASE == 'Ia' && +f.GRAPH == i);
                            tag = Array.from(new Set(tmpResult.map(m => m.TAG)));
                            tag.forEach((f, i) => {
                                objTmp.graph[0].data.push(JSON.parse(JSON.stringify(tmpTag)));
                                objTmp.graph[0].data[i].name = f;
                                objTmp.graph[0].data[i].x = (tmpResult.filter(fx => fx.TAG == f).map(mx => mx.DATADATE));
                                objTmp.graph[0].data[i].y = (tmpResult.filter(fx => fx.TAG == f).map(mx => mx.VALUE));
                            });
                            break;
                        case 2:
                            tmpResult = results.filter(f => f.PHASE == 'Ib' && +f.GRAPH == i);
                            tag = Array.from(new Set(tmpResult.map(m => m.TAG)));
                            tag.forEach((f, i) => {
                                objTmp.graph[1].data.push(JSON.parse(JSON.stringify(tmpTag)));
                                objTmp.graph[1].data[i].name = f;
                                objTmp.graph[1].data[i].x = (tmpResult.filter(fx => fx.TAG == f).map(mx => mx.DATADATE));
                                objTmp.graph[1].data[i].y = (tmpResult.filter(fx => fx.TAG == f).map(mx => mx.VALUE));
                            });
                            break;
                        case 3:
                            tmpResult = results.filter(f => f.PHASE == 'Ic' && +f.GRAPH == i);
                            tag = Array.from(new Set(tmpResult.map(m => m.TAG)));
                            tag.forEach((f, i) => {
                                objTmp.graph[2].data.push(JSON.parse(JSON.stringify(tmpTag)));
                                objTmp.graph[2].data[i].name = f;
                                objTmp.graph[2].data[i].x = (tmpResult.filter(fx => fx.TAG == f).map(mx => mx.DATADATE));
                                objTmp.graph[2].data[i].y = (tmpResult.filter(fx => fx.TAG == f).map(mx => mx.VALUE));
                            });
                            break;
                        default:
                            break;
                    }
                }
            }
            if (i == 5 || i == 6) {
                tmpResult = results.filter(f => +f.GRAPH == i);
                tag = Array.from(new Set(tmpResult.map(m => m.PHASE)));
                tag.forEach((f, i) => {
                    objTmp.graph[0].data.push(JSON.parse(JSON.stringify(tmpTag)));
                    objTmp.graph[0].data[i].name = f;
                    objTmp.graph[0].data[i].x = (tmpResult.filter(fx => fx.PHASE == f).map(mx => mx.DATADATE));
                    objTmp.graph[0].data[i].y = (tmpResult.filter(fx => fx.PHASE == f).map(mx => mx.VALUE));
                });
            }
            this.objResult.push(JSON.parse(JSON.stringify(objTmp)));
        }
        ;
        // console.log(this.objResult);
    }
    ///////////////////////////////////////////////////////////////////////
    getFreqHigh() {
        return this.objFreqHigh;
    }
    getFreqLow() {
        return this.objFreqLow;
    }
    getResult() {
        return this.objResult;
    }
    //
    addHFreqAlarm(checkFlg, desi, graph, dataDate) {
        switch (checkFlg) {
            case "2":
                graph[1].y.push(desi);
                graph[0].text.push(dataDate + '<br>FM : Eccentric Air Gap');
                graph[2].y.push(null);
                graph[2].text.push(null);
                break;
            case "3":
                graph[2].y.push(desi);
                graph[0].text.push(dataDate + '<br>FM : Stator Short Turn');
                graph[1].y.push(null);
                graph[1].text.push(null);
                break;
            default:
                graph[1].y.push(null);
                graph[0].text.push(null);
                graph[2].y.push(null);
                // graph[2].text.push(null);
                break;
        }
    }
    addLFreqAlarm(checkFlg, desi, graph, dataDate) {
        switch (checkFlg) {
            case "1":
                graph[1].y.push(desi);
                graph[0].text.push(dataDate + '<br>FM : Rotor Bar Crack');
                graph[2].y.push(null);
                graph[2].text.push(null);
                break;
            case "4":
                graph[2].y.push(desi);
                graph[0].text.push(dataDate + '<br>FM : Stator Short Turn (ISO)');
                graph[1].y.push(null);
                graph[1].text.push(null);
                break;
            default:
                graph[1].y.push(null);
                graph[0].text.push(null);
                graph[2].y.push(null);
                // graph[2].text.push(null);
                break;
        }
    }
}
//# sourceMappingURL=mca-plotly.js.map