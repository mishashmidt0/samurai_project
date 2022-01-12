import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { addMessage, addPost, stateForState } from './redux/state'
import { BrowserRouter } from "react-router-dom";


ReactDOM.render (
	<BrowserRouter>
		<App state={ stateForState } addPost={ addPost } addMessage={addMessage}/>
	</BrowserRouter>
	, document.getElementById ( 'root' ),
);


