import {Component, OnInit} from '@angular/core';
import {CommunityService} from "../community.service";

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  posts: any;

  constructor(private communityService: CommunityService) {
  }

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts() {
    return this.communityService
      .getAllPosts()
      .subscribe((e: any) => {
        this.posts = e;
      })
  }
}
