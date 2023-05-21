import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user/user';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  
 
  constructor(private httpclient: HttpClient) { }

  
  getUserInfo(){
    return this.httpclient.get("/api/v1/register/all");
  }
  
  addUser(data:any){
    return this.httpclient.post('/api/v1/register/save',data);
  }

  getUserById(id: number): Observable<User>{
    return this.httpclient.get<User>(`/api/v1/register/${id}`);
  }

  updateUser(id:any){
    return this.httpclient.put("/api/v1/register/update/",id);
  }
  deleteUser(registerId:any){
    return this.httpclient.delete(`/api/v1/register/${registerId}`);
  }

  //Country API linking 
  getCountries(){
    return this.httpclient.get("https://restcountries.com/v2/all");
  }
}