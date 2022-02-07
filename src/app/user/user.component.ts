import { Component, Inject, OnInit } from '@angular/core';
import { Message } from '../conversation/conversation.component';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {

  id!: number;
  login!: string;
  password!: string;
  name!: string;
  photo: any;
  profileDescription: string;
  profileUrl!: string;
  usersPosts: PostComponent[];
  usersLikedPosts: PostComponent[];
  userFollowers: UserComponent[];     //list with users who follows this user
  userFollowing: UserComponent[];     //list with users followed by this user himself/herself
  usersMessages: Message[]; 

  constructor(
  @Inject(Number)newID: number, 
  @Inject(String)newLogin: string, 
  @Inject(String)newPassword: string, 
  @Inject(String)newUsername: string,
  @Inject(Image)newUserPhoto: any,
  @Inject(String)newProfileDescription: string) 
  {
    this.id = newID;
    this.login = newLogin;
    this.password = newPassword;
    this.name = newUsername;
    this.photo = newUserPhoto;
    this.profileDescription = newProfileDescription;
    this.profileUrl = "link";
    this.usersPosts = [];
    this.usersLikedPosts = [];
    this.userFollowers = [];
    this.userFollowing = [];
    this.usersMessages = [];
   }

}


