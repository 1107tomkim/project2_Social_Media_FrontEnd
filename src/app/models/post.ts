import { Timestamp } from "rxjs";

export interface Post {
    postText: string,
    username: string,
    postId : number,
    userId : number,
    liked_by : any,
    disliked_by : any,
    date : any,
    postPhoto : any

}