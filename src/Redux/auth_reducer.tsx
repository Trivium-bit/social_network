import InitialStateType from './redux-store'

const SET_USER_DATA = 'SET_USER_DATA';

type AuthType = {
    id: number,
    email: string,
    login: string
    isAuth: boolean
}

export type SetUserActionType = {
    type: 'SET_USER_DATA'
    data: Array<AuthType>
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export type InitialStateType = typeof initialState

const authReducer = (state: InitialStateType = initialState, action: SetUserActionType) => {
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

export default authReducer