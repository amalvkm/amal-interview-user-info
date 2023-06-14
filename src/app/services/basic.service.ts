import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StateInfo } from '../model/state-info';
import { CityInfo } from '../model/city-info';

@Injectable({
  providedIn: 'root',
})
export class BasicService {

  stateInfo: StateInfo[] = [];
  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data) => {
      this.stateInfo = data;
      console.log(this.stateInfo)
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/data.json');
  }

  public getStates(): Observable<StateInfo[]> {
    // return this.http.get('http://api.minebrat.com/api/v1/states');
    return this.getJSON();
  }

  public getCities(stateId: string): Observable<CityInfo[]> {
    // return this.http.get(
    //   `http://api.minebrat.com/api/v1/states/cities/${stateId}`
    // );
    return of(this.stateInfo.find(s => s.stateId == stateId)?.city ?? []);
  }
}
