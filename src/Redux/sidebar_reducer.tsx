import { AppActionsType } from "./redux-store";
import { SidebarType } from "./types";

let initialState = {}

const sidebarReducer = (state: SidebarType = initialState, action: AppActionsType) => {
    return state;
}
export default sidebarReducer;