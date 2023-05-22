import {Component, OnInit} from '@angular/core';
import {UserserviceService} from "../userservice.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any;

  constructor(public userService: UserserviceService) {
  }

  ngOnInit(): void {
    this.user = this.userService.user;
  }
}
