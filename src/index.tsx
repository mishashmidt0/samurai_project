import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import {store} from './redux/redux-store';


// export const renderLink = () => {
ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
</BrowserRouter>, document.getElementById('root'))
// };

// renderLink();

// store.subscribe(() => {
//     renderLink()
// });
//
//
// reportWebVitals();
