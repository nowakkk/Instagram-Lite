import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserComponentInterface, UserService } from '../user.service';
import { Router } from '@angular/router';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  usersList: UserComponentInterface[];
  
  loggedUser: UserComponent;

  constructor(public dialog: MatDialog, private userService: UserService, private router: Router) {
    this.usersList = userService.usersList;
    this.loggedUser = userService.loggedUser;
  }  
  
  ngOnInit(): void {
    this.userService.loggedUserChange.subscribe(newLoggedUser => this.loggedUser = newLoggedUser);
  }

  goToMainPage(){
    this.router.navigate(['/logged-view']);
  }

  goToConversations(){
    this.router.navigate(['/conversations']);
  }

  // addNewPost(){
  //   this.dialog.open(AddPostComponent);
  // }

  goToProfile(userID: number){
    this.userService.goToUserProfile();
  }

  changeUser(userID: number, username: UserComponent){
    this.userService.loggedUser = username;
    // this.userService.changeUser(userID, username);
  }

  logOut(){
    this.router.navigate(['/logging-view']);
  }

}
