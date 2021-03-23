import React from 'react';
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom"
import {ActionsType, RootStateType} from './Redux/state';
import {StoreType} from './Redux/state'

type PropsType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
}

const App: React.FC<PropsType> = (props) => {

    let state = props.store.getState();

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs store={props.store} dispatch={props.store.dispatch.bind(props.store)} />}/>
                    <Route path="/profile" render={() => <Profile posts={state.profilePage.posts} dispatch={props.store.dispatch.bind(props.store)} newPostText={state.profilePage.newPostText} />}/>
                </div>
            </div>
        </BrowserRouter>);

}



export default App

