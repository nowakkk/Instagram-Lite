import { Component, OnInit } from '@angular/core';
import { UserComponentInterface, UserService } from '../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  usersList: UserComponentInterface[];

  newUsername!: string;
  newUserLogin!: string;
  newUserPassword!: string;
  tempID!: number;

  constructor(private userService: UserService, private _snackBar: MatSnackBar, private router: Router) {
    this.usersList = userService.usersList;
   }

  ngOnInit(): void {
  }

  addNewUser(userName: string, userLogin: string, userPassword: string, ){
    let isOkay = true;
    for (let user of this.usersList){
      if (user.login == userLogin){
        isOkay = false;
        this._snackBar.open("This login is already taken, choose another one !", "OK");
        break;
      }
    }

    if ((userName == "") || (userLogin == "") || (userPassword == "")){
      this._snackBar.open("Invalid data has been inserted. Please try again !", "OK");
      isOkay = false;
    }

    if (isOkay == true){
      this._snackBar.open("You have been added as a platform user ! Your name is : " + userName, "OK");
      this.tempID = this.userService.usersList.length;
      this.userService.usersList.unshift(new UserComponent(this.tempID, userLogin, userPassword, userName));
      this.userService.loggedUser = this.userService.usersList[0];
      this.router.navigate(['/logged-view']);
    }
  }

  backToLogin(){
    this.router.navigate(['/logging-view']);

  }
}
