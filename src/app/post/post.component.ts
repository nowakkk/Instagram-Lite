import { Component, Inject } from '@angular/core';
import { PostService } from '../post.service';
import { UserService } from '../user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent {

  id!: number;
  author!: UserComponent;
  authorID!: number;
  description!: string;
  likes!: number;
  usersLiked: UserComponent[];
  image!: any;
  comments!: Comment[];
  showComments!: boolean;
  index!: number;

  constructor(@Inject(String) private _description: string, @Inject(Image) private _image: any, @Inject(UserComponent) private _author: UserComponent, @Inject(Number) private _id: number, private userService?: UserService) {

    if (_id)
      this.id = _id; 
    if (_author){
      this.author = _author;
      this.authorID = this.author.id;
    }
    if (_description)
      this.description = _description;
    this.likes = 0;
    this.usersLiked = [];
    this.image = _image;
    this.comments = [];
    this.showComments = false;

   }
}

export interface Comment {
  author: UserComponent;
  commentContent: string;
}
