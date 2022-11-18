import { Timestamp } from "rxjs";

export interface Post {
    postText: string,
    username: string,
    postId : number,
    userId : number,
    liked : number,
    disliked : number,
    date : any,
    postPhoto : any

}