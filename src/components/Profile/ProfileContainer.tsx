import React from 'react';
import Profile from "./Profile";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {AppStateType} from "../../Redux/redux-store";
import {getUserProfile} from "../../Redux/profile_reducer";
import { Redirect } from 'react-router';

export type ProfileType = {
    id: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}

type MapStateToPropsType = {
    profile: ProfileType
    match: any
    isAuth: boolean
}
export type ProfileContainerProsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps

class ProfileContainer extends React.Component<ProfileContainerProsType> {

    componentDidMount()
    {
        let userId = +this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }
    render() {
        if (!this.props.isAuth) return <Redirect to='/login'/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStatetoProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStatetoProps, {getUserProfile})(WithUrlDataContainerComponent)