import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'

import MyPostContainer from "./Myposts/MypostsContainer";
import {ProfileType} from "./ProfileContainer";

type PropsType = {
    profile: ProfileType
}

const Profile:React.FC<PropsType> = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostContainer/>
        </div>
    )
}

export default Profile;

