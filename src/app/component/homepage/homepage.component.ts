import { BootstrapOptions, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { SocialMediaService } from 'src/app/services/social-media.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  profile! : User;



  constructor(private userService : SocialMediaService, private router : Router) { 
    this.profile = { 
      id: 0,
      username : '',
      password:'',
      firstname:  '',
      lastname:  '',
      email:  '',
      phone_number:  '',
      age_num :  '',
      isLoggedIn: true
    }

  }

  ngOnInit(): void {
      // if (this.userService.user.isLoggedIn) {
      //   this.router.navigate(['/home']);
      // }

  }

  searchButton() {

    const search_box = document.getElementById('search_txt') as HTMLInputElement;
    let search_string : string = search_box.value;
    
    if (search_string.length < 1)
      return;

    this.userService.searchUsers(search_string).then(users=> {

      let user: User = users[0];
     // alert(user.email);
    //  for (let user of users) {
        this.profile = { 
          id: 0,
          username : user.username,
          password:'',
          firstname:  user.firstname,
          lastname:  user.lastname,
          email:  user.email,
          phone_number:  user.phone_number,
          age_num :  user.age_num,
          isLoggedIn: true
        }

    //  }
      
      
    });





  }

}
