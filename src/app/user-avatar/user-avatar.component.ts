import {Component, OnInit} from '@angular/core';
import {UserserviceService} from "../userservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.css']
})
export class UserAvatarComponent implements OnInit {
  user: any;

  constructor(public userService: UserserviceService, private router: Router) {
  }

  ngOnInit(): void {
    this.user = this.userService.user;
  }

  logout() {
    this.userService.user = "";
    this.router.navigate(['/home']);
  }


}
