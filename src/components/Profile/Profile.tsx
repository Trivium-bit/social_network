import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'

import MyPostContainer from "./Myposts/MypostsContainer";
import {ProfileType} from "./ProfileContainer";

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const Profile:React.FC<PropsType> = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile;

