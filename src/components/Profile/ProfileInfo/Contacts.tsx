import s from "./ProfileInfo.module.css";

type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact = (props: ContactsPropsType) => {
    return <div className={s.contacts}><b>{props.contactTitle}</b>: {props.contactValue}</div>
}

export default Contact;
