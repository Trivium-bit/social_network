import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingProgress,
    getUsers
} from '../../Redux/users-reducer';
import {UsersType} from "./../../Redux/users-reducer"
import {AppStateType} from './../../Redux/redux-store'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from 'redux';

type MapStateToPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    users: Array<UsersType>
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   isFetching={this.props.isFetching}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

/* export default withAuthRedirect(connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingProgress,
    getUsers
})(UsersContainer)); */

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        // рефакторим mapDispatchToProps (сокращаем код)
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleFollowingProgress,
        getUsers
    })
)(UsersContainer)