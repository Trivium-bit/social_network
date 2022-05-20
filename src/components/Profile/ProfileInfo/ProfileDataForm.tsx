import { reduxForm } from "redux-form"
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls"
import { ProfileDataType } from "./ProfileData"

export const ProfileDataForm = () => {
    return (
        <form>
{/*             <div><button onClick={() => { props.goToEditMode }}>save</button></div> */}
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
            {/*   <div>
                <b>Contacts</b> : {Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                })}
            </div> */}
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileDataType>({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm