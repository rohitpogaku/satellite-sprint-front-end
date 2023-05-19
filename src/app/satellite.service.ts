import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Satellite from "./shared/satellite";
import {Observable} from "rxjs";
import { ContactusComponent } from './contactus/contactus.component';

@Injectable({
  providedIn: 'root'
})
export class SatelliteService {
  satelliteCacheData: Satellite[] = [];
  personLogin:boolean;
  constructor(private http: HttpClient) {
    this.personLogin=false;
  }
  setPersonLogin(){
    this.personLogin = true;
  }
  getPersonLogin(){
   return this.personLogin;
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

  sendMessage(message:ContactusComponent){
    return this.http.post("/api/v1/message",message);
  }

  getAllMessages(){
    return this.http.get("/api/v1/message");
  }

  addUserInfo(user: any){
    return this.http.post("/api/v1/register/save",user);
  }
  
  getUserInfo(email:any,password:any){
    return this.http.get(`/api/v1/register/authenticate/${email}/${password}`);
  }

}
