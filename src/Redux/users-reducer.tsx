import { Dispatch } from "react";
import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helper";

export type LocationType = {
    city: string
    country: string
}
type PhotosType = {
    small: string
    large: string
}

export type UsersType = {
    id: number
    name: string
    followed: boolean
    fullName: string
    status: string
    location: Array<LocationType>
    photos: PhotosType
}

export type InitialStateType = typeof initialState

export type UsersActionsType =
    FollowActionType |
    UnFollowActionType |
    SetUsersActionType |
    SetCurrentPageActionType |
    SetTotalUsersCountActionType |
    ToggleIsFetchingActionType |
    ToggleIsFollowingProgressType

export type FollowActionType = {
    type: typeof FOLLOW
    userId: number
}

export type UnFollowActionType = {
    type: typeof UNFOLLOW
    userId: number
}

export type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}

export type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    page: number
}

export type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}

export type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export type ToggleIsFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    totalUsersCount: 0,
    page: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
}

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS'

const usersReducer = (state: InitialStateType = initialState, action: UsersActionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
                /*   users: state.users.map(u => {
                      if (u.id === action.userId) {
                          return { ...u, followed: true }
                      }
                      return u;
                  }) */
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
                /*   users: state.users.map(u => {
                      if (u.id === action.userId) {
                          return { ...u, followed: false }
                      }
                      return u;
                  }) */
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                page: action.page
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId: number) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId: number) => ({ type: UNFOLLOW, userId })
export const setUsers = (users: Array<UsersType>) => ({ type: SET_USERS, users })
export const setCurrentPage = (page: number) => ({ type: SET_CURRENT_PAGE, page })
export const setTotalUsersCount = (totalUsersCount: number) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page))
        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}
const followUnfollowFlow = async (dispatch: Dispatch<any>, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}

export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReducer;