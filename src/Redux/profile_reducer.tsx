import { RootStateOrAny } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { usersAPI, profileAPI } from "../api/api";
import { AppActionsType, AppStateType } from "./redux-store";

interface ContactsObjectKeys {
    [key: string]: string
}

interface ContactsType extends ContactsObjectKeys {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType
    status: string
}
export type ProfileType = {
    id: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    photos: PhotoType
    aboutMe: string
    contacts: ContactsType
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type PhotoType = {
    small: string
    large: string
}

export const profileInitialState: ProfilePageType = {
    posts: [
        { id: 1, message: "Hi how are you?", likesCount: 12 },
        { id: 2, message: "Hi!", likesCount: 9 },
        { id: 3, message: "Go Dota?", likesCount: 50 },
        { id: 4, message: "Yo!", likesCount: 15 }
    ] as Array<PostsType>,
    newPostText: 'it-kamasutra.com',
    profile: {
        id: 0,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        photos: {
            small: '',
            large: ''
        },
        aboutMe: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
    },
    status: ''
}

export type ProfileActionsType = AddPostActionType | GetUserProfileActionType | SetStatusActionType | DeletePostActionCreator | SavePhotoSuccessActionType

export const profileReducer = (state: ProfilePageType = profileInitialState, action: AppActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostsType = { id: Date.now(), message: action.newPostText, likesCount: 0 };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: " "
            };
        }
        case DELETE_POST: {
            return { ...state, posts: state.posts.filter(p => p.id != action.postId) }
        }
        /* case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        } */
        case SET_STATUS: {
            return { ...state, status: action.status };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        case SAVE_PHOTO_SUCCESS: {
            return { ...state, profile: { ...state.profile, photos: action.photos } };
        }
        default:
            return state;
    }
}

//ActionCreators
export const addPostActionCreator = (newPostText: string): AddPostActionType => ({ type: ADD_POST, newPostText });
export const deletePostAC = (postId: number): DeletePostActionCreator => ({ type: DELETE_POST, postId })
/* export const updateNewPostTextActionCreator = (newPostText: string): UpdateNewPostTextActionType => ({type: UPDATE_NEW_POST_TEXT, newText: newPostText}); */
export const setUserProfileAC = (profile: ProfileType): GetUserProfileActionType => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status });
export const savePhotoSuccessAC = (photos: PhotoType): SavePhotoSuccessActionType => ({ type: SAVE_PHOTO_SUCCESS, photos });

//Thunks
export const getStatus = (userId: number) => async (dispatch: Dispatch<SetStatusActionType>) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status: string) => async (dispatch: Dispatch<SetStatusActionType>) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const getUserProfile = (userId: number) => async (dispatch: Dispatch<GetUserProfileActionType>) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfileAC(response.data));
}

export const savePhoto = (file: any) => async (dispatch: Dispatch<SavePhotoSuccessActionType>) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccessAC(response.data.data.photos));
    }
}
export const saveProfile = (profile: ProfileType): ThunkAction<void, AppStateType, unknown, AnyAction> => async dispatch => {
    // const userId = getState().auth.userId
    const userId = profile.id
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.message[0]}));
        return Promise.reject(response.data.message[0])
    }
}

export type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export type DeletePostActionCreator = {
    type: typeof DELETE_POST
    postId: number
}
/* 
export type UpdateNewPostTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
} */
export type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export type GetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotoType
}

const ADD_POST = 'profile/ADD-POST';
/* const UPDATE_NEW_POST_TEXT = 'profile/UPDATE-NEW-POST-TEXT'; */
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'
const SAVE_PROFILE = 'profile/SAVE_PROFILE'

export default profileReducer;