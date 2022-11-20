import { Component, Input, OnInit } from '@angular/core';
import { CommentData } from 'src/app/models/comment';
import { SocialMediaService } from 'src/app/services/social-media.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment : CommentData;

  @Input() child_comments: any;

  username : string = '';

  is_creating = false;

  constructor(private commentService: SocialMediaService) { 
    this.comment = {
    comment_id : 0,
    userId : 1,
    text : "~~~~~",
    date : null,
    parentId : 1,
    postId : 0,
    liked : 0,
    disliked : 0,
    comments : []
     } }


  ngOnInit(): void {
    this.commentService.getUserById(this.comment.userId).then(res=> {
      this.username = res.username;
    });
  }

  clickCreate() {
    this.is_creating = !this.is_creating;
  }

}
