import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import {ProfileType} from './../ProfileContainer'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={classes.content}>
           <img src='https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/11/27/10/38/62/fbf218a40cd7.jpg'/>
            <div className={classes.discriptionBlock}>
                ava+description
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
        </div>
    )
}
export default ProfileInfo;
