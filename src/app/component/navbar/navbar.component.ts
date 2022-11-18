import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from 'src/app/services/social-media.service';
import { UserComponent } from '../userRegistration/userRegistration.component';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private userService: SocialMediaService) { }

  ngOnInit(): void {
  }
  async logOut(){      
    // const user: User = {id:0, username:this.username, password:this.password};
    this.userService.logOut(this.userService.user);
    alert( " Logged Out!");
    } 
}


