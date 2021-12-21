import { getAuthUserData } from "./auth_reducer";

const INITIALIZED_SUCCCESS = 'INITIALIZED_SUCCCESS';

export type InitializedType = {
    initialized: boolean
}
export type InitializedSuccessActionType = {
    type: 'INITIALIZED_SUCCCESS'
}


let initialState: InitializedType = {
    initialized: false
}

export type InitialStateType = typeof initialState
const appReducer = (state: InitialStateType = initialState, action: InitializedSuccessActionType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}
export const initializedSuccess = () => ({type: INITIALIZED_SUCCCESS}) as const

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess());
    });
}

export default appReducer