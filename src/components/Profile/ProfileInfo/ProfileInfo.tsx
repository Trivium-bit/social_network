import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import { ProfileType } from './../ProfileContainer'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { ChangeEventHandler } from 'react';

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

const ProfileInfo = ({ profile, status, updateStatus, isOwner }: PropsType) => {
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e: ChangeEventHandler<HTMLInputElement>) => {
        e.currentTarget.files[0]
    }

    return (
        <div className={classes.content}>
            <div className={classes.discriptionBlock}>
                <span><img className={classes.ava} src={profile.photos.large || 'https://avatars.mds.yandex.net/i?id=6769d84f1f7e2020125db3dde0c3bef4-5876270-images-thumbs&n=13'} alt="profile Avatar" /></span>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                <span>I love this game</span>

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}
export default ProfileInfo;
