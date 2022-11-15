import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { SocialMediaService } from 'src/app/services/social-media.service';
import { Router } from '@angular/router';
import { UserComponent } from '../userRegistration/userRegistration.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  username : string = "";
  password : string = "";

  constructor(private userService: SocialMediaService, private router: Router) { }

  ngOnInit(): void {
  }

  async logIn(){
    if (this.username.length < 1 || this.password.length < 1) {
      alert("Fields can not be empty");
    }else{
      const user: User = {id:0, username:this.username, password:this.password};
      this.userService.logIn(user);
      alert(this.username + " Logged In!");
    }
  }
  
}

