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
    
   
    if ( res.message==="EmailId is invalid") { 
      //  console.log(res.message);
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
}
