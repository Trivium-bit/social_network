import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import {PostsType} from "../../Redux/store";
import {ActionsType} from "../../Redux/store"
import MypostsContainer from "./Myposts/MypostsContainer";

type ProfilePropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}
const Profile= (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MypostsContainer store={props.store} />
        </div>
    )
}

export default Profile;

