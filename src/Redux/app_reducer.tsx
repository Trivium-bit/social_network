import { getAuthUserData } from "./auth_reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';

export type InitializedType = {
    initialized: boolean
}
export type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

let initialState: InitializedType = {
    initialized: false
}

export type InitialStateType = typeof initialState

const appReducer = (state: InitialStateType = initialState, action: InitializedSuccessActionType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS}) as const

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess());
    });
}

export default appReducer