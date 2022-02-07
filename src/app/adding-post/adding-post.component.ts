import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostComponent } from '../post/post.component';
import { UserService } from '../user.service';
import { UserComponent } from '../user/user.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-adding-post',
  templateUrl: './adding-post.component.html',
  styleUrls: ['./adding-post.component.sass']
})
export class AddingPostComponent implements OnInit {

  description!: string;
  selected!: number;
  image: any;
  service!: UserService;
  newPostAuthor: UserComponent;
  postsList: PostComponent[] = []; 
  nextId!: number;
  userIndex: number = 0;

  imageInfo = [
    {id: 0, isSelected: false},
    {id: 1, isSelected: false},
    {id: 2, isSelected: false},
    {id: 3, isSelected: false},
    {id: 4, isSelected: false},
    {id: 5, isSelected: false},
    {id: 6, isSelected: false},
    {id: 7, isSelected: false},
  ];

  constructor(private userService: UserService, private postService: PostService, private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddingPostComponent>){
    this.newPostAuthor = userService.loggedUser;
   }

  public addNewPost(){
    if (this.selected !== undefined){
      this.image = '/assets/images/'+this.selected+'zdj.jpg';
      this.nextId = this.postService.postsList.length + 1;
      this.postService.postsList.unshift(new PostComponent(this.description, this.image, this.newPostAuthor, this.nextId));

      let index = this.userService.usersList.indexOf(this.newPostAuthor);
      console.log("post add to user : " + index);
      this.userService.usersList[index].usersPosts.unshift(new PostComponent(this.description, this.image, this.newPostAuthor, this.nextId));
      this.dialogRef.close();
    }
    else {
      this.snackBar.open("You can't publish the post without choosing any image !", "OK");
    }
  }

  public photoInfo(nr: number){
    this.selected = nr;
  }

  ngOnInit(): void {
  }
}
