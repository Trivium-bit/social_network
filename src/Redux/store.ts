import profileReducer from './profile_reducer'
import dialogsReducer from './dialogs_reducer'
import sidebarReducer from './sidebar_reducer'


type MessageType = {
    id: number
    message: string
}

type DialogsType = {
    id: number
    name: string*/

}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
}

type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    subscribe: (observer: (state: RootStateType) => void) => void
    _callSubscriber: (state: RootStateType) => void
    dispatch: (action: ActionsType) => void
}

export type ActionsType = AddPostActionType | ChangeNewTextActionType | SendMessageType | UpdateNewMessageTextType

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type SendMessageType = {
    type: 'SEND-MESSAGE'

}
export type UpdateNewMessageTextType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessage: string
}


export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi how are you?", likesCount: 12},
                {id: 2, message: "Hi!", likesCount: 9},
                {id: 3, message: "Go Dota?", likesCount: 50},
                {id: 4, message: "Yo!", likesCount: 15}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogPage: {
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
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber(state) {
        console.log("state changed");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;

//@ts-ignore
window.store = store;