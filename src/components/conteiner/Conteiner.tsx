import Nav from '../navigation/Navigation';
import Profile from '../profile/Profile';
import NotFound from '../notfound/NotFound';

import s from './Conteiner.module.css';
import { Route, Routes } from 'react-router-dom';
import { Messages } from "../messsages/Messsages";
import React from 'react';
import { forProps } from "../../App";


function Conteiner ( props: forProps ) {
	return (
		<div className={ s.conteiner }>
			<Nav/>
			<div className={ s.conteiner }>
				<Routes>
					<Route path="/profile" element={ <Profile profile={ props.state.profile } addPost={props.addPost}/> }/>
					<Route path="/messages/*" element={ <Messages messages={ props.state.messages } addMessage={props.addMessage}/> }/>
					<Route path="*" element={ <NotFound/> }/>
				</Routes>
			</div>
		</div>

	)
}

export default Conteiner;
