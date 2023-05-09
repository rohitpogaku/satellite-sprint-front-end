import { Component } from '@angular/core';
import { SatelliteService } from '../satellite.service';
import { HttpClient } from '@angular/common/http';

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

getCountries(){
  return this.sat.getCountries().subscribe((c:any)=>
  {
 console.log(c);
 this.allcountries=c;
  })
 }
}
