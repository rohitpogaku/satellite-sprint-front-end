import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SatelliteService } from '../satellite.service';
import { Appiresponse } from './message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  errorMessage: string = '';
  constructor(private service:SatelliteService, private router: Router ){

  }
  ngOnInit(): void {
  
  }
  submit(loginform:any){
    // this.user=loginform;
 var email =loginform.email;
 var password = loginform.password;
  // console.log(loginform)
   this.service.getUserInfo(email, password).subscribe((res:any) => {
    
     console.log(res); 
     
    if(email=="loginform.email" && password=="loginform.password"){
     alert("Successfull Login");
     this.service.getAllSatellites();
     this.service.getSatelliteCache();
     this.router.navigate(['satellites']);
     }
     else {
     alert("invalid password");
    this.router.navigate(['login']);
   } 
   
    if( res.message==="EmailId is invalid") { 
         console.log(res.message);
        alert("invalid password");
        this.router.navigate(['login']);
      
     }
     else if(res.message==="you have logged in sucessfully")
     {
        alert("login success");
        this.router.navigate(["/home"]);
     }
     else if(res.message === "invalid Password")
     {
       alert("invalid password");
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
