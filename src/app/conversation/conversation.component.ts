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
  newMessage: string = "";
  textingWith: UserComponent;
  thisConversationMessages: Message[] = [];

  loggedUserMessages: Message[];

  constructor(private userService: UserService) {
    this.usersList = userService.usersList;
    this.textingWith = userService.usersList[1];
    this.loggedUserMessages = userService.loggedUser.usersMessages;
  }

  public updateMessages(){
    this.thisConversationMessages = []
    for (let message of this.loggedUserMessages){
      if ((message.receiver === this.textingWith) && (message.author === this.userService.loggedUser)){
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
    let messageSendTime = new Date();
    console.log(this.newMessage);
    console.log("wiadomość wysyłamy do : " + this.textingWith.name + " nasz index w tablicy to : " + loggedUserIndex);
    console.log("wiadomość zostaje wysłana o : " + messageSendTime);
    this.userService.usersList[loggedUserIndex].usersMessages.push({author: this.userService.loggedUser, receiver: this.textingWith, sendTime: messageSendTime, content: this.newMessage});
    this.newMessage = "";
    this.updateMessages();
  }

  ngOnInit(): void {
  } 



}



