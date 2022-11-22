import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { SocialMediaService } from 'src/app/services/social-media.service';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  user! : User;
  frmgrp : FormGroup;

  constructor(private userService : SocialMediaService, private formBuilder : FormBuilder) {
    this.frmgrp = this.formBuilder.group({
    username : '',
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    age: ''
    });
   }

  ngOnInit(): void {
 //   const gottenUser = this.userService.getUser();
 //   this.user = gottenUser;
    this.userService.getUser().then(res=> {
      this.user = res;
      this.frmgrp = this.formBuilder.group(this.user);
    });

  }

  async clickUpdate(){
    // alert('username:' +this.user.username + '\n' +
    //       'firstname:' +this.user.firstname+ '\n' +
    //       'email:' +this.user.email);
   // alert(this.frmgrp.getRawValue());
  //  const ret = this.userService.updateUser(this.frmgrp.getRawValue());

    const user = this.frmgrp.getRawValue();
   // alert("Account with the firstname " + user.firstname + " has been successfully updated!");
    const ret =  this.userService.updateUser(user);
    alert(ret);
    

  }

}
