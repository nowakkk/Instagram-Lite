import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-logging-view',
  templateUrl: './logging-view.component.html',
  styleUrls: ['./logging-view.component.sass']
})
export class LoggingViewComponent implements OnInit {

  login!: string;
  password!: string;
  username!: string;
  userID!: number;

  usersList: UserComponent[];

  constructor(private readonly router: Router, private userService: UserService, private _snackBar: MatSnackBar) { 
    this.usersList = userService.usersList;
  }

  ngOnInit(): void {
  }

  public loggingIn(){
    let loginSuccess = false;
    console.log("podany login : " + this.login);
    console.log("podane haslo : " + this.password);
    for (let user of this.usersList)
    {
      if ((this.login == user.login) && (this.password == user.password))
      {
        this.username = user.name;
        this.userID = user.id;
        this.router.navigate(['/logged-view']);
        this._snackBar.open("login successful, logged in as : " + this.username, "OK");
        this.userService.loggedUser = user;
        loginSuccess = true;
      }
    }
    if (loginSuccess == false) this._snackBar.open("invalid combination of a login and a password", "OK");
  }

  public goToRegister(){
    this.router.navigate(['/register-view'])
  }


}
