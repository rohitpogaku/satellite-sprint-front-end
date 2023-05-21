import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})
export class UseraddComponent implements OnInit {
  allcountries:any;
constructor(private Service:UserserviceService,private router:Router){
}
data: any;
  user:any;
  form = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required])
  })
  ngOnInit(): void {
    this.getCountries();
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.Service.addUser(this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['user']);
  }

  getCountries(){
    return this.Service.getCountries().subscribe((c:any)=>
    {
   console.log(c);
   this.allcountries=c;
    })
}

}
