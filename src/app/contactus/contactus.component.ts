import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SatelliteService } from '../satellite.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  message:any;

  constructor(private route:Router, private satelliteService: SatelliteService) {
   this.message=[];
   }
 
  ngOnInit():void {
  }

  saveMessage(){
    return this.satelliteService.sendMessage(this.message).subscribe((m:any)=>
    {
   console.log(m);
    })
  }

  submitForm(sendmessageform:any) {
    alert("Message sent successfully");
    this.saveMessage();
  }
}
