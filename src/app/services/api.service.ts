import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api = 'http://localhost:3000/api';
  constructor(private httpClient: HttpClient) { }

  getFL(): Observable<any> {
    return this.httpClient
      .get(`${this.api}/mca/fl`);
  }
  getFH(): Observable<any> {
    return this.httpClient
      .get(`${this.api}/mca/fh`);
  }
  getResult(): Observable<any> {
    return this.httpClient
      .get(`${this.api}/mca/result`);
  }
  getInformation(): Observable<any> {
    return this.httpClient
      .get(`${this.api}/mca/information`);
  }
  getStatus(): Observable<any> {
    return this.httpClient
    .get(`${this.api}/mca/status`);
  }
  getAlarm(): Observable<any> {
    return this.httpClient
      .get(`${this.api}/mca/alarm`);
  }
  getGraphPosition(): Observable<any> {
    return this.httpClient
      .get(`${this.api}/mca/graphPosition`);
  }

  getPicture() {
    // return this.httpClient
    //   .get(`${this.api}/mca/pic`, { responseType: 'blob' });
    return `${this.api}/mca/pic`;
  }
}
