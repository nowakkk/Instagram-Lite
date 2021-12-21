import { Component, Inject, OnInit } from '@angular/core';
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
  profileUrl!: string;
  usersPosts: PostComponent[];
  userFollowers: UserComponent[];     //list with users who follows this user
  userFollowing: UserComponent[];     //list with users followed by this user himself/herself

  constructor(
  @Inject(Number)newID: number, 
  @Inject(String)newLogin: string, 
  @Inject(String)newPassword: string, 
  @Inject(String)newUsername: string) 
  {
    this.id = newID;
    this.login = newLogin;
    this.password = newPassword;
    this.name = newUsername;
    this.photo = "zdj";
    this.profileUrl = "link";
    this.usersPosts = [];
    this.userFollowers = [];
    this.userFollowing = [];
   }

}

