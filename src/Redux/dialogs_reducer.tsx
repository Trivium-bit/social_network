/* export type UpdateNewMessageTextType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessage: string
} */
export type SendMessageType = {
    type: 'SEND-MESSAGE'
    newMessageText: string
}

export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
export const SEND_MESSAGE = 'SEND-MESSAGE'

export type MessageType = {
    id: number
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
        { id: 1, message: "Hi!" },
        { id: 2, message: "Hello my frieds!" },
        { id: 3, message: "Go Dota?" },
        { id: 4, message: "Yes!" },
        { id: 5, message: "La-la-la" }
    ] as Array<MessageType>,
    newMessageText: 'it-kamasutra.com'
}

export type InitialStateType = typeof initialState
export type DialogActionsType = SendMessageType
const dialogsReducer = (state: InitialStateType = initialState, action: DialogActionsType): InitialStateType => {

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
                messages: [...state.messages, { id: 6, message: text }],
            };
        default:
            return state;
    }
}

export const sendMessageAC = (newMessageText: string): SendMessageType => ({ type: SEND_MESSAGE, newMessageText })

export default dialogsReducer;