import { v1 } from "uuid"

/* export type UpdateNewMessageTextType = {
    type: 'dialogs/UPDATE-NEW-MESSAGE-TEXT'
    newMessage: string
} */

export type SendMessageType = {
    type: typeof SEND_MESSAGE
    newMessageText: string
}
export type DeleteMessageType = {
    type: typeof DELETE_MESSAGE
    messageId: string
}

export const UPDATE_NEW_MESSAGE_TEXT = 'dialogs/UPDATE-NEW-MESSAGE-TEXT'
export const SEND_MESSAGE = 'dialogs/SEND-MESSAGE'
export const DELETE_MESSAGE = 'dialogs/DELETE-MESSAGE'

export type MessageType = {
    id: string
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
}

let initialState = {
    dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Andrey" },
        { id: 4, name: "Sveta" },
        { id: 5, name: "Igor" }
    ] as Array<DialogsType>,
    messages: [
        { id: v1(), message: "Hi!" },
        { id: v1(), message: "Hello my frieds!" },
        { id: v1(), message: "Go Dota?" },
        { id: v1(), message: "Yes!" },
        { id: v1(), message: "La-la-la" }
    ] as Array<MessageType>,
    newMessageText: 'it-kamasutra.com'
}

export type InitialStateType = typeof initialState
export type DialogActionsType = SendMessageType | DeleteMessageType
export const dialogsReducer = (state: InitialStateType = initialState, action: DialogActionsType): InitialStateType => {
    switch (action.type) {
        /*  case UPDATE_NEW_MESSAGE_TEXT:
             return {
                 ...state,
                 newMessageText: action.newMessage
             }; */
        case SEND_MESSAGE:
            let text = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, { id: v1(), message: text }],
            };
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(m => m.id !== action.messageId)
            };
        default:
            return state;
    }
}

export const sendMessageAC = (newMessageText: string): SendMessageType => ({ type: SEND_MESSAGE, newMessageText })
export const deleteMessageAC = (messageId: string): DeleteMessageType => ({ type: DELETE_MESSAGE, messageId })

export default dialogsReducer;