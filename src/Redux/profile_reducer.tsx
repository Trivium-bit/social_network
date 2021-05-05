import {PostsType, ActionsType, AddPostActionType, ChangeNewTextActionType} from './store'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

let initialState = {
    posts: [
        {id: 1, message: "Hi how are you?", likesCount: 12},
        {id: 2, message: "Hi!", likesCount: 9},
        {id: 3, message: "Go Dota?", likesCount: 50},
        {id: 4, message: "Yo!", likesCount: 15}
    ] as Array<PostsType>,
    newPostText: 'it-kamasutra.com'
}
export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: " "
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;

    }
}
export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (newPostText: string): ChangeNewTextActionType => ({
    type: UPDATE_NEW_POST_TEXT, newText: newPostText
})

export default profileReducer;