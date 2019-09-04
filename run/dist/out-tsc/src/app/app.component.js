import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as csv from 'csvtojson';
import { IedPlotly } from './class/ied-plotly';
import { formatDate } from "@angular/common";
let AppComponent = class AppComponent {
    constructor(api, ps) {
        this.api = api;
        this.ps = ps;
        this.timer = 0.5;
        this.ap = this.ps.getInstanceByDivId("AP");
        this.re = this.ps.getInstanceByDivId("RE");
    }
    ngOnInit() {
        this.api.get('assets/11.csv', { responseType: 'text' }).subscribe(res => {
            csv({
                noheader: false,
            })
                .fromString(res)
                .then((csvRow) => {
                // res.send(csvRow)
                // console.log(csvRow);
                this.objPlot = new IedPlotly("PPP", csvRow).plotTag();
                interval(200).pipe(
                // map((x) => {
                //   console.log(x);
                //   return x;
                // }),
                tap(x => {
                    var r = new Date(this.objPlot[0].layout.xaxis.range[1]);
                    r.setHours(r.getHours() + 8);
                    if (new Date('2018-12-17 13:47:00') < r) {
                        return;
                    }
                    try {
                        // const ap = this.ps.getInstanceByDivId("AP");
                        // const re = this.ps.getInstanceByDivId("RE");
                        this.objPlot[0].layout.xaxis.range[1] = formatDate(r, 'yyyy-MM-dd HH:mm:ss', 'en-US');
                        this.objPlot[1].layout.xaxis.range[1] = formatDate(r, 'yyyy-MM-dd HH:mm:ss', 'en-US');
                        // this.ps.update(ap, this.objPlot[0].data, this.objPlot[0].layout);
                        // this.ps.update(re, this.objPlot[1].data, this.objPlot[1].layout);
                        this.ps.update(this.ap, this.objPlot[0].data, this.objPlot[0].layout);
                        this.ps.update(this.re, this.objPlot[1].data, this.objPlot[1].layout);
                    }
                    catch (error) {
                        console.log(error);
                        this.ap = this.ps.getInstanceByDivId("AP");
                        this.re = this.ps.getInstanceByDivId("RE");
                    }
                })).subscribe((sec) => {
                    // var r = new Date(this.objPlot[0].layout.xaxis.range[1]);
                    // r.setHours(r.getHours() + 6);
                    // if (new Date('2018-12-17 13:47:00') < r) {
                    //   return;
                    // }
                    // const ap = this.ps.getInstanceByDivId("AP");
                    // const re = this.ps.getInstanceByDivId("RE");
                    // this.objPlot[0].layout.xaxis.range[1] = formatDate(r, 'yyyy-MM-dd HH:mm:ss', 'en-US')
                    // this.objPlot[1].layout.xaxis.range[1] = formatDate(r, 'yyyy-MM-dd HH:mm:ss', 'en-US')
                    // this.ps.update(ap, this.objPlot[0].data, this.objPlot[0].layout);
                    // this.ps.update(re, this.objPlot[1].data, this.objPlot[1].layout);
                });
            });
        });
    }
    btnUpdate() {
        // const ap = this.ps.getInstanceByDivId("AP");
        // this.objPlot[0].layout.xaxis.range[1] = "2018-12-12 00:00:00";
        // console.log(formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en-US'))
        // this.ps.update(ap, this.objPlot[0].data, this.objPlot[0].layout);
    }
    refresh() {
        console.log('fuck !');
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map