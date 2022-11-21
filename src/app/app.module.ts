import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FeedComponent } from './component/feed/feed.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './component/log-in/log-in.component';
import { Router } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { AboutComponent } from './component/about/about.component';
import { ContactinfoComponent } from './component/contactinfo/contactinfo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostComponent } from './component/post/post.component';
import { CommentComponent } from './component/comment/comment.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreatePostComponent } from './component/create-post/create-post.component';
import { SignupComponent } from './component/signup/signup.component';
import { CreateCommentComponent } from './component/comment/create-comment/create-comment.component';
import { UpdateProfileComponent } from './component/update-profile/update-profile.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogInComponent,
    FeedComponent,
    HomepageComponent,
    AboutComponent,
    ContactinfoComponent,
    SignupComponent,
    PostComponent,
    CommentComponent,
    CreatePostComponent,
    CreateCommentComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
