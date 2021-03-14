import store from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType} from './Redux/state'
import {BrowserRouter} from "react-router-dom"
import {StoreType} from './Redux/state'

    let rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
        <App store={store}
             addPost={store.addPost.bind(store)}
             updateNewPostText={store.updateNewPostText.bind(store)} />
        </BrowserRouter>, document.getElementById('root'));
}

store.subscribe(rerenderEntireTree);

rerenderEntireTree(store.getState());

