import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { MessageComponent } from './component/message/message.component';
import { MyFeedComponent } from './component/my-feed/my-feed.component';
import { SignupComponent } from './component/signup/signup.component';
import { UpdateProfileComponent } from './component/update-profile/update-profile.component';

const routes: Routes = [
  {path:"home", component: HomepageComponent},
  {path:"login", component: LogInComponent},
  {path:"create", component: SignupComponent},
  {path:"update", component: UpdateProfileComponent},
  {path:"", component: LogInComponent},
  {path:"message", component: MessageComponent},
  {path:"myfeed", component: MyFeedComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
