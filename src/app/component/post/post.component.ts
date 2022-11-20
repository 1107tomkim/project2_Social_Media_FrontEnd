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

  constructor(private postService : SocialMediaService) {

    

    this.post = {
    postText: "",
    username: "",
    postId : 0,
    userId : 0,
    liked : 0,
    disliked : 0,
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
      this.comments = comments;
    });


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
}
