import InitialStateType from './redux-store'
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

type AuthType = {
    id: number,
    email: string,
    login: string
    isAuth: boolean
}

type AuthType1 = {
    id: number,
    email: string,
    login: string
}

export type AuthActionsType = SetUserActionType
export type SetUserActionType = {
    type: 'SET_USER_DATA'
    data: AuthType1
}


let initialState = {
    id: null as null | number ,
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
export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {id, email, login}
})
export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me().then((response: any) => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    })
}

export default authReducer