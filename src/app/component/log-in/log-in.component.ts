import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { SocialMediaService } from 'src/app/services/social-media.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  formgrp: FormGroup;


  constructor(private userService: SocialMediaService, 
            private router: Router,
            private formBuilder : FormBuilder) {
              this.formgrp = this.formBuilder.group({username: '',password: ''});
             }

  ngOnInit(): void {
      this.formgrp = this.formBuilder.group(
      {
        username: '',
        password: ''
      }
    );
  }

  async logIn(){
    let jsonString : string = JSON.stringify(this.formgrp.getRawValue());
   // alert(jsonString);
   
      const user = this.formgrp.getRawValue();
  
      // const user: User = {id:0, 
      //   username:this.username, 
      //   password:this.password, 
      //   firstname: '',
      //   lastname: '',
      //   email: '',
      //   isLoggedIn: false};

      const ret = this.userService.logIn(user);
      alert("This is " + ret);
      this.router.navigate(['/home']);
  
  }
  
}

