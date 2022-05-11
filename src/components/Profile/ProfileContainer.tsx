import React from 'react';
import Profile from "./Profile";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { AppStateType } from "../../Redux/redux-store";
import { getUserProfile, getStatus, updateStatus, PhotoType, ProfileType, savePhoto } from "../../Redux/profile_reducer";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: ({ }) => void
}

type MapStateToPropsType = {
    profile: ProfileType
    match: any
    isAuth: boolean
    status: string
    authorizedUserId: number

}
export type ProfileContainerProsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps

class ProfileContainer extends React.Component<ProfileContainerProsType> {

    refreshProfile() {
        let userId = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        } if (!userId) {
            this.props.history.push("/login");
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(props: MapStateToPropsType) {
        if (+this.props.match.params.userId != props.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto} />
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

/* let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)) */

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)