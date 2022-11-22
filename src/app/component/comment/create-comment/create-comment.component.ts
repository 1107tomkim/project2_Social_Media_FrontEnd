import { Component, ElementRef, Host, Inject, Input, OnInit, AfterViewInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor( private commentService: SocialMediaService,
               private viewContainerRef: ViewContainerRef,
               private router: Router ) { 


    let post_id = this.postParent().post.postId;

    let parent_id = this.commentParent().comment.comment_id;

    this.comment = {
    comment_id : 0,
    userId : 0,
    text : "~~~~~",
    date : null,
    parentId : parent_id,
    postId : post_id,
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

  ngAfterViewInit() {    
   // alert(this.comment.postId);
    
  }

  clickAdd() {

      this.commentService.getUser().then(usr=>{

          let newComment : CommentData  = {
            comment_id : 0,
            userId : this.comment.userId,
            text : this.comment.text,
            date : null,
            parentId : this.comment.parentId,
            postId : this.comment.postId,
            liked : 0,
            disliked : 0
          }

        let jsonString : string = JSON.stringify(newComment);
       // alert(jsonString);
        let ret = this.commentService.createComment(jsonString);

        this.postParent().is_creating = false;
        this.commentParent().is_creating = false;

      });


   
  //    let ret = this.userService.createPost(jsonString);

  // let ret = this.commentService.createComment(this.comment);

  }


    postParent():any {
      const _injector = this.viewContainerRef.parentInjector;
      const _parent: PostComponent = _injector.get<PostComponent>(PostComponent);  
      return _parent;
    }
    commentParent():any {
      const _injector = this.viewContainerRef.parentInjector;
      const _parent: CommentComponent = _injector.get<CommentComponent>(CommentComponent);  
      return _parent;
    }

}
