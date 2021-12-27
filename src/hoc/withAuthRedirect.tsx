import React, {ComponentType} from 'react';
import {Redirect} from "react-router";
import {AppStateType} from "../Redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = ( state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to='/login'/>
        return <Component {...restProps as T} />
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectedRedirectComponent;
}