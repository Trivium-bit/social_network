import React, {Dispatch} from 'react';
import {addPostActionCreator, deletePostAC} from "../../../Redux/profile_reducer";
import Myposts from "./Myposts";
import { AppStateType } from '../../../Redux/redux-store';
import {connect} from "react-redux";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    postId: number
}

type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
    deletePost: (postId: number) => void
    /* updateNewPostText: (value: string)=> void */
}
let mapStateToProps = (state: AppStateType): MyPostsPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        postId: state.profilePage.posts.
    }
}
let mapDispatchToProps = (dispatch: Dispatch<any>): MapDispatchPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        },
        deletePost: (postId: number) => {
            dispatch(deletePostAC(postId))
        }
        
        /*
        updateNewPostText: (value: string) => {
            dispatch(updateNewPostTextActionCreator(value))
        } */
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MyPostContainer;

