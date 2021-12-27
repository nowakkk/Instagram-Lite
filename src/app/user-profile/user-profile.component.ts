import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { UserService } from '../user.service';
import { UserComponent } from '../user/user.component';
import { MatDialog } from '@angular/material/dialog';
import { PostPreviewComponent } from '../post-preview/post-preview.component';
import { PostService } from '../post.service';
import { Subject } from 'rxjs';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {
  [x: string]: any;

  observedUser!: UserComponent;

  constructor(private userService: UserService, private postService: PostService, private dialog: MatDialog, private router: Router) {
    this.observedUser = userService.observedUser;
  }

  ngOnInit(): void {
    this.userService.observedUserChange.subscribe((newUser) => {this.observedUser = newUser});
  }

  public gettingUserTest(userID: number){
    this.userService.getUserByID(userID);
  }

  public previewPost(newPost: PostComponent){
    this.postService.observedPost = newPost;
    this.dialog.open(PostPreviewComponent);
    console.log("obserwowany w serwisie : " + this.postService.observedPost.author.name);
  }

}
