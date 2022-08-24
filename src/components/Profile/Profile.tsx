import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostContainer from "./Myposts/MypostsContainer";
import { ProfileType } from '../../Redux/profile_reducer';
import { FormDataType } from '../Login/Login';

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: () => void
    saveProfile: (formData: FormDataType) => Promise<any>
}

const Profile: React.FC<PropsType> = (props) => {

    return (
        <div>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto} saveProfile={props.saveProfile} />
            <MyPostContainer />
        </div>
    )
}

export default Profile;

