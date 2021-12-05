import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

type FormAddMessageType = {
    login: string
    password: string
    rememberMe: boolean
}
const maxLength50 = maxLengthCreator(50)

export const AddMessageForm = (props: any) => {
    return (
     <form onSubmit={props.handleSubmit}>
    <div>
        <Field component={Textarea} validate={[required, maxLength50]} name="newMessageText" placeholder="Enter your message" />
    </div>
<div>
    <button>Send</button>
</div>
</form>
)
}


export const AddMessageReduxForm = reduxForm<FormAddMessageType>({form: 'dialogAddMessageForm'})(AddMessageForm)
