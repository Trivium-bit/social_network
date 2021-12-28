import { AppStateType } from "./redux-store";
import { createSelector } from "reselect"

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users;
}

// в createSelector первым параметром закидываем Selector 'getUsers'
// далее зависимости 'users'

// export const getUsersSuperSelector = createSelector(getUsers, (users) => {
// return users.filter (u => true);
// })

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.page;
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching;
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress;
}