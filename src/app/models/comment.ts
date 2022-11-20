
export interface CommentData {
    comment_id : number,
    userId : number,
    text : string,
    date : any,
    parentId : number,
    postId : number,
    liked : number,
    disliked : number,
    comments?: Array<CommentData>
}