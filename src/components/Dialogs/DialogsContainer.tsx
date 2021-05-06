import React, {Dispatch} from 'react'
import {updateNewMessageTextCreator, sendMessageCreator, DialogsType, MessageType} from "./../../Redux/dialogs_reducer"
import Dialogs from "./Dialogs";
import {connect} from "net";
import { AppStateType } from '../../Redux/redux-store';
import {UsersType} from "../../Redux/users-reducer";
import {SendMessageType, UpdateNewMessageTextType} from "../../Redux/store";

type MapStateToPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
}
type MapDispatchPropsType = {
    sendMessageCreator: () => void
    updateNewMessageTextCreator: (text: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
        return{
        dialogPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (text: string) => {
            dispatch(updateNewMessageTextCreator(text))
        }
    }
}
    const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
