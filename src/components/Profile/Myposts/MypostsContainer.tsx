import React, {ChangeEvent} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile_reducer";
import {ActionsType, PostsType, StoreType} from "../../../Redux/store";
import Myposts from "./Myposts";
import {connect} from "net";



type MyPostsPropsType = {
    store: StoreType
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType) => void
    updateNewPostText: (value: string) => void
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
        }
    }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MyPostContainer;

