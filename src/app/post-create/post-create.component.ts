import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommunityService} from "../community.service";
import {MessageService} from "primeng/api";
import {UserserviceService} from "../userservice.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  allPosts: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private communityService: CommunityService,
              private userService: UserserviceService,
              private messageService: MessageService) {
  }

  submit(postForm: any) {

    let isPostPresent = false;
    this.allPosts.forEach((p: any) => {
      const thisPost = postForm.title.toLocaleLowerCase();
      const currPost = p.title.toLocaleLowerCase();
      if (thisPost === currPost) {
        isPostPresent = true;
        return;
      }
    })

    if (isPostPresent) {
      this.messageService.add({
        severity: 'error',
        summary: 'Post with the same title already exists'
      });

    } else {

      const user = this.userService.user;
      postForm.author = `${user.firstname} ${user.lastname}`;
      this.communityService.uploadPost(postForm).subscribe((e) => {

        this.messageService.add({severity: 'success', summary: 'Post added successfully!'});

        setTimeout(() => {
          this.router.navigateByUrl("/community");
        }, 1200)
      });
    }

  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.communityService.getAllPosts().subscribe((e: any) => {
      this.allPosts = e;
    });
  }
}
