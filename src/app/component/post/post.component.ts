import { JsonPipe } from '@angular/common';
import { parseHostBindings } from '@angular/compiler';
import { AfterViewInit, asNativeElements, Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { firstValueFrom, Timestamp, timestamp } from 'rxjs';
import { CommentData } from 'src/app/models/comment';
import { Post } from 'src/app/models/post';
import { SocialMediaService } from 'src/app/services/social-media.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, AfterViewInit {
  
  @Input() post : Post;
  @ViewChild('post_image')imageElementRef!: ElementRef;
  public comments: CommentData[] = [];
  public child_comments: CommentData[] = [];
  comment_id = 0;
  is_creating_comment = false;
  liked = false;
  disliked = false;




  constructor(private postService : SocialMediaService) {

    this.post = {
      postText: "",
      username: "",
      postId : 0,
      userId : 0,
      liked_by : null,
      disliked_by : null,
      date : null,
      postPhoto : null
    }

    this.comments = [];
    
   }

  ngOnInit(): void {  
    this.getComments();
  }

  
  getComments(){
    this.postService.getComments(this.post.postId).subscribe((comments)=>{
      this.setComments(comments);
    });    
  }

  setComments(comments : CommentData[]) {
    comments.sort(function(a, b){return a.date - b.date});
      
    for (let i in comments) {
      for (let j in comments) {

        if (comments[j].parentId == comments[i].comment_id) {
          if (comments[i].comments === undefined)
              comments[i].comments = [];
           comments[i].comments?.push(comments[j]);
          // alert(JSON.stringify(comments[i].comments));

        }
      }
    }
    let newcomments : CommentData[] = [];
    for (let i in comments) {
      if (comments[i].parentId === 0)
        newcomments.push(comments[i]);
    }

    this.comments = newcomments;
  //  alert(JSON.stringify(newcomments));
  }

  toggleCreate() {
    this.is_creating_comment = !this.is_creating_comment;
  }

  ngAfterViewInit() {

  // get the image and set its src value to a base64 conversion (of the image bytea from DB)
    let imageElement = this.imageElementRef.nativeElement as HTMLImageElement;
    let base64String : string = this.arrayBufferToBase64(this.post.postPhoto);
    imageElement.src = "data:image/jpeg;base64," + base64String;
          
  }

  
  public arrayBufferToBase64( buffer : any[] ): string {
      var binary = '';
      var bytes = new Uint8Array( buffer );
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
          binary += String.fromCharCode( bytes[ i ] );
      }
      return window.btoa( binary );
  }

  toggleLiked(){
    console.log(this.liked);
    this.liked = !this.liked;
    console.log(this.liked);

    const xyz = this.postService.likePost(this.post.postId);
    console.log(xyz);

  };

  toggleDisliked(){
    this.disliked = !this.disliked
  };
}
