import {usersAPI} from "../api/api";
import {ProfileType} from "../components/Profile/ProfileContainer";
import { AppActionsType } from "./redux-store";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type AddPostActionType = {
    type: typeof ADD_POST
}

export type UpdateNewPostTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

export type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType
}

export const profileInitialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi how are you?", likesCount: 12},
        {id: 2, message: "Hi!", likesCount: 9},
        {id: 3, message: "Go Dota?", likesCount: 50},
        {id: 4, message: "Yo!", likesCount: 15}
    ] as Array<PostsType>,
    newPostText: 'it-kamasutra.com',
    profile: {
        id: 'string',
        lookingForAJob: false,
        lookingForAJobDescription: 'string',
        fullName: 'string'
    }
}

export type ProfileActionsType = AddPostActionType | UpdateNewPostTextActionType | SetUserProfileActionType

const profileReducer = (state: ProfilePageType = profileInitialState, action: AppActionsType): ProfilePageType => {
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
            return {...state, profile: action.profile};
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (): AddPostActionType => ({
    type: ADD_POST});
export const updateNewPostTextActionCreator = (newPostText: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT, newText: newPostText});
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({
    type: SET_USER_PROFILE, profile});
export const getUserProfile = (userId: number) => (dispatch: any) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}

export default profileReducer;