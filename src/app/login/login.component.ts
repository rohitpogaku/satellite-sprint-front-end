import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SatelliteService} from '../satellite.service';
import {Appiresponse} from './message';
import {UserserviceService} from "../userservice.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = '';

  constructor(private service: SatelliteService,
              private userService: UserserviceService,
              private router: Router,
              private messageService: MessageService) {

  }

  ngOnInit(): void {

  }

  submit(loginform: any) {
    // this.user=loginform;
    let email = loginform.email;
    let password = loginform.password;
    // console.log(loginform)
    this.service.getUserInfo(email, password).subscribe((res: any) => {

      console.log(res);

      //  if(email=="loginform.email" && password=="loginform.password"){
      //   alert("Successfull Login");
      //   this.service.getAllSatellites();
      //   this.service.getSatelliteCache();
      //   this.router.navigate(['satellites']);
      //   }
      //   else {
      //   alert("invalid password");
      //  this.router.navigate(['login']);
      // }

      if (res.message === "EmailId is invalid") {
        const message = "Invalid Email";
        this.messageService.add({severity: 'error', summary: message});
        this.router.navigate(['login']);

      } else if (res.message === "you have logged in successfully") {
        const message = "Login Successful";
        this.messageService.add({severity: 'success', summary: message});
        this.userService.user = email;
        setTimeout(() => {
          this.router.navigate(["/home"]);
        }, 1000);

      } else if (res.message === "invalid Password") {
        const message = "Invalid Password";
        this.messageService.add({severity: 'error', summary: message});
        this.router.navigate(['/login']);
      }

    });

  }


//    submitForm(login:any) {
//      if(login.email=="admin@gmail.com" && login.password=="admin"){
//      alert("Successfull Login");
//         //true
//     this.router.navigate(['satellites']);
//      }
//      else {
//     this.router.navigate(['login']);
//    }
//  }
// }
}
