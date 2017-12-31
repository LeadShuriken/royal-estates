import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import _ from "lodash";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";

/*
  Generated class for the RoyalEstatesApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RoyalEstatesApiProvider {
  private baseUrl = "https://royal-estates.firebaseio.com/";

  estate: any = {};
  estates = [];
  savedEstates = [];

  constructor(public http: HttpClient) {
    console.log("Hello RoyalEstatesApiProvider Provider");
  }

  getLocations(): Observable<any> {
    return this.http
      .get<any>(`${this.baseUrl}/locations.json`)
      .do(data => console.log("All: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getLocationData(locationId): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/locations-data/${locationId}.json`)
      .map(response => {
        this.estates = response;
        return response;
      });
  }

  isInSavedEstates(estate: any) {
    return _.includes(this.savedEstates, estate);
  }

  addToSavedEstates(estate: any) {
    this.savedEstates.push(estate);
  }

  removeFromSavedEstates(estate: any) {
    _.remove(this.savedEstates, estate);
  }

  getCurrentEstate() {
    return this.estate;
  }

  setCurrentEstate(estate: any) {
    this.estate = estate;
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err);
    return Observable.throw(err);
  }
}
