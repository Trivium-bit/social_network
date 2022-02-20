import React, {Dispatch} from 'react'
import classes from './Post.module.css';
import {deletePostAC} from './../../../../Redux/profile_reducer'
import { useDispatch } from 'react-redux';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}



const Post = (props: PostsType) => {

    const dispatch = useDispatch()
    
    return (
        <div className={classes.post}>
            <img alt="avatar" src="https://shutniki.club/wp-content/uploads/2019/12/v1-babay29.png" />
            {props.message}
            <button onClick={() => {dispatch(deletePostAC(props.id))}}> X </button>
            <div>like {props.likesCount}</div>
        </div>
    )
}
export default Post;

