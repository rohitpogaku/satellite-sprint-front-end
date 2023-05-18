import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommunityService} from '../community.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  postToBeEdited: any;

  constructor(private router: Router, private route: ActivatedRoute, private communityService: CommunityService) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    this.getPost(id);
  }

  getPost(id: number) {
    this.communityService.getPostById(id).subscribe((e: any) => {
      this.postToBeEdited = e;
      console.log(this.postToBeEdited)
      console.log(e)
    })
  }

  submit(postForm: any) {
    this.communityService.updatePost(this.postToBeEdited).subscribe((e: any) => {
      console.log(e);
    });
  }
}
