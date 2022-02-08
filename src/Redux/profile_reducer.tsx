import { usersAPI, profileAPI } from "../api/api";
import { ProfileType } from "../components/Profile/ProfileContainer";
import { AppActionsType } from "./redux-store";

export type PostsType = {
    id: number
    message: string
    likesCount: number
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

export type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType
    status: string
}

const ADD_POST = 'ADD-POST';
/* const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'; */
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'


export const profileInitialState: ProfilePageType = {
    posts: [
        { id: 1, message: "Hi how are you?", likesCount: 12 },
        { id: 2, message: "Hi!", likesCount: 9 },
        { id: 3, message: "Go Dota?", likesCount: 50 },
        { id: 4, message: "Yo!", likesCount: 15 }
    ] as Array<PostsType>,
    newPostText: 'it-kamasutra.com',
    profile: {
        id: 'string',
        lookingForAJob: false,
        lookingForAJobDescription: 'string',
        fullName: 'string'
    },
    status: 'string'
    
}

export type ProfileActionsType = AddPostActionType | SetUserProfileActionType | SetStatusActionType | DeletePostActionCreator

export const profileReducer = (state: ProfilePageType = profileInitialState, action: AppActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostsType = { id: 5, message: action.newPostText, likesCount: 0 };
            return {
                ...state,
                posts: [...state.posts, newPost],
                //newPostText: " "
            };
        }
        case DELETE_POST: {
            return {
                ...state, posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        /* case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        } */
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText: string): AddPostActionType => ({
    type: ADD_POST, newPostText
});
export const deletePostAC = (postId: number): DeletePostActionCreator => ({
    type: DELETE_POST, postId
})
/* export const updateNewPostTextActionCreator = (newPostText: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT, newText: newPostText
}); */
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({
    type: SET_USER_PROFILE, profile
});
export const setStatus = (status: string): SetStatusActionType => ({
    type: SET_STATUS, status
});


export const getStatus = (userId: number) => (dispatch: any) => {
    profileAPI.getStatus(userId)
    .then(response => {
        dispatch(setStatus(response.data));
    })
}

export const updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status)
    .then(response => {
        if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
        }
    })
}

export const getUserProfile = (userId: number) => (dispatch: any) => {
    usersAPI.getProfile(userId)
    .then(response => {
        dispatch(setUserProfile(response.data));
    })
}

export default profileReducer;