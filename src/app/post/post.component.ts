import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommunityService} from "../community.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute, private communityService: CommunityService, private router: Router) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    setTimeout(() => {
      this.getPost(id);
    }, 500);
  }

  getPost(id: number) {
    this.communityService.getPostById(id).subscribe((e: any) => {
      this.post = e;
    })
  }

  editPost(id: any) {
    this.router.navigateByUrl(`/posts/${id}/edit`)
  }

  deletePost(id: any) {
    this.communityService.deletePost(id).subscribe((e: any) => {
      console.log(e);
    })
  }

  comment(commentForm: any) {
    commentForm.postId = this.post.id;
    console.log(commentForm)
  }

}
