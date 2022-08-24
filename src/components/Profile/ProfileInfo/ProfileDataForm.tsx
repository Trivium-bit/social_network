import { InjectedFormProps, reduxForm } from "redux-form"
import { ProfileType } from "../../../Redux/profile_reducer"
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls"
import { FormDataType } from "../../Login/Login"
import s from "./ProfileInfo.module.css"
import style from "../../common/FormsControls/FormsControls.module.css"


interface ProfileDataFormType extends HTMLFormControlsCollection {
    usernameInput: HTMLInputElement
}
interface ProfileDataFormType extends FormDataType {
    initialValues: ProfileType
}

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormType>> = ({ handleSubmit, error }, profile) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>save</button></div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
            </div>
            <div>
                <b>My professional skills</b>: {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>
                <b>About me</b>: {createField("About me", "aboutMee", [], Textarea)}
            </div>
            <div>
                <b>Contacts</b> : {Object.keys(profile.contacts).map((key: string) => {
                    return <div key={key} className={s.contacts}>
                        <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                    </div>
                })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileDataFormType>({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm