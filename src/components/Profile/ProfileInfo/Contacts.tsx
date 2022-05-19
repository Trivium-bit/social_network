type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact = (props: ContactsPropsType) => {
    return <div><b>{props.contactTitle}</b>: {props.contactValue}</div>
}

export default Contact;
