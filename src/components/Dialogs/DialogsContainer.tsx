import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {DialogPageType} from '../../Redux/store'
import {updateNewMessageTextCreator, sendMessageCreator} from "./../../Redux/dialogs_reducer"
import {StoreType} from '../../Redux/store'
import {ActionsType} from '../../Redux/store'
import {ChangeEvent} from 'react';
import Dialogs from "./Dialogs";


type PropsType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
    updateNewMessageBody: (text: string) => void
}

const DialogsContainer = (props: PropsType) => {

    let state = props.store.getState().dialogPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onChangeMessage = (text) => {
        props.store.dispatch(updateNewMessageTextCreator(text))
    }

    return (
        <Dialogs updateNewMessageBody={onChangeMessage} sendMessage={onSendMessageClick} dialogPage={state}/>
    )
}

export default DialogsContainer;
