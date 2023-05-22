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
    this.data=[];
   }

  ngOnInit():void {
  }

  saveMessage(){
    return this.satelliteService.addMessage(this.data).subscribe((m:any)=>
    {
   console.log(m);
    })
  }
  
   submit(r:any) {
    console.log(this.data);
    this.saveMessage();
    alert("Message sent successfully");
    this.route.navigate(['home']);
  }
 
}
