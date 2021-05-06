import React, {ChangeEvent, Dispatch} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile_reducer";
import {ActionsType, PostsType, StoreType} from "../../../Redux/store";
import Myposts from "./Myposts";
import {connect} from "net";
import { AppStateType } from '../../../Redux/redux-store';



type MyPostsPropsType = {
   // store: StoreType
    posts: Array<PostsType>
    newPostText: string
   // dispatch: (action: ActionsType) => void
   // updateNewPostText: (value: string) => void
}

let mapStateToProps = (state: AppStateType): MyPostsPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
        }
    }
}
// @ts-ignore
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MyPostContainer;

