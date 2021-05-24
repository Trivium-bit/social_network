import {PostsType, ChangeNewTextActionType} from './store'
import {usersAPI} from "../api/api";
import {ProfileType} from "../components/Profile/ProfileContainer";


export type InitialStateType = typeof initialState

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType | SetUserProfileActionType

export type AddPostActionType = {
    type: 'ADD_POST'
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}
export type SetUserProfileActionType = {
    type: 'SET_USER_PROFILE'
    profile: ProfileType
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {id: 1, message: "Hi how are you?", likesCount: 12},
        {id: 2, message: "Hi!", likesCount: 9},
        {id: 3, message: "Go Dota?", likesCount: 50},
        {id: 4, message: "Yo!", likesCount: 15}
    ] as Array<PostsType>,
    newPostText: 'it-kamasutra.com' as string
}


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
        case SET_USER_PROFILE: {
            return {...state, newPostText: action.profile};
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId: number) => (dispatch: any) =>{
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}
export const updateNewPostTextActionCreator = (newPostText: string): ChangeNewTextActionType => ({
    type: UPDATE_NEW_POST_TEXT, newText: newPostText
})

export default profileReducer;