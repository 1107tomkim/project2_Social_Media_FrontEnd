import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { SocialMediaService } from 'src/app/services/social-media.service';



@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  formData! : FormData;
  byteArray : number[] = [];
  fileName : string = '';
  postText : string = '';
  photo!: File;  

  constructor( private userService : SocialMediaService ) {                 
                }

  ngOnInit(): void {

  }

  createPost(): void {

    

      let currentUser : User = {
      id : 0,
      username : '',
      password : '',
      firstname: '',
      lastname: '',
      email: '',
      isLoggedIn: false
      }

      this.userService.getUser().then(res=>{
        currentUser = res;
      });

   
      let newPost : Post = {
        postText: this.postText,
        postId : 0,
        userId : 0,
        username: currentUser.username,
        liked_by : null,
        disliked_by : null,
        date: null,
        postPhoto: this.byteArray
      }


      let jsonString : string = JSON.stringify(newPost);
      let ret = this.userService.createPost(jsonString);
      this.userService.getFeedComponent().ngOnInit();
      // alert("Post Created!");
      this.userService.getFeedComponent().ngOnInit();

  }


    async onFileSelected(event : any) {

        let file : File = event.target.files[0];


        if (file) {

          this.fileName = file.name;

          let r = new FileReader();
          r.onload = () => {
            let str = r.result + '';
            var data = [];
            for (var i = 0; i < str.length; i++){  
                data.push(str.charCodeAt(i) - 256);
            }
            this.byteArray = data;
          }   
          r.readAsBinaryString(file);        
        }
        


    }

}
