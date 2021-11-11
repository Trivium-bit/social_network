import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'

type PropsType = {
    profile: ProfileType
}

const ProfileInfo = (props:ProfileType) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={classes.content}>
            <img src='https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/11/27/10/38/62/fbf218a40cd7.jpg'/>
            <div className={classes.discriptionBlock}>
                <img src={props.profile.photos.large} />
                ava+description
                <ProfileStatus />
                </div>
        </div>
    )
}
export default ProfileInfo;
