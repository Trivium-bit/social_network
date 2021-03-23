import {ActionsType, DialogPageType, SendMessageType, UpdateNewMessageTextType} from "./state";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state: DialogPageType, action: ActionsType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        case SEND_MESSAGE:
            let text = state.newMessageText
            state.newMessageText = " ";
            state.messages.push({id: 6, message: text});
            return state;
        default:
            return state;
    }
}


export const sendMessageCreator = (): SendMessageType => ({type: SEND_MESSAGE})

export const updateNewMessageTextCreator = (text: string): UpdateNewMessageTextType => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text
})


export default dialogsReducer;