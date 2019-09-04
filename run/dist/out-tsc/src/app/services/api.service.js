import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ApiService = class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.api = 'http://localhost:3000/api';
    }
    getFL() {
        return this.httpClient
            .get(`${this.api}/mca/fl`);
    }
    getFH() {
        return this.httpClient
            .get(`${this.api}/mca/fh`);
    }
    getResult() {
        return this.httpClient
            .get(`${this.api}/mca/result`);
    }
    getInformation() {
        return this.httpClient
            .get(`${this.api}/mca/information`);
    }
    getStatus() {
        return this.httpClient
            .get(`${this.api}/mca/status`);
    }
    getAlarm() {
        return this.httpClient
            .get(`${this.api}/mca/alarm`);
    }
    getGraphPosition() {
        return this.httpClient
            .get(`${this.api}/mca/graphPosition`);
    }
    getPicture() {
        // return this.httpClient
        //   .get(`${this.api}/mca/pic`, { responseType: 'blob' });
        return `${this.api}/mca/pic`;
    }
};
ApiService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map