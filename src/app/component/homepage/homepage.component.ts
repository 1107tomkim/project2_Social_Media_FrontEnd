import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialMediaService } from 'src/app/services/social-media.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private userService : SocialMediaService, private router : Router) { }

  ngOnInit(): void {
      // if (this.userService.user.isLoggedIn) {
      //   this.router.navigate(['/home']);
      // }

  }

}
