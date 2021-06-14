import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {DialogPageType} from '../../Redux/dialogs_reducer'
import {ChangeEvent} from 'react';
import {Redirect} from "react-router";

type PropsType = {
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
    dialogPage: DialogPageType
    isAuth: boolean
}

const Dialogs = (props: PropsType) => {

    let state = props.dialogPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)
    let newMessageText = state.newMessageText

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value;
        props.updateNewMessageBody(text)
    }

    if (!props.isAuth) return <Redirect to="/login"/>
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageText}
                                  placeholder="Enter your message"
                                  onChange={onChangeMessage}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
