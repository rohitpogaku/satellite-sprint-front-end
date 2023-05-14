import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Satellite from "./shared/satellite";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SatelliteService {
  satelliteCacheData: Satellite[] = [];

  constructor(private http: HttpClient) {
  }

  getAllSatellites(): Observable<Satellite[]> {
    return this.http.get<Satellite[]>("/api/v1/satellites");
  }

  getSatelliteById(id: number) {
    return this.http.get(`/api/v1/satellites/${id}`);
  }

  getAllOrbits() {
    return this.http.get("api/v1/orbits");
  }

  getAllApplications() {
    return this.http.get("api/v1/applications");
  }

  getAllManufacturers() {
    return this.http.get("api/v1/manufacturer");
  }

  getAllAgencies() {
    return this.http.get("api/v1/agencies");
  }

  // Helper Methods
  saveSatelliteCache(data: Satellite[]) {
    this.satelliteCacheData = data;
  }


  getSatelliteCache(): Satellite[] {
    return this.satelliteCacheData;
  }

}
