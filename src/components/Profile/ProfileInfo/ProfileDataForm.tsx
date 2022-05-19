import Contact from "./Contacts"
import ProfileData from "./ProfileData"

const ProfileDataForm = (props: ProfileData) => {
    return (
        <form>
            <div><button onClick={props.goToEditMode}>save</button></div>
            <div>
                <b>Full name</b> : {props.profile.fullName ? "yes" : "no"}
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
                <b>About me</b> : {props.profile.abotMe}
            </div>
            <div>
                <b>Contacts</b> : {Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                })}
            </div>
        </form>
    )
}

export default ProfileDataForm