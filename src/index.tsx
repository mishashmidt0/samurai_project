import React from 'react';
import { forState, store } from "./redux/state";
import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter } from "react-router-dom";


export const renderLink = ( state: forState ) => {
	ReactDOM.render (
		<BrowserRouter>
			<App state={ state }
			     dispatch ={ store.dispatch.bind ( store ) }/>
		</BrowserRouter>
		, document.getElementById ( 'root' ),
	);
}

renderLink ( store.getState () )

store.subscribe ( renderLink )

