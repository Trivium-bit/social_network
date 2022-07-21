import React, { Suspense } from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./Redux/app_reducer";
import store, { AppStateType } from "./Redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";
import s from "./AppWrapper.module.css";
import { Route, withRouter } from 'react-router';
import { BrowserRouter} from 'react-router-dom';

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
                <div className={s.appWrapper}>
                    <div className={s.header}>
                        <HeaderContainer />
                    </div>

                    <div className={s.content}>
                        <div className={s.navbar}>
                            <Navbar />
                        </div>

                        <div className={s.main}>
                            <Route path="/login" component={() => <Login />} />
                            <Route path="/profile" component={() => <ProfileContainer />} />
                            <Suspense fallback={<Preloader />}>
                                <Route path="/dialogs" component={() => <DialogsContainer />} />
                                <Route path="/users" component={() => <UsersContainer />} />
                            </Suspense>
                        </div>


                    </div>
                </div>
            </BrowserRouter >);
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

