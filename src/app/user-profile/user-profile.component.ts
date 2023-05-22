import {Component, OnInit} from '@angular/core';
import {UserserviceService} from "../userservice.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any = {
    "id": 4,
    "firstname": "Rohit",
    "lastname": "Pogaku",
    "email": "rohitpogaku@gmail.com",
    "password": "$2a$10$73XIlOKY3Ri5zqi4pGi6ouYfXvjDdj7m94HiI9BghVBfnvJID1NFm",
    "gender": "Male",
    "role": "Admin",
    "country": "India"
  };

  constructor(public userService: UserserviceService) {
  }

  ngOnInit(): void {
    // this.user = this.userService.user;
  }
}
