import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';


import { MatToolbarModule } from '@angular/material/toolbar';
import { WallComponent } from './wall/wall.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { PostComponent } from './post/post.component';
import { MatDividerModule } from '@angular/material/divider';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserComponent } from './user/user.component';
import { LoggedViewComponent } from './logged-view/logged-view.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ConversationComponent } from './conversation/conversation.component';
import { LoggingViewComponent } from './logging-view/logging-view.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AddingPostComponent } from './adding-post/adding-post.component';





@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    WallComponent,
    PostComponent,
    UserComponent,
    LoggingViewComponent,
    LoggedViewComponent,
    RegisterComponent,
    UserProfileComponent,
    ConversationComponent,
    AddingPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule,
    MatDividerModule,
    MatListModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatMenuModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
