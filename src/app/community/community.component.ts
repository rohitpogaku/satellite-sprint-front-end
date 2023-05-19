import {Component, OnInit} from '@angular/core';
import {CommunityService} from "../community.service";

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  postsOriginal: any;
  posts: any;
  isSortedByLatest: any;

  constructor(private communityService: CommunityService) {
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    return this.communityService
      .getAllPosts()
      .subscribe((e: any) => {
        this.postsOriginal = e;
        this.posts = this.postsOriginal;

        if (sessionStorage.getItem("isSortedByLatest")) {
          this.isSortedByLatest = sessionStorage.getItem("isSortedByLatest") === "true";
          if (this.isSortedByLatest) {
            this.sortByLatest();
          } else {
            this.sortByOldest();
          }
        } else {
          this.isSortedByLatest = true;
          sessionStorage.setItem("isSortedByLatest", "true");
        }
      })
  }

  sortByLatest() {
    this.posts = this.posts.sort((a: any, b: any) => {
      const date1: any = new Date(a.postDate);
      const date2: any = new Date(b.postDate);

      return date2 - date1;
    });

    this.isSortedByLatest = true;
    sessionStorage.setItem("isSortedByLatest", "true");
  }

  sortByOldest() {
    this.posts = this.posts.sort((a: any, b: any) => {
      const date1: any = new Date(a.postDate);
      const date2: any = new Date(b.postDate);

      return date1 - date2;
    });

    this.isSortedByLatest = false;
    sessionStorage.setItem("isSortedByLatest", "false");
  }
}
