import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PostComponent } from './post/post.component';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsList: PostComponent[] = [];
  loggedUser: UserComponent;
  observedPost!: PostComponent;
  observedPostChange: Subject<PostComponent> = new Subject<PostComponent>();
  
  constructor(private userService: UserService) {
    this.loggedUser = userService.loggedUser;
    this.createPostsList();
  }

  public changeObservedPost(newPost: PostComponent){
    this.observedPost = newPost;
    this.observedPostChange.next(this.observedPost);
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
      if ((post.id == postID) && (this.userService.loggedUser.usersLikedPosts.indexOf(post) === -1)){
        this.userService.loggedUser.usersLikedPosts.unshift(post);
        post.likes = post.likes + 1;
        console.log("Add like");
        break;
      }
      else if ((post.id == postID) && (this.userService.loggedUser.usersLikedPosts.indexOf(post) !== -1)){
        let postIndex = this.userService.loggedUser.usersLikedPosts.indexOf(post);
        this.userService.loggedUser.usersLikedPosts.splice(postIndex, 1);
        post.likes -= 1;
        console.log("now you dont like this post anymore");
      }
    }
  }

  public addComment(postID: number, comment: string){
    for (let post of this.postsList){
      if (post.id == postID){
        post.comments.push({author: this.userService.loggedUser, commentContent: comment});
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
