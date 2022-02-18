import React from 'react';
import {forState, store} from "./redux/Store";
import ReactDOM from 'react-dom';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";


export const renderLink = (state: forState) => {
    ReactDOM.render(<BrowserRouter>
        <App state={state}
             dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>, document.getElementById('root'));
};

renderLink(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderLink(state)
});


reportWebVitals();
