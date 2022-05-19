import { useState } from 'react';
import { ProfileType } from '../../../Redux/profile_reducer';
import Preloader from '../../common/Preloader/Preloader';
import ProfileData from './ProfileData';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

type ProfileData = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: boolean
}

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: ({ }) => void
}

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }: PropsType) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }

    }

    return (
        <div className={classes.content}>
            <div className={classes.discriptionBlock}>
                <span><img className={classes.ava} src={profile.photos.large || 'https://avatars.mds.yandex.net/i?id=6769d84f1f7e2020125db3dde0c3bef4-5876270-images-thumbs&n=13'} alt="ava" /></span>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                <span>I love this game</span>
                {editMode
                    ? <ProfileDataForm />
                    : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}
