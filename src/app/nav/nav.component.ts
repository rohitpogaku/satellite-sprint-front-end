import {Component, OnInit} from '@angular/core';
import {UserserviceService} from "../userservice.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(public userService: UserserviceService) {
  }

}
