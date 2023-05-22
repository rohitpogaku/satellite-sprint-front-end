import { Component, OnInit } from '@angular/core';
import { SatelliteService } from '../satellite.service';
import { EmailValidator, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  allcountries:any;
  user: any;
  registerform: any;
  constructor(private service:SatelliteService, private router: Router) { }

 
  form = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required])
  })
  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(){
    return this.service.getCountries().subscribe((c:any)=>
    {
   console.log(c);
   this.allcountries=c;
    })
   }

  submitForm(registerform:any){

    
     this.user = registerform
    console.log(this.user)

    
    this.service.addUserInfo(this.user).subscribe(
      (user: any) => {
        console.log(user);
      alert("Successfully Registered");
      this.router.navigate(['/login']);
      },
      (error: any) => {
        console.log(error);
        alert("Email Already Exits. Please try again.");
        
      });
  
   }
  }
