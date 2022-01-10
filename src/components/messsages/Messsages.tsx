import React from 'react';
import s from './Messsages.module.css'
import { Link } from "react-router-dom";


export function Messages () {
	return (
		<div className={ s.messages }>
			<div className="dialogs">
				<div className={ s.dialog }>
					<Link to="/messages/1">Lex</Link>
				</div>
				<div className={ s.dialog }>
					<Link to="/messages/2">Nika</Link>
				</div>
				<div className={ s.dialog }>
					<Link to="/messages/3">Misha</Link>
				</div>
				<div className={ s.dialog }>
					<Link to="/messages/4">Anna</Link>
				</div>
				<div className={ s.dialog }>
					<Link to="/messages/5">Max</Link>
				</div>
			</div>
			<div className="messages">
				<div className={ s.message }>Hi</div>
				<div className={ s.message }>Hello</div>
				<div className={ s.message }>where are you ?</div>
				<div className={ s.message }>fine and you ?</div>
			</div>
		</div>

	)
}

