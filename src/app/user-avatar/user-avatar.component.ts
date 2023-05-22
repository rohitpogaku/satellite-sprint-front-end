import {Component, OnInit} from '@angular/core';
import {UserserviceService} from "../userservice.service";

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.css']
})
export class UserAvatarComponent implements OnInit {
  user: any;

  constructor(public userService: UserserviceService) {
  }

  ngOnInit(): void {
    this.user = this.userService.user;
  }


}
