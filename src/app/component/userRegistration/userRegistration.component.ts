import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { SocialMediaService } from 'src/app/services/social-media.service';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './userRegistration.component.html',
  styleUrls: ['./userRegistration.component.css']
})
export class UserComponent implements OnInit {
  formgrp: FormGroup;

  constructor(private userService: SocialMediaService, private router: Router, private formBuilder : FormBuilder)
  {this.formgrp = this.formBuilder.group({username: '',password: ''});}
 
  
  username : string = "";
  password : string = "";
  savedId : number = 0;

  
  ngOnInit(): void {this.formgrp = this.formBuilder.group({username: '',password: ''})
  }
  async registerUser(){
    const user = this.formgrp.getRawValue();
    alert("Account with the Username " + user.username + " has been successfully created!");
    const savedUser: User = await this.userService.registerUser(user);
    this.savedId = savedUser.id;
  }

}
