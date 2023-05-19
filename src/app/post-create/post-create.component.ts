import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommunityService} from "../community.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  constructor(private router: Router, private route: ActivatedRoute, private communityService: CommunityService) {
  }

  submit(postForm: any) {
    postForm.author = "Mark Garcia";
    this.communityService.uploadPost(postForm).subscribe((e) => {
      console.log(e);
    });
  }
}
