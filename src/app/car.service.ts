import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './models/car.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CarService {

  readonly ROOT_URL = "http://eacodingtest.digital.energyaustralia.com.au/api/v1/cars";

  constructor(private http: HttpClient) { }

  getCars():Observable<Car[]> {
    return this.http.get<Car[]>(this.ROOT_URL);
  }
}
