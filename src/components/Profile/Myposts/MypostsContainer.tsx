import React, {ChangeEvent} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile_reducer";
import {ActionsType, PostsType, StoreType} from "../../../Redux/store";
import Myposts from "./Myposts";
import StoreContext from "../../../StoreContext";


type MyPostsPropsType = {
    store: StoreType
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType) => void
    updateNewPostText: (value: string) => void
}

export const MypostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {    (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    store.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
                }

                return <Myposts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={store.getState().profilePage.posts}
                                newPostText={store.getState().profilePage.newPostText}
                />
            }
        }
        </StoreContext.Consumer>
    )
}
export default Myposts;

