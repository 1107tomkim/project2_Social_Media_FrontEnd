import { Component, Input, OnInit } from '@angular/core';
import { CommentData } from 'src/app/models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment : CommentData;

  constructor() { 
    this.comment = {
    comment_id : 0,
    userId : 1,
    text : "~~~~~",
    date : null,
    parentId : 1,
    postId : 3,
    liked : 35,
    disliked : 0
     } }


  ngOnInit(): void {
  }

}
