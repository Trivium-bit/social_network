import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

export type DataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type SetUserActionType = {
    type: 'SET_USER_DATA'
    data: DataType
}

export type AuthActionsType = SetUserActionType

let initialState: DataType = {
    id: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false
}

export type InitialStateType = typeof initialState
const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
}) as const

export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me().then((response: any) => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    })
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then((response: any) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}
export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then((response: any) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            } else {
                dispatch(stopSubmit("login", {_error: "Common error"}))
            }
        })
}

export default authReducer