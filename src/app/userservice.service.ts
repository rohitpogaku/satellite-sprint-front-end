import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {User} from './user/user';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  // private commandSource = new Subject<string>();
  // command$ = this.commandSource.asObservable();
  //
  // sendCommand(command: string) {
  //   this.commandSource.next(command);
  // }

  get user(): any {
    return this._user;
  }

  set user(email: string) {
    if (email) {
      this.getUserByEmail(email).subscribe((u: any) => {
        this._user = u;
        this.isLoggedIn = true;
        console.log(this.user);
      });
    } else {
      this._user = undefined;
      this.isLoggedIn = false;
    }
  }

  isLoggedIn: boolean = false;
  private _user: any;


  constructor(private httpclient: HttpClient) {
  }


  getUserInfo() {
    return this.httpclient.get("/api/v1/register/all");
  }

  addUser(data: any) {
    return this.httpclient.post('/api/v1/register/save', data);
  }

  getUserByEmail(email: string) {
    return this.httpclient.get(`/api/v1/register/userDetail/${email}`);
  }

  getUserById(id: number): Observable<User> {
    return this.httpclient.get<User>(`/api/v1/register/${id}`);
  }

  updateUser(id: any) {
    return this.httpclient.put("/api/v1/register/update/", id);
  }

  deleteUser(registerId: any) {
    return this.httpclient.delete(`/api/v1/register/${registerId}`);
  }

  //Country API linking
  getCountries() {
    return this.httpclient.get("https://restcountries.com/v2/all");
  }
}
