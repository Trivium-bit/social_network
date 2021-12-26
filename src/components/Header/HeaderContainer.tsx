import React from 'react';
import Header from './Header'
import {connect} from 'react-redux';
import {AppStateType} from "../../Redux/redux-store";
import {logout} from "../../Redux/auth_reducer";

type MapDispatchPropsType = {
    logout: any
}
type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

export type AuthMePropsType = MapStateToPropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<AuthMePropsType> {

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {logout})(HeaderContainer);