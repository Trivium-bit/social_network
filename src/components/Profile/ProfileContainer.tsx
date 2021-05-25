import React from 'react';
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {AppStateType} from "../../Redux/redux-store";
import {getUserProfile} from "../../Redux/profile_reducer";

export type ProfileType = {
    id: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
 }

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type MapStateToPropsType = {
    profile: ProfileType
    setProfile: (profile: ProfileType) => void
    match: any
}

export type ProfileContainerProsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerProsType> {

    componentDidMount()
    {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}
let mapStatetoProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStatetoProps, {getUserProfile})(WithUrlDataContainerComponent)