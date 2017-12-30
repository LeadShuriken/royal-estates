import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
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

  constructor(public http: HttpClient) {
    console.log("Hello RoyalEstatesApiProvider Provider");
  }

  getLocations(): Observable<any> {
    return this.http
      .get<any>(`${this.baseUrl}/locations.json`)
      .do(data => console.log("All: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getLocation(locationId): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/locations-data/${estateId}.json`)
      .map(response => {
        this.currentTourney = response;
        return this.currentTourney;
      });
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err);
    return Observable.throw(err);
  }
}
