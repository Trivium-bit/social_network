export type MessageType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

export type ProfilePageType = {
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

export type ActionsType = AddPostActionType | ChangeNewTextActionType

type AddPostActionType = {
    type: 'ADD-POST'
    }

type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string

}

let store: StoreType = {
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
            ]
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
        if (action.type === 'ADD-POST') {
            let newPost: PostsType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = " ";
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;

//@ts-ignore
window.store = store