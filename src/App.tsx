import './App.css';
import Header from './components/header/Header';
import Conteiner from './components/conteiner/Conteiner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Profile from "./components/profile/Profile";
import NotFound from "./components/notfound/NotFound";
import { Messages } from "./components/messsages/Messsages";


export function App () {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Header/>
				<Conteiner/>
			</div>
		</BrowserRouter>

	);
}
