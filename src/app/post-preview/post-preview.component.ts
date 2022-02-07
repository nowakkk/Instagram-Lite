import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PostService } from '../post.service';
import { PostComponent } from '../post/post.component';
import { UserService } from '../user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.sass']
})
export class PostPreviewComponent implements OnInit {

  observedPost!: PostComponent;

  constructor(private postService: PostService, private userService: UserService, private dialogRef: MatDialogRef<PostPreviewComponent>) {
    this.observedPost = postService.observedPost;
   }

   public goToUserProfile(user: UserComponent){
     this.userService.observedUser = user;
     this.userService.goToUserProfile();
     console.log(this.userService.observedUser);
     this.dialogRef.close();
   }

  ngOnInit(): void {
    this.postService.observedPostChange.subscribe((newPost) => {this.observedPost = newPost});
  }

}
