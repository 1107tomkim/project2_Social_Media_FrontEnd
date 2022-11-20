import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialMediaService } from 'src/app/services/social-media.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private userService: SocialMediaService, private router : Router) { }

  ngOnInit(): void {
  }
  async logOut(){      
    // const user: User = {id:0, username:this.username, password:this.password};
    this.userService.logOut(this.userService.user);
    alert( " Logged Out!");
    this.router.navigate(['/login']);
    } 
}


