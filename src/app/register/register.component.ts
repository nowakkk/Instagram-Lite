import { Component, OnInit } from '@angular/core';
import { UserComponentInterface, UserService } from '../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  selectedPhoto!: File;

  usersList: UserComponentInterface[];

  newUsername!: string;
  newUserLogin!: string;
  newUserPassword!: string;
  tempID!: number;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  file!: File;

  inpFile = document.getElementById("inpFile");
  previewContainer = document.getElementById("imagePreview");


  constructor(private userService: UserService, private _snackBar: MatSnackBar, private router: Router, private formBuilder: FormBuilder) {
    this.usersList = userService.usersList;

    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

  onFileSelected(file: File){
  }
    

  addNewUser(userName: string, userLogin: string, userPassword: string, userDescription: string){
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
      const fr = new FileReader();

      this.userService.usersList.unshift(new UserComponent(this.tempID, userLogin, userPassword, userName, this.selectedPhoto, userDescription));
      this.userService.loggedUser = this.userService.usersList[0];
      this.router.navigate(['/logged-view']);
    }
  }

  backToLogin(){
    this.router.navigate(['/logging-view']);

  }
}
