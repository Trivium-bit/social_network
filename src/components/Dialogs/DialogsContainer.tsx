import React from 'react'
import {updateNewMessageTextCreator, sendMessageCreator} from "./../../Redux/dialogs_reducer"
import {DialogPageType, StoreType} from '../../Redux/store'
import {ActionsType} from '../../Redux/store'
import Dialogs from "./Dialogs";
import {connect} from "net";

type PropsType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
    dialogPage: DialogPageType
}

let mapStateToProps = (state) => {
        return{
        dialogPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (text) => {
            dispatch(updateNewMessageTextCreator(text))
        }
    }
}
    const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
