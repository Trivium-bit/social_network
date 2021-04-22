import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import {StoreType} from "./store";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer
});

let store: StoreType = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>
///
export default store;