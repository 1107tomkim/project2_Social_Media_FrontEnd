import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  @Input() post : Post;
  @ViewChild('post_image')imageElementId!: ElementRef;

  constructor() {
    this.post = {
    postText: "",
    postId : 0,
    userId : 0,
    liked : 0,
    disliked : 0,
    date : null,
    postPhoto : null
    }

    
   }

  ngOnInit(): void {
   // let postImage : HTMLImageElement = this.imageElementId.nativeElement as HTMLImageElement;
     
  //   this.imageHtml =`<img src="data:image/jpeg;base64, ${this.base64String}" height=100 width=100>`;
 //   let postImage : HTMLImageElement = document.getElementById("post_image") as HTMLImageElement;

  }

   ngAfterViewInit() {
    
      let base64String : string = this.arrayBufferToBase64(this.post.postPhoto);
      let imageElement = this.imageElementId.nativeElement as HTMLImageElement;
    //  imageElement.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Crocodile_de_Morelet.jpeg/1200px-Crocodile_de_Morelet.jpeg";
      

      imageElement.src = "data:image/jpeg;base64," + base64String;
      //innerHTML = `<img src="data:image/jpeg;base64, ${this.base64String}" height=100 width=100>`;

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
