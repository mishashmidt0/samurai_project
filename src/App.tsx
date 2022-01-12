import './App.css';
import Header from './components/header/Header';
import Conteiner from './components/conteiner/Conteiner';
import React from 'react';
import { forState } from "./redux/state";


export type forProps = {
	state: forState;
	addPost: ( post: string ) => void,
	addMessage: ( message: string ) => void,
}

export function App ( props: forProps ) {
	return (

		<div className="wrapper">
			<Header/>
			<Conteiner state={ props.state } addPost={ props.addPost } addMessage={props.addMessage}/>
		</div>

	)
		;
}
