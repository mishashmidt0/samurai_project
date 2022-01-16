import React from 'react';
import { rerenderLink, stateForState } from "./redux/state";
import ReactDOM from 'react-dom';
import { App } from './App';
import { addMessage, addPost, changeMessageArea, changeProfileTextarea } from './redux/state'
import { BrowserRouter } from "react-router-dom";


export const renderLink = () => {
	ReactDOM.render (
		<BrowserRouter>
			<App state={ stateForState } addPost={ addPost }
			     addMessage={ addMessage }
			     changeProfileTextarea={ changeProfileTextarea }
			     changeMessageArea={ changeMessageArea }
			/>
		</BrowserRouter>
		, document.getElementById ( 'root' ),
	);
}

rerenderLink ( renderLink )
renderLink ()

