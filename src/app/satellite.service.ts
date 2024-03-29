import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Satellite from "./shared/satellite";
import {Observable} from "rxjs";
import {ContactusComponent} from './contactus/contactus.component';

@Injectable({
  providedIn: 'root'
})
export class SatelliteService {
  satelliteCacheData: Satellite[] = [];
  personLogin: boolean;

  constructor(private http: HttpClient) {
    this.personLogin = false;
  }

  setPersonLogin() {
    this.personLogin = true;
  }

  getPersonLogin() {
    return this.personLogin;
  }

  getAllSatellites(): Observable<Satellite[]> {
    return this.http.get<Satellite[]>("/api/v1/satellites");
  }

  getSatelliteById(id: number) {
    return this.http.get(`/api/v1/satellites/${id}`);
  }

  uploadSatellite(satellite: any) {
    return this.http.post("/api/v1/satellites", satellite);
  }

  uploadImage(image: FormData) {
    return this.http.post("/api/v1/images", image);
  }

  updateImage(image: FormData) {
    return this.http.put("/api/v1/images", image);
  }

  updateSatellite(satellite: any) {
    return this.http.put("/api/v1/satellites", satellite);
  }

  deleteSatellite(id: number) {
    return this.http.delete(`/api/v1/satellites/${id}`);
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

  getImage(id: any) {
    return this.http.get(`api/v1/images/${id}`, {responseType: 'blob'});
  }

  // Helper Methods
  saveSatelliteCache(data: Satellite[]) {
    this.satelliteCacheData = data;
  }


  getSatelliteCache(): Satellite[] {
    return this.satelliteCacheData;
  }

  addMessage(data:any) {
    return this.http.post("/api/v1/message", data);
  }

  getAllMessages() {
    return this.http.get("/api/v1/message");
  }

  addUserInfo(user: any) {
    return this.http.post("/api/v1/register/save", user);
  }

  getUserInfo(email: any, password: any) {
    return this.http.get(`/api/v1/register/authenticate/${email}/${password}`);
  }

  //Country API linking 
  getCountries(){
    return this.http.get("https://restcountries.com/v2/all");
  }

}
