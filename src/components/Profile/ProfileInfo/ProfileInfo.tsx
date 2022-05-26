import { useState } from 'react';
import { ProfileType } from '../../../Redux/profile_reducer';
import Preloader from '../../common/Preloader/Preloader';
import { FormDataType } from '../../Login/Login';
import Contact from './Contacts';
import ProfileDataForm from './ProfileDataForm';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: ({ }) => void
    saveProfile: (formData: FormDataType) => void
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
    const onSubmit = (formData: FormDataType) => {
        props.saveProfile(formData)
        setEditMode(false)
    }

    return (
        <div className={classes.content}>
            <div className={classes.discriptionBlock}>
                <span><img className={classes.ava} src={props.profile.photos.large || 'https://avatars.mds.yandex.net/i?id=6769d84f1f7e2020125db3dde0c3bef4-5876270-images-thumbs&n=13'} alt="ava" /></span>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                <span>I love this game</span>
                {editMode
                    ? <ProfileDataForm onSubmit={onSubmit} initialValues={props.profile} />
                    : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={props.profile} isOwner={props.isOwner} />}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}


const ProfileData = (props: ProfileDataType) => {

    return (
        <div>
            {props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>}
            <div>
                <b>Full name</b> : {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b> : {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {props.profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b> : {props.profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me</b> : {props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b> : {Object.keys(props.profile.contacts).map((key: string) => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                })}
            </div>
        </div>
    )
}

export default ProfileInfo;