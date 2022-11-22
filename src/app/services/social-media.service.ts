import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../models/user';
import { Post } from '../models/post';
import { FeedComponent } from '../component/feed/feed.component';
import { CommentData } from '../models/comment';


@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  baseURL: string = "http://localhost:8080";
  user: User = {id:0, 
        username:'', 
        password:'', 
        firstname: '',
        lastname: '',
        email: '',
        isLoggedIn: false};

  constructor(private http: HttpClient) { }

  async registerUser(user: User):Promise<User>{
    const observable = this.http.post<User>(this.baseURL + "/create", user);
    const savedUser = await firstValueFrom(observable);
    return savedUser;
  }

  async logIn(user: User):Promise<User>{
    const observable = this.http.post<User>(this.baseURL + "/login", user, {withCredentials: true});
    const savedUser = await firstValueFrom(observable);
    this.user = savedUser;
    return savedUser;
  }

  async logOut(user: User):Promise<User>{
    const observable = this.http.get<User>(this.baseURL + "/api/logout", {withCredentials: true});
    const savedUser = await firstValueFrom(observable);
    return savedUser;
  }

  async getUser():Promise<User>{
      const observable =  this.http.get<User>(this.baseURL + '/api/user', {withCredentials: true});
      const savedUser = await firstValueFrom(observable);
      return savedUser;
  }

  async getUserById(user_id : number):Promise<User>{
      const observable =  this.http.get<User>(this.baseURL + '/api/user/' + user_id, {withCredentials: true});
      const savedUser = await firstValueFrom(observable);
      return savedUser;
  }

 getPosts(){
    return this.http.get<Post[]>(this.baseURL + '/api/posts', {withCredentials: true});
    // const savedPosts = await firstValueFrom(observable);
    // return savedPosts;

  }

 getPost(post_id : number){
    return this.http.get<Post>(this.baseURL + '/api/post/' + post_id, {withCredentials: true});
    // const savedPosts = await firstValueFrom(observable);
    // return savedPosts;

  }

  getComments(post_id : number){
    return this.http.get<CommentData[]>(this.baseURL + '/api/comments/' + post_id, {withCredentials: true});
   //  const savedPosts = await firstValueFrom(observable);
   //  return savedPosts;

  }

  async createPost(post : any): Promise<any> {
    const observable =  this.http.post(this.baseURL + '/api/post', post, {withCredentials: true});
    const ret = await firstValueFrom(observable);
    return ret;
  }

  async createComment(comment : any): Promise<any> {
    const observable =  this.http.post(this.baseURL + '/api/comment', comment, {withCredentials: true});
    const ret = await firstValueFrom(observable);
    return ret;
  }

  likePost(post_id : number, like : boolean) {
    if (like)
      return this.http.get(this.baseURL + '/api/post/like/' + post_id, {withCredentials: true});
    else
      return this.http.get(this.baseURL + '/api/post/dislike/' + post_id, {withCredentials: true});
  }

}
