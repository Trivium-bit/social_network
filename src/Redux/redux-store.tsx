import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import {StoreType} from "./store";
import usersReducer from "./users-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(rootReducer);
//@ts-ignore
window.store = store

export type AppStateType = ReturnType<typeof rootReducer>

export default store;