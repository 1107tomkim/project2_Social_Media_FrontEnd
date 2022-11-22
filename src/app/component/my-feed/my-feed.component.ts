import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from 'src/app/services/social-media.service';

@Component({
  selector: 'app-my-feed',
  templateUrl: './my-feed.component.html',
  styleUrls: ['./my-feed.component.css']
})
export class MyFeedComponent implements OnInit {
 

  constructor(private postService : SocialMediaService) { }

  public ngOnInit() {
    
  }

}
