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

  constructor(private http: HttpClient) { }

  async registerUser(user: User):Promise<User>{
    const observable = this.http.post<User>("http://localhost:8080/create", user);
    const savedUser = await firstValueFrom(observable);
    return savedUser;
  }

  async logIn(user: User):Promise<User>{
    const observable = this.http.post<User>("http://localhost:8080/login", user);
    const savedUser = await firstValueFrom(observable);
    return savedUser;
  }

  async logOut(user: User):Promise<User>{
    const observable = this.http.post<User>("http://localhost:8080/logout", user);
    const savedUser = await firstValueFrom(observable);
    return savedUser;
  }

 getPosts(){
    return this.http.get<Post[]>(`http://localhost:8080/posts`);
    // const savedPosts = await firstValueFrom(observable);
    // return savedPosts;

  }

}
