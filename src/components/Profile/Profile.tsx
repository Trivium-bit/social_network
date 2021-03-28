import React from 'react';
import Myposts from './Myposts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import {PostsType} from "../../Redux/store";
import {ActionsType} from "../../Redux/store"

type ProfilePropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType) => void
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

