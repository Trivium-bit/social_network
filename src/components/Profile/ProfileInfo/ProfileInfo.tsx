import { useState } from 'react';
import { ProfileType } from '../../../Redux/profile_reducer';
import Preloader from '../../common/Preloader/Preloader';
import ProfileData from './ProfileData';
import ProfileDataForm from './ProfileDataForm';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: ({ }) => void
}

const ProfileInfo = (props: PropsType) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }

    }

    return (
        <div className={classes.content}>
            <div className={classes.discriptionBlock}>
                <span><img className={classes.ava} src={props.profile.photos.large || 'https://avatars.mds.yandex.net/i?id=6769d84f1f7e2020125db3dde0c3bef4-5876270-images-thumbs&n=13'} alt="ava" /></span>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                <span>I love this game</span>
                {editMode
                    ? <ProfileDataForm goToEditMode={() => { setEditMode(true) }} profile={props.profile} isOwner={props.isOwner} />
                    : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={props.profile} isOwner={props.isOwner} />}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo