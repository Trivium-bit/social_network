import React, {ChangeEvent} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile_reducer";
import {ActionsType, PostsType, StoreType} from "../../../Redux/store";
import Myposts from "./Myposts";


type MyPostsPropsType = {
    store: StoreType
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export const MypostsContainer = (props: MyPostsPropsType) => {
let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //props.updateNewPostText(e.currentTarget.value);
        props.store.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))

    }

    return (
        <Myposts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
        />
    )
}
export default Myposts;

