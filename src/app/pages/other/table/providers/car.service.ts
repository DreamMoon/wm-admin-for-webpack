/**
 * Created by DreamBoy on 2017/2/10.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from './car';

@Injectable()
export class CarService {

  constructor(private http: Http) {}

  getCarsSmall() {
    return this.http.get('/showcase/resources/data/cars-small.json')
      .toPromise()
      .then(res => <Car[]> res.json().data)
      .then(data => { return data; });
  }
}
