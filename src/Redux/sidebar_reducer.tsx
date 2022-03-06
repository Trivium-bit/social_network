import { AppActionsType } from "./redux-store";

export type SidebarType = {}

let initialState = {}

const sidebarReducer = (state: SidebarType = initialState, action: AppActionsType) => {
    return state;
}

export default sidebarReducer;