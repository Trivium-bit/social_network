import {ActionsType, DialogPageType, SendMessageType, UpdateNewMessageTextType} from "./store";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Sveta"},
        {id: 5, name: "Igor"}
    ],
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "Hello my frieds!"},
        {id: 3, message: "Go Dota?"},
        {id: 4, message: "Yes!"},
        {id: 5, message: "La-la-la"}
    ],
    newMessageText: 'it-kamasutra.com'
}

const dialogsReducer = (state: DialogPageType = initialState, action: ActionsType) => {

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