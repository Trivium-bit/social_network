import React from 'react';
import Header from './Header'
import {connect} from 'react-redux';
import {AppStateType} from "../../Redux/redux-store";
import {getAuthUserData} from "../../Redux/auth_reducer";

type MapDispatchPropsType = {
    getAuthUserData: () => void
}
type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
export type AuthMePropsType = MapStateToPropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<AuthMePropsType> {

    componentDidMount() {
     this.props.getAuthUserData();
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);