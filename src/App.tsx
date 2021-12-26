import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {BrowserRouter, Route, withRouter} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer"
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app_reducer";
import {AppStateType} from "./Redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";

type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchPropsType = {
    initializeApp: () => void
}
export type InitialPropsType = MapStateToPropsType & MapDispatchPropsType

class App extends React.Component<InitialPropsType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/profile" render={() => <ProfileContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>);
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App);

