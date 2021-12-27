import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostComponent } from '../post/post.component';
import { UserService } from '../user.service';
import { UserComponent } from '../user/user.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.sass']
})
export class WallComponent implements OnInit {

  publishedPosts: PostComponent[] = [];
  tempComment: string = "";
  description: string = "Show";
  displayedIcon: string = "favorite";

  observedUser: UserComponent;

  constructor(private postService: PostService, private userService: UserService, private snackBar: MatSnackBar, private router: Router) {
    this.publishedPosts = postService.postsList;
    this.observedUser = userService.observedUser;

    this.alignPostsDisplay();
   }

  public addLike(post: PostComponent){
    this.postService.addLike(post.id);
  }

  public isPostLikedByLoggedUser(checkPost: PostComponent){
    if (this.userService.loggedUser.usersLikedPosts.indexOf(checkPost) !== -1){
      return "favorite";
    }
    else
      return "favorite_border";
  }

  public alignPostsDisplay(){
    for (let post of this.postService.postsList){
      post.showComments = false;
    }
  }

  public messagePostAuthor(post: PostComponent){
    if (post.author == this.userService.loggedUser){
      this.snackBar.open("You cannot message yourself ! ", "OK");
    }
    else {
      this.userService.textingWith = post.author;
      this.router.navigate(['/conversations']);
    }
  }

  public addComment(postID: number){
    if (this.tempComment != ""){
      this.postService.addComment(postID, this.tempComment);
      this.tempComment = "";
    }
    else {
      this.snackBar.open("The comment can't be empty!", "OK");
    }
  }

  public showComments(postID: number){
    this.postService.showComments(postID);
    if (this.description == "Show")this.description = "Hide";
    else if (this.description == "Hide")this.description = "Show";
  }

  public goToUserProfile(userID: number){
    console.log("go to profile of \nid : " + userID);
    this.userService.observeNewUser(userID);
    this.userService.goToUserProfile()
  }

  public addEmotikon(){
    console.log("emotikons test");
  }

  ngOnInit(): void {
    this.userService.observedUserChange.subscribe(newUser => this.observedUser = newUser);

  }

}
