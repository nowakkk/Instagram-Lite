import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedUser: UserComponent;
  loggedUserChange: Subject<UserComponent> = new Subject<UserComponent>();

  observedUser!: UserComponent;
  observedUserChange: Subject<UserComponent> = new Subject<UserComponent>();

  public usersList: UserComponent[] = [
    {id: 0, login: "123", password: "123", name: "Krzysztof Nowak22", photo: "zdj", profileUrl: "link", usersPosts: [], 
      userFollowers: [], userFollowing: []
    },
    {id: 1, login: "1234", password: "123", name: "Martin Schulz", photo: "zdj", profileUrl: "link", usersPosts: [],
      userFollowers: [], userFollowing: []},
  ];

  constructor(private router: Router) {

    this.usersList = [
      {id: 0, login: "123", password: "123", name: "Krzysztof Nowak", photo: "zdj", profileUrl: "link", usersPosts: [
        new PostComponent("ja nad morzem", '/assets/images/1zdj.jpg', this.usersList[0], 1)
      ], 
        userFollowers: [], userFollowing: []
      },
      {id: 1, login: "1234", password: "123", name: "Martin Schulz", photo: "zdj", profileUrl: "link", usersPosts: [
        new PostComponent("martin to niemiec", '/assets/images/4zdj.jpg', this.usersList[1], 2)
    ],
      userFollowers: [], userFollowing: []
    }]    
    
    this.observedUser = this.usersList[0];
    this.loggedUser = this.usersList[1];
  }

  public addPostToUsersPosts(){
    let index = this.usersList.indexOf(this.loggedUser);
    console.log("chuje muje rozjebalem: " + index);

  }

  public observeNewUser(userID: number){
    for (let user of this.usersList){
      if (user.id == userID){
        this.observedUser = user;
      }
    }
    this.observedUserChange.next(this.observedUser);
  }

  public changeUser(newLoggedUser: UserComponent){
    this.loggedUser = newLoggedUser;
    this.loggedUserChange.next(this.loggedUser)

  }

  public goToUserProfile(){
    this.router.navigate(['/test-user-profile']);
  }

  public getUserByID(userID: number): void{
    // let searchedUser: any;
    for (let user of this.usersList){
      if (user.id == userID){
        console.log(user);
        // searchedUser = user;
      }
    }
    // console.log("szukany użytkownik to obiekt : " + searchedUser);
  }
}

export interface UserComponentInterface {
  id: number;
  login: string;
  password: string; 
  name: string;
  photo: any;
  profileUrl: string;
}
