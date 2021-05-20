import InitialStateType from './redux-store'
import {ActionsType} from './store'

const SET_USER_DATA = 'SET_USER_DATA';

type AuthType = {
        id: number,
        email: string,
        login: string
        isAuth: boolean 
}

type AuthUsersType = {
    data: Array<AuthType>
}

export type SetUserActionType = {
    type: 'SET_USER_DATA'
    id: number
    email: string
    login: string
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false 
   }
 
export type InitialStateType = typeof initialState

const authReducer = (state: InitialStateType = initialState, action: SetUserActionType) => {
switch(action.type) {
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

export const setAuthUserData = (id, email, login): AuthUsersType => ({type: SET_USER_DATA, data: {id, email, login}})

export default authReducer