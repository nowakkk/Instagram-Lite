import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostComponent } from '../post/post.component';
import { UserService } from '../user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.sass']
})
export class WallComponent implements OnInit {

  publishedPosts: PostComponent[] = [];
  tempComment!: string;
  description: string = "Show";

  observedUser: UserComponent;

  constructor(private postService: PostService, private userService: UserService) {
    this.publishedPosts = postService.postsList;
    this.observedUser = userService.observedUser;
   }

  public addLike(postID: number){
    this.postService.addLike(postID);
  }

  public addComment(postID: number){
    this.postService.addComment(postID, this.tempComment);
    this.tempComment = "";
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
