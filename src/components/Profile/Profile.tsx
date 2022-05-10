import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'

import MyPostContainer from "./Myposts/MypostsContainer";
import {ProfileType} from "./ProfileContainer";

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

const Profile:React.FC<PropsType> = (props) => {

    return (
        <div>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile;

