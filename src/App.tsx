import './App.css';
import Header from './components/header/Header';
import Conteiner from './components/conteiner/Conteiner';
import React from 'react';
import { forAction, forState } from "./redux/state";


export type forProps = {
	state: forState;
	dispatch: ( action: forAction ) => void;
}

export function App ( props: forProps ){
	return ( <div className="wrapper">
			<Header/>
			<Conteiner state={ props.state }
			           dispatch={ props.dispatch }/>
		</div>

	);
}
