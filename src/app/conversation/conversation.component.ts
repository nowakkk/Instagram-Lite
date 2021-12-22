import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.sass']
})
export class ConversationComponent implements OnInit {

  userHasConversations: boolean = true;
  usersList: UserComponent[];

  constructor(private userService: UserService) {
    this.usersList = userService.usersList;
   }

  ngOnInit(): void {
  }

}
