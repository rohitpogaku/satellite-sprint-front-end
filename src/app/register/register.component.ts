import { Component } from '@angular/core';
import { SatelliteService } from '../satellite.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
allcountries:any;


constructor(private sat:SatelliteService) { 
}

ngOnInit():void {
this.getCountries();
}

submitForm(registerform:any)
{
  console.log(registerform)

}

getCountries(){
  return this.sat.getCountries().subscribe((c:any)=>
  {
 console.log(c);
 this.allcountries=c;
  })
 }
}
