import React from 'react';
import classes from'./Post.module.css';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

const Post = (props: PostsType) =>{
    return (      
                    <div className={classes.post}>
                    <img alt="avatar" src="https://shutniki.club/wp-content/uploads/2019/12/v1-babay29.png"/>
                         {props.message}
                         <div>like {props.likesCount}</div>
                         </div>                      
    )
}
export default Post;

