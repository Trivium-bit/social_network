import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'

import MyPostContainer from "./Myposts/MypostsContainer";
import {ProfileType} from "./ProfileContainer";

type PropsType = {
    profile: ProfileType
}

const Profile:React.FC<PropsType> = ({profile}) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile;

