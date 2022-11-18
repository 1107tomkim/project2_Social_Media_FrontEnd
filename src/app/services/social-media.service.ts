import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../models/user';
import { Post } from '../models/post';
import { FeedComponent } from '../component/feed/feed.component';


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
    const observable = this.http.post<User>(this.baseURL + "/logout", user, {withCredentials: true});
    const savedUser = await firstValueFrom(observable);
    return savedUser;
  }

  async getUser():Promise<User>{
      const observable =   this.http.get<User>(this.baseURL + '/api/user', {withCredentials: true});
      const savedUser = await firstValueFrom(observable);
      return savedUser;
  }

 getPosts(){
    return this.http.get<Post[]>(this.baseURL + `/api/posts`, {withCredentials: true});
    // const savedPosts = await firstValueFrom(observable);
    // return savedPosts;

  }

  
  async createPost(post : any): Promise<any> {
    const observable =  this.http.post(this.baseURL + '/api/post', post, {withCredentials: true});
    const ret = await firstValueFrom(observable);
    return ret;
  }

}
