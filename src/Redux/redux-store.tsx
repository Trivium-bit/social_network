import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionsType} from "./profile_reducer";
import dialogsReducer, {DialogActionsType} from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer, {UsersActionsType} from "./users-reducer";
import authReducer, {AuthActionsType} from "./auth_reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import appReducer from "./app_reducer";

export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer

});
export type AppActionsType = ProfileActionsType | AuthActionsType | DialogActionsType | UsersActionsType

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
//@ts-ignore
window.store = store

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispath = typeof store.dispatch


export default store;