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
  textingWith: UserComponent;

  observedUser!: UserComponent;
  observedUserChange: Subject<UserComponent> = new Subject<UserComponent>();

  public usersList: UserComponent[] = [
    {id: 0, login: "123", password: "123", name: "Krzysztof Nowak", photo: "assets/images/KrzysztofNowak.png", profileDescription: "Krzychu z polski", profileUrl: "link", usersPosts: [], usersLikedPosts: [], userFollowers: [], userFollowing: [], usersMessages: []
    },
    {id: 1, login: "1234", password: "123", name: "Martin Schulz", photo: "assets/images/MartinSchulz.jpg", profileDescription: "Krzychu z polski", profileUrl: "link", usersPosts: [], usersLikedPosts: [], userFollowers: [], userFollowing: [], usersMessages: []
    },
    {id: 2, login: "12345", password: "123", name: "Sofia Esposito", photo: "zdj", profileDescription: "Krzychu z polski", profileUrl: "link", usersPosts: [], usersLikedPosts: [], userFollowers: [], userFollowing: [], usersMessages: []
    },
    {id: 3, login: "123456", password: "123", name: "Oliver Smith", photo: "zdj", profileDescription: "Krzychu z polski", profileUrl: "link", usersPosts: [], usersLikedPosts: [], userFollowers: [], userFollowing: [], usersMessages: []
    },
    {id: 4, login: "123457", password: "123", name: "Ava Miller", photo: "zdj", profileDescription: "Krzychu z polski", profileUrl: "link", usersPosts: [], usersLikedPosts: [], userFollowers: [], userFollowing: [], usersMessages: []
    },
    {id: 5, login: "1234578", password: "123", name: "Olga Petrova", photo: "zdj", profileDescription: "Krzychu z polski", profileUrl: "link", usersPosts: [], usersLikedPosts: [], userFollowers: [], userFollowing: [], usersMessages: []
    },
  ];

  constructor(private router: Router) {
    

    this.usersList = [
      {id: 0, login: "123", password: "123", name: "Krzysztof Nowak", photo: "assets/images/KrzysztofNowak.png", profileDescription: "Krzychu z polski", profileUrl: "link", usersPosts: [
        new PostComponent("Big lonely tree", '/assets/images/1zdj.jpg', this.usersList[0], 1)
      ], usersLikedPosts: [], userFollowers: [], userFollowing: [], usersMessages: [
          {author: this.usersList[0], receiver: this.usersList[1], sendTime: new Date(), content: "test message from Chris"}]
      },
      {id: 1, login: "1234", password: "123", name: "Martin Schulz", photo: "assets/images/MartinSchulz.jpg", profileDescription: "Krzychu z polski", profileUrl: "link", usersPosts: [
        new PostComponent("Wide and broad desertsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
         '/assets/images/4zdj.jpg', this.usersList[1], 2)], usersLikedPosts: [], userFollowers: [], userFollowing: [], usersMessages: []
      },
      {id: 2, login: "12345", password: "123", name: "Sofia Esposito", photo: "assets/images/SofiaEsposito.jpg", profileDescription: "Krzychu z polski", profileUrl: "link", usersPosts: [], usersLikedPosts: [], userFollowers: [], userFollowing: [], usersMessages: []},
      {id: 3, login: "123456", password: "123", name: "Oliver Smith", photo: "assets/images/OliverSmith.jpg", profileDescription: "Krzychu z polski", profileUrl: "link", usersPosts: [], usersLikedPosts: [], userFollowers: [], userFollowing: [], usersMessages: []},
      {id: 4, login: "1234567", password: "123", name: "Ava Miller", photo: "assets/images/AvaMiler.jpg", profileDescription: "Krzychu z polski", profileUrl: "link", usersPosts: [], usersLikedPosts: [], userFollowers: [], userFollowing: [], usersMessages: []},
      {id: 5, login: "12345678", password: "123", name: "Olga Petrova", photo: "assets/images/OlgaPetrova.jpg", profileDescription: "Krzychu z polski", profileUrl: "link", usersPosts: [], usersLikedPosts: [], userFollowers: [], userFollowing: [], usersMessages: []}
    
    ];  
      
    this.textingWith = this.usersList[3];
    this.observedUser = this.usersList[1];
    this.loggedUser = this.usersList[0];
  }

  public addPostToUsersPosts(){
    let index = this.usersList.indexOf(this.loggedUser);
    console.log("logged in user's index " + index);

  }

  public observeNewUser(userID: number){
    for (let user of this.usersList){
      if (user.id == userID){
        this.observedUser = user;
      }
    }
    this.observedUserChange.next(this.observedUser);
  }

  // public alignPostDisplay(){
  //   for (let post of this.postService.postsList){
  //     post.showComments = false;
  //   }
  // }

  public changeUser(newLoggedUser: UserComponent){
    this.loggedUser = newLoggedUser;
    this.loggedUserChange.next(this.loggedUser)
  }

  public goToUserProfile(){
    if (this.router.url === '/test-user-profile'){
      this.router.navigateByUrl('/logged-view', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/test-user-profile']);
    })
    }
    else {
      this.router.navigate(['/test-user-profile']);
    }
  }

  public getUserByID(userID: number): void{
    for (let user of this.usersList){
      if (user.id == userID){
        console.log(user);
      }
    }
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
