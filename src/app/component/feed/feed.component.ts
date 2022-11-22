import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { SocialMediaService } from 'src/app/services/social-media.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts: Post[] = [];
 

  constructor(private postService: SocialMediaService) { postService.setFeedComponent(this);}

  public ngOnInit(): void {
    this.getPosts();
  }
  public getPosts(){
    this.postService.getPosts().subscribe((posts)=>{
      this.posts = posts;
    });

  }
  
}
