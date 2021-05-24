import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from  ""

export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(rootReducer, applyMiddleware());
//@ts-ignore
window.store = store

export type AppStateType = ReturnType<typeof rootReducer>

export default store;