import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { UserloginComponent } from './component/userlogin/userlogin.component';
import { UsersignupComponent } from './component/usersignup/usersignup.component';

const routes: Routes = [
  {path:"home", component: HomepageComponent},
  {path:"login", component: UserloginComponent},
  {path:"create", component: UsersignupComponent},
  {path:"", component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
