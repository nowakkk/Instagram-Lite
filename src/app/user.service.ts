import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserComponent } from './user/user.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedUser: UserComponent;
  loggedUserChange: Subject<UserComponent> = new Subject<UserComponent>();

  observedUser!: UserComponent;
  observedUserChange: Subject<UserComponent> = new Subject<UserComponent>();

  usersList: UserComponent[] = [
    {id: 0, login: "123", password: "123", name: "Krzysztof Nowak", photo: "zdj", profileUrl: "link", usersPosts: [], 
      userFollowers: [], userFollowing: []
    },
    {id: 1, login: "1234", password: "123", name: "Martin Schulz", photo: "zdj", profileUrl: "link", usersPosts: [],
      userFollowers: [], userFollowing: []},
  ];

  constructor(private router: Router) {
    this.observedUser = this.usersList[0];
    this.loggedUser = this.usersList[0];

    this.usersList = [
      {id: 0, login: "123", password: "123", name: "Krzysztof Nowak", photo: "zdj", profileUrl: "link", usersPosts: [
        {id: 1, author: this.usersList[0], authorID: 0, description: "ja nad morzem", likes: 0, image: '/assets/images/1zdj.jpg', comments: [], showComments: false}], 
        userFollowers: [], userFollowing: []
      },
      {id: 1, login: "1234", password: "123", name: "Martin Schulz", photo: "zdj", profileUrl: "link", usersPosts: [
        {id: 2, author: this.usersList[1], authorID: 1, description: "martina post", likes: 0, image: '/assets/images/4zdj.jpg', comments: [], showComments: false}],
        userFollowers: [], userFollowing: []},
    ];
  }

  public addUsersPost(){
    console.log("dodawanie postu do listy postód usera: " + this.loggedUser);
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

  public getAuthor(){
    return this.loggedUser;
  }

  public getAuthorID(){
    return this.loggedUser.id;
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
