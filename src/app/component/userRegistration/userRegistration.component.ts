import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { SocialMediaService } from 'src/app/services/social-media.service';

@Component({
  selector: 'app-user',
  templateUrl: './userRegistration.component.html',
  styleUrls: ['./userRegistration.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: SocialMediaService, private router: Router) { }
 
  
  username : string = "";
  password : string = "";
  savedId : number = 0;

  
  ngOnInit(): void {
  }
  async registerUser(){
    const user: User = {id:0, username:this.username, password:this.password};
    alert(user.username + user.password);
    const savedUser: User = await this.userService.registerUser(user);
    this.savedId = savedUser.id;
  }

}
