import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommunityService} from "../community.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute, private communityService: CommunityService) {
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    setTimeout(() => {
      this.getPost(id);
    }, 500);
  }

  getPost(id: number) {
    this.communityService.getPostById(id).subscribe((e: any) => {
      this.post = e;
    })
  }
}
