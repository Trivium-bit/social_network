import React, {ChangeEvent} from 'react';
import classes from './Myposts.module.css';
import Post from './Post/Post';
import {ActionsType, PostsType} from "../../../Redux/store";


type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (value: string) => void
}

const Myposts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);

    }

    return (
        <div className={classes.postBlock}>My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
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

