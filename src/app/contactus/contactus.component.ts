import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SatelliteService } from '../satellite.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  data:any;

  constructor(private route:Router, private satelliteService: SatelliteService) {
   }

  ngOnInit():void {
  }

  submitForm(){
    this.data;
    console.log(this.data)
    alert("Message sent successfully");

    this.satelliteService.addMessage(this.data).subscribe(data => {
      console.log(data)
    })
    this.route.navigate(['home']);
  }
}
