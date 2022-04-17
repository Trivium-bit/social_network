import React, { Suspense } from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, withRouter } from "react-router-dom"
import Login from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./Redux/app_reducer";
import store, { AppStateType } from "./Redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";

//import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import UsersContainer from "./components/Users/UsersContainer"

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

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
            return <Preloader />
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer />
                    <Navbar />
                    <div className="app-wrapper-content">
                        <Route path="/login" render={() => <Login />} />
                        <Route path="/profile" render={() => <ProfileContainer />} />
                        <Suspense fallback={<Preloader />}>
                            <Route path="/dialogs" render={() => <DialogsContainer />} />
                            <Route path="/users" render={() => <UsersContainer />} />
                        </Suspense>
                    </div>
                </div>
            </BrowserRouter>);
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp

