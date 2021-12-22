import { Injectable } from '@angular/core';
import { PostComponent } from './post/post.component';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsList: PostComponent[] = [];
  loggedUser: UserComponent;
  
  constructor(private userService: UserService) {
    this.loggedUser = userService.loggedUser;
    this.createPostsList();
   }

  public showComments(postID: number){
    for (let post of this.postsList){
      if (post.id == postID){
        post.showComments = !post.showComments;
        console.log(post.showComments);
      }
    }
  }

  public addLike(postID: number){
    for (let post of this.postsList){
      if (post.id == postID){
        post.likes = post.likes + 1;
        console.log("Add like");
      }
    }
  }

  public addComment(postID: number, comment: string){
    for (let post of this.postsList){
      if (post.id == postID){
        post.comments.push({author: this.loggedUser, commentContent: comment});
      }
    }
  }

  private createPostsList(){
    for (let user of this.userService.usersList){
      for (let post of user.usersPosts){
        this.postsList.push(post);
      }
    }
  }
}
