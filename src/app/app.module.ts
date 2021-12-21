import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { WallComponent } from './wall/wall.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PostComponent,
    UserComponent,
    WallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
