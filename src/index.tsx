import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType} from './Redux/store'
import {BrowserRouter} from "react-router-dom"


let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());
store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state)});



