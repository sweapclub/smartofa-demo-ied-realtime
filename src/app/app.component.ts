import { Component, OnInit } from '@angular/core';

import { faSync, faChartLine, faCircle, faArrowCircleDown, faArrowCircleUp, faThermometerQuarter } from '@fortawesome/free-solid-svg-icons';

import { ApiService } from './services/api.service';
import { McaPlotly } from './class/mca-plotly';
import { forkJoin, interval } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as csv from 'csvtojson';
import { IedPlotly } from './class/ied-plotly';
import { PlotlyService } from 'angular-plotly.js';
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  timer = 0.5;

  objPlot;
  ap; re;
  constructor(private api: HttpClient, private ps: PlotlyService) {
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
            tap(x => {
              var r = new Date(this.objPlot[0].layout.xaxis.range[1]);
              r.setHours(r.getHours() + 8);

              if (new Date('2018-12-17 13:47:00') < r) {
                return;
              }

              try {

                this.objPlot[0].layout.xaxis.range[1] = formatDate(r, 'yyyy-MM-dd HH:mm:ss', 'en-US');
                this.objPlot[1].layout.xaxis.range[1] = formatDate(r, 'yyyy-MM-dd HH:mm:ss', 'en-US');

                this.ps.update(this.ap, this.objPlot[0].data, this.objPlot[0].layout);
                this.ps.update(this.re, this.objPlot[1].data, this.objPlot[1].layout);
              } catch (error) {

                this.ap = this.ps.getInstanceByDivId("AP");
                this.re = this.ps.getInstanceByDivId("RE");
              }

            }),
          ).subscribe((sec) => {
          });

        })
    })
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
}
