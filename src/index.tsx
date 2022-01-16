import React from 'react';
import { forState, store } from "./redux/state";
import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter } from "react-router-dom";


export const renderLink = ( state: forState ) => {
	ReactDOM.render (
		<BrowserRouter>
			<App state={ state }
			     addPost={ store.addPost.bind ( store ) }
			     changeMessageArea={ store.changeMessageArea.bind(store) }
			     addMessage={ store.addMessage.bind(store) }
			     changeProfileTextarea={ store.changeProfileTextarea.bind(store) }/>
		</BrowserRouter>
		, document.getElementById ( 'root' ),
	);
}
renderLink ( store.getState () )

store.subscribe ( renderLink )

