import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { SocialMediaService } from 'src/app/services/social-media.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
 

  constructor(private postService: SocialMediaService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts(){
    this.postService.getPosts().subscribe((posts)=>{
      this.posts = posts;
    });

  }
  
}
