import React from 'react';
import Header from './Header'

import {connect} from 'react-redux';
import axios from 'axios';
import {AppStateType} from "../../Redux/redux-store";
import {setAuthUserData} from "../../Redux/auth_reducer";

type MapDispatchPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}


export type AuthMePropsType = MapStateToPropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<AuthMePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response: any) => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);