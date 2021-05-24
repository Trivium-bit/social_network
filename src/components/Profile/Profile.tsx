import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'

import MyPostContainer from "./Myposts/MypostsContainer";


const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile;

