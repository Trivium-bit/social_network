import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

type FormAddMessageType = {
    login: string
    password: string
    rememberMe: boolean
}

const AddMessageForm = (props: any) => {
    return (
     <form onSubmit={props.handleSubmit}>
    <div>
        <Field component="textarea" name="newMessageText" placeholder="Enter your message" /> 
    </div>
<div>
    <button>Send</button>
</div>
</form>
)
}


const AddMessageFormReduxFrom = reduxForm<FormAddMessageType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default AddMessageForm