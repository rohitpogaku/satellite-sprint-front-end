import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommunityService} from "../community.service";
import {NgForm} from "@angular/forms";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute,
              private communityService: CommunityService,
              private router: Router,
              private messageService: MessageService) {
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
      this.messageService.add({severity: 'info', summary: 'Post deleted successfully'});
      setTimeout(() => {
        this.router.navigateByUrl("/community");
      }, 1200);
    })
  }

  comment(commentForm: NgForm) {
    commentForm.value.postId = this.post.id;
    this.communityService.postComment(commentForm.value).subscribe((e: any) => {
      this.ngOnInit();
      commentForm.resetForm();
      this.messageService.add({severity: 'success', summary: 'Successfully commented!'})
      window.scrollTo({top: 0, behavior: 'smooth'});
    })

  }

}
