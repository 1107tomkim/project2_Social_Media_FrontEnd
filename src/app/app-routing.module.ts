import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {path:"home", component: HomepageComponent},
  {path:"login", component: LogInComponent},
  {path:"create", component: SignupComponent},
  {path:"", component: LogInComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
