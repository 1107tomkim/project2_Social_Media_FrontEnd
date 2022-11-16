import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './component/userRegistration/userRegistration.component';
import { PostsComponent } from './component/posts/posts.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './component/log-in/log-in.component';
import { Router } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { AboutComponent } from './component/about/about.component';
import { ContactinfoComponent } from './component/contactinfo/contactinfo.component';
import { UserloginComponent } from './component/userlogin/userlogin.component';
import { UsersignupComponent } from './component/usersignup/usersignup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogInComponent,
    UserComponent,
    PostsComponent,
    HomepageComponent,
    AboutComponent,
    ContactinfoComponent,
    UserloginComponent,
    UsersignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
