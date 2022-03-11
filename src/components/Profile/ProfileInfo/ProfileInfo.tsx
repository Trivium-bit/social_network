import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import {ProfileType} from './../ProfileContainer'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = ({profile, status, updateStatus}: PropsType) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div className={classes.content}>
            <div><img src='https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/11/27/10/38/62/fbf218a40cd7.jpg'/></div>
                <div className={classes.discriptionBlock}>
                <span><img className={classes.img} src='https://avatars.mds.yandex.net/i?id=6769d84f1f7e2020125db3dde0c3bef4-5876270-images-thumbs&n=13' alt="profile Avatar"/></span>
                <span>I love this game</span>
             
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
        </div>
    )
}
export default ProfileInfo;
