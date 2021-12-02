import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { DialogPageType } from '../../Redux/dialogs_reducer'
import { ChangeEvent } from 'react';
import { Redirect } from "react-router";
import { Field, reduxForm } from 'redux-form'

type PropsType = {
    sendMessage: (newMessageText: string) => void
    dialogPage: DialogPageType
    isAuth: boolean
}

const Dialogs = (props: PropsType) => {

    let state = props.dialogPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)
    let newMessageText = state.newMessageText

/* 
    let onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {        // с Redux-Form нет необходимость использовать onChangeMessage
        let text = e.target.value;
        props.updateNewMessageBody(text)
    }
 */
    let addNewMessage = (values: FormAddMessageType) => {
        props.sendMessage(values.newMessageText);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>

                </div>
            </div>
            <AddMessageFormReduxFrom onSubmit={addNewMessage} />
        </div>
    )
}

type FormAddMessageType = {
    newMessageText: string
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

const AddMessageFormReduxFrom = reduxForm<FormAddMessageType>({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs;
