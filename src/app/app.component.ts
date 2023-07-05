import {Component, OnInit} from '@angular/core';
import {UserserviceService} from "./userservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SatelliteSpring';

  constructor(private userService: UserserviceService) {
  }

  ngOnInit(): void {
    this.userService.userInit();
  }
}
