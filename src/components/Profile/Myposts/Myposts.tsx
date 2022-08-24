import React, { ChangeEvent } from 'react';
import classes from './Myposts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from './../../../utils/validators/validators'
import { Textarea } from './../../common/FormsControls/FormsControls'

const maxLength10 = maxLengthCreator(10);

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: (newPostText: string) => void
    deletePost: (postId: number) => void
}

const Myposts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id} />);

    let onAddPost = (values: AddNewPostFormType) => {
        props.addPost(values.newPostText);
    }

    /*     let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewPostText(e.currentTarget.value);
        }
     */
    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <AddMyPostFormReduxFrom onSubmit={onAddPost} />
            <div className={classes.post}>
                {postsElements}
            </div>
        </div>
    )
}

type AddNewPostFormType = {
    newPostText: string
}

const AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText" validate={[required, maxLength10]} type="textarea" />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddMyPostFormReduxFrom = reduxForm<AddNewPostFormType>({ form: 'ProfileNewPostForm' })(AddNewPostForm)

export default Myposts;
