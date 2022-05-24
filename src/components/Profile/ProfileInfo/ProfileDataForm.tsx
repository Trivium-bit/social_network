import { InjectedFormProps, reduxForm } from "redux-form"
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls"
import { ProfileDataType } from "./ProfileData"

export const ProfileDataForm: React.FC<InjectedFormProps> = ({handleSubmit, }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>save</button></div>
            <div>
                <b>Full name</b> : {createField("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job</b> : {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
            </div>
            <div>
                <b>My professional skills</b> : {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>

            <div>
                <b>About me</b> : {createField("About me", "aboutMee", [], Textarea)}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileDataType>({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm