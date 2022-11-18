import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor() { 
    this.comment = {
    comment_id : 0,
    userId : 1,
    text : "OOOO I GOT COVID!",
    date : null,
    parentId : 1,
    postId : 3,
    liked : 35,
    disliked : 0
     } }

  comment : Comments;

  ngOnInit(): void {
  }

}
