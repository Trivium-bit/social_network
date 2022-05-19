type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact = ({ contactTitle, contactValue }: ContactsPropsType) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default Contact;
