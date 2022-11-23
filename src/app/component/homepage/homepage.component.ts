import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
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

  searchButton() {
    const search_box = document.getElementById('search_txt') as HTMLInputElement;
    let search_string : string = search_box.value;
    if (search_string.length === 0) {
      return;
    }
    
    this.userService.searchUsers(search_string).then(users=> {
      alert(users);
      for (let u of users) {
        alert(u.username);
      }
      
    });





  }

}
