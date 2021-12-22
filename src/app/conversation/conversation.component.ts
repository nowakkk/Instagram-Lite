import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserComponent } from '../user/user.component';

export interface Message {
  author: UserComponent,
  receiver: UserComponent,
  sendTime: Date,
  content: string,
}

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.sass']
})
export class ConversationComponent implements OnInit {

  userHasConversations: boolean = true;
  usersList: UserComponent[];
  usersListToMessage: UserComponent[] = [];

  newMessage: string = "";
  textingWith: UserComponent;
  thisConversationMessages: Message[] = [];

  loggedUser: UserComponent;
  loggedUserIndex: number;
  loggedUserMessages: Message[];

  constructor(private userService: UserService) {
    this.loggedUser = userService.loggedUser;
    this.loggedUserIndex = userService.usersList.indexOf(this.loggedUser);
    this.createUsersListToMessage();

    this.usersList = userService.usersList;
    this.textingWith = userService.usersList[1];
    this.loggedUserMessages = userService.loggedUser.usersMessages;
  }

  public createUsersListToMessage(){
    for (let user of this.userService.usersList){
      if (user != this.userService.loggedUser){
        this.usersListToMessage.push(user);
      }
    }
  }

  public updateMessages(){
    this.thisConversationMessages = []
    for (let message of this.loggedUserMessages){
      if ((message.receiver === this.textingWith) && (message.author === this.userService.loggedUser)){
        this.thisConversationMessages.push(message);
      }
      else if ((message.receiver === this.userService.loggedUser) && (message.author === this.textingWith)){
        this.thisConversationMessages.push(message);
      }
    }
  }

  public setNewTextingWithUser(newUser: UserComponent){
    this.textingWith = newUser;
    this.updateMessages();
  }

  public sendMessage(){
    let loggedUserIndex = this.userService.usersList.indexOf(this.userService.loggedUser);
    let textingWithUserIndex = this.userService.usersList.indexOf(this.textingWith);
    let messageSendTime = new Date();
    console.log(this.newMessage);
    console.log("message send to : " + this.textingWith.name);
    console.log("message sent at : " + messageSendTime);
    this.userService.usersList[loggedUserIndex].usersMessages.push({author: this.userService.loggedUser, receiver: this.textingWith, sendTime: messageSendTime, content: this.newMessage});
    this.userService.usersList[textingWithUserIndex].usersMessages.push({author: this.userService.loggedUser, receiver: this.textingWith, sendTime: messageSendTime, content: this.newMessage});
    this.newMessage = "";
    this.updateMessages();
  }

  ngOnInit(): void {
  } 



}



