import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {

  observedUser: UserComponent;
  // observedUserChange

  constructor(private userService: UserService) {
    this.observedUser = userService.observedUser;
  }

  ngOnInit(): void {
    this.userService.observedUserChange.subscribe(newUser => this.observedUser = newUser);
  }

  public gettingUserTest(userID: number){
    this.userService.getUserByID(userID);
  }

}
