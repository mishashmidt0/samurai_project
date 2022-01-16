import './App.css';
import Header from './components/header/Header';
import Conteiner from './components/conteiner/Conteiner';
import React from 'react';
import { forState } from "./redux/state";


export type forProps = {
	state: forState;
	addPost: () => void,
	addMessage: () => void,
	changeProfileTextarea: ( change: string ) => void,
	changeMessageArea: ( change: string ) => void,
}

export function App ( props: forProps ) {
	return (

		<div className="wrapper">
			<Header/>
			<Conteiner state={ props.state }
			           addPost={ props.addPost }
			           changeMessageArea={ props.changeMessageArea }
			           addMessage={ props.addMessage }
			           changeProfileTextarea={ props.changeProfileTextarea }/>
		</div>

	)
		;
}
