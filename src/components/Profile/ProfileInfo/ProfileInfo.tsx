import { ProfileType } from '../../../Redux/profile_reducer';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: ({ }) => void
}

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }: PropsType) => {
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }

    }
    debugger
    return (
        <div className={classes.content}>
            <div className={classes.discriptionBlock}>
                <span><img className={classes.ava} src={profile.photos.large || 'https://avatars.mds.yandex.net/i?id=6769d84f1f7e2020125db3dde0c3bef4-5876270-images-thumbs&n=13'} alt="ava" /></span>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                <span>I love this game</span>

                <div>
                    <div>
                        <b>Full name</b> : {profile.fullName ? "yes" : "no"}
                    </div>
                    <div>
                        <b>Looking for a job</b> : {profile.lookingForAJob ? "yes" : "no"}
                    </div>
                    {profile.lookingForAJob &&
                        <div>
                            <b>My professional skills</b> : {profile.lookingForAJobDescription}
                        </div>
                    }
                     <div>
                        <b>About me</b> : {profile.abotMe}
                    </div>
                    <div>
{/*                         <b>Contacts</b> : {profile} */}
                    </div>
                </div>

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}
export default ProfileInfo;
