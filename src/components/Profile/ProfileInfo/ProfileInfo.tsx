import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div className={classes.content}>
            <img src='https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/11/27/10/38/62/fbf218a40cd7.jpg'/>
            <div className={classes.discriptionBlock}>ava+description</div>
        </div>
    )
}

export default ProfileInfo;
