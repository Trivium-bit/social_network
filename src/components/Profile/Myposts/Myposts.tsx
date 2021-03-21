import React, { ChangeEvent } from 'react';
import classes from './Myposts.module.css';
import Post from './Post/Post';
import {PostsType} from "../../../Redux/state";

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: (message: string) => void
    updateNewPostText: (message: string) => void
}

const Myposts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

    let addPost = () => {
        // props.addPost(props.newPostText);
        // props.updateNewPostText("");
        props.dispatch({ type: 'ADD-POST'});
    }

let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
     //props.updateNewPostText(e.currentTarget.value);
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text})
    }


    return (
        <div className={classes.postBlock}>My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ () => {addPost()} }>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.post}>
                {postsElements}
            </div>
        </div>
    )
}
export default Myposts;

