import { Timestamp } from "rxjs";

export interface Comments {
    comment_id : number,
    userId : number,
    text : string,
    date : any,
    parentId : number,
    postId : number,
    liked : number,
    disliked : number
}