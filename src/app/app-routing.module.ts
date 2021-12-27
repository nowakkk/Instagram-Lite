import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversationComponent } from './conversation/conversation.component';
import { LoggedViewComponent } from './logged-view/logged-view.component';
import { LoggingViewComponent } from './logging-view/logging-view.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'test-user-profile', component: UserProfileComponent},
  { path: 'logged-view', component: LoggedViewComponent },
  { path: 'logging-view', component: LoggingViewComponent },
  { path: 'conversations', component: ConversationComponent},
  { path: 'register-view', component: RegisterComponent },  

  { path: '', redirectTo: 'logged-view', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
