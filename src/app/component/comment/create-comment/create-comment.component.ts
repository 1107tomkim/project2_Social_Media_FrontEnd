import { Component, Host, Inject, Input, OnInit, ViewContainerRef } from '@angular/core';
import { CommentData } from 'src/app/models/comment';
import { User } from 'src/app/models/user';
import { SocialMediaService } from 'src/app/services/social-media.service';
import { PostComponent } from '../../post/post.component';
import { CommentComponent } from '../comment.component';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {
  @Input() comment : CommentData;


  constructor( private commentService: SocialMediaService) { 

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
     }
  }

  ngOnInit(): void {

    let user : Promise<User> = this.commentService.getUser();
    user.then(res=> {
      this.comment.userId = res.id;
    })
  }

  clickAdd() {
    
   let ret = this.commentService.createComment(this.comment);
   alert(ret);
  }
}
