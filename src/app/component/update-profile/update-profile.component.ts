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
    phone_number: '',
    age_num: ''
    });
  }
  
  ngOnInit(): void {
 //   const gottenUser = this.userService.getUser();
 //   this.user = gottenUser;
 this.userService.getUser().then(res=> {
      // if(this.user.firstname == null){
      //   this.user.firstname = '';
      // }
      // if(this.user.lastname == null){
      //   this.user.lastname = '';
      // }
      // if(this.user.email == null){
      //   this.user.email = '';
      // }
      // if(this.user.isLoggedIn == null){
      //   this.user.isLoggedIn = true;
      // }
      this.user = res;
      this.frmgrp = this.formBuilder.group({
        username : this.user.username,
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        email: this.user.email,
        phone_number: this.user.phone_number,
        age_num: this.user.age_num
        });
      });

  }

  async clickUpdate(){
    this.user.username = this.frmgrp.getRawValue().username;
    this.user.firstname = this.frmgrp.getRawValue().firstname;
    this.user.lastname = this.frmgrp.getRawValue().lastname;
    this.user.email = this.frmgrp.getRawValue().email;
    this.user.age_num = this.frmgrp.getRawValue().age_num;
    this.user.phone_number = this.frmgrp.getRawValue().phone_number;


    // alert('username:' +this.user.username + '\n' +
    //       'firstname:' +this.user.firstname+ '\n' +
    //       'email:' +this.user.email);
   // alert(this.frmgrp.getRawValue());
  //  const ret = this.userService.updateUser(this.frmgrp.getRawValue());

    // const user = this.frmgrp.getRawValue();


   // alert("Account with the firstname " + user.firstname + " has been successfully updated!");
    const ret =  this.userService.updateUser(this.user);
    alert("Updated Profile!");

  }

}
