import React from 'react'
import {updateNewMessageTextCreator, sendMessageCreator} from "./../../Redux/dialogs_reducer"
import {DialogPageType, StoreType} from '../../Redux/store'
import {ActionsType} from '../../Redux/store'
import Dialogs from "./Dialogs";
import StoreContext from '../../StoreContext';


type PropsType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
    dialogPage: DialogPageType
}

const DialogsContainer = () => {

       return <StoreContext.Consumer>
           { (store )=> {
               let state = store.getState().dialogPage;

               let onSendMessageClick = () => {
                   store.dispatch(sendMessageCreator())
               };
               let onChangeMessage = (text: string) => {
                   store.dispatch(updateNewMessageTextCreator(text))
               };

               return <Dialogs updateNewMessageBody={onChangeMessage}
                               sendMessage={onSendMessageClick}
                               dialogPage={state}/>
           }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;
