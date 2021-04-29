import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import {PostsType, StoreType} from "../../Redux/store";
import {ActionsType} from "../../Redux/store"
import MyPostContainer from "./Myposts/MypostsContainer";


/*type ProfilePropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType) => void
    store: StoreType
}*/
const Profile= () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer />
        </div>
    )
}

export default Profile;

