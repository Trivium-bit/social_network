import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import {PostsType, StoreType} from "../../Redux/store";
import {ActionsType} from "../../Redux/store"
import MypostsContainer from "./Myposts/MypostsContainer";

type ProfilePropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType) => void
    store: StoreType
}
const Profile= (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MypostsContainer />
        </div>
    )
}

export default Profile;

