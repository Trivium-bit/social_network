import React from 'react';
import Myposts from './Myposts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import {PostsType} from "../../Redux/state";

type ProfilePropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: (message: string) => void
    updateNewPostText: (message: string) => void
}
const Profile= (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <Myposts posts={props.posts} dispatch={props.dispatch} newPostText={props.newPostText}/>
        </div>
    )
}

export default Profile;

