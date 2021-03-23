import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {DialogPageType} from '../../Redux/state'
import {updateNewMessageTextCreator, sendMessageCreator} from "./../../Redux/dialogs_reducer"
import {StoreType} from './../../Redux/state'
import {ActionsType} from './../../Redux/state'
import { ChangeEvent } from 'react';



type PropsType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
}

const Dialogs = (props: PropsType) => {

    let state = props.store.getState().dialogPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageText = state.newMessageText

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value;
        props.store.dispatch(updateNewMessageTextCreator(text))
    }

    return (
        
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageText}
                                   placeholder="Enter your message"
                                   onChange={onChangeMessage}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
