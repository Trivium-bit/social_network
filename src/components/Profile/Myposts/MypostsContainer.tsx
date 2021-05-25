import React, {Dispatch} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile_reducer";
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
}

type MapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (value: string)=> void
}
let mapStateToProps = (state: AppStateType): MyPostsPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch<any>): MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (value: string) => {
            dispatch(updateNewPostTextActionCreator(value))
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MyPostContainer;

