import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SatelliteService {

  constructor(private http: HttpClient) {
  }

  getAllSatellites() {
    return this.http.get("/api/v1/satellites");
  }

  getSatelliteById(id: number) {
    return this.http.get(`/api/v1/satellites/${id}`);
  }

  getCountries(){
    return this.http.get("https://restcountries.com/v2/all");
  }
}
