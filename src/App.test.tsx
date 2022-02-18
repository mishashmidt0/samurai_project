import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import { v1 } from "uuid";


const state = {
	profile: {
		postData: [ { id: v1 (), post: "Hello it's my first post" }, { id: v1 (), post: "How are you?" }, { id: v1 (), post: 'I`m fine and you?' }, { id: v1 (), post: "I am play chess" }, {
			id: v1 (), post: 'Good',
		}, { id: v1 (), post: 'Good-bye' } ], changeText: "it-incubator",
	}, messages: {
		messageData: [ { id: v1 (), message: 'Hi' }, { id: v1 (), message: 'Where are you?' }, { id: v1 (), message: 'I`m fine and you?' }, { id: v1 (), message: 'Nice' }, { id: v1 (), message: 'Good' }, {
			id: v1 (), message: 'Good-bye',
		} ], dailogsData: [ { id: v1 (), name: 'Misha', avatar: 1 }, { id: v1 (), name: 'Nika', avatar: 2 }, { id: v1 (), name: 'Max', avatar: 3 }, { id: v1 (), name: 'Anna', avatar: 4 }, {
			id: v1 (), name: 'Lex', avatar: 5,
		}, { id: v1 (), name: 'Mila', avatar: 6 } ], changeMessagesArea: '',
	},
};

test ( 'renders learn react link', () => {
	render ( <App state={ state } key={ v1 () } dispatch={ () => {
	} }/> );
	const linkElement = screen.getByText ( /learn react/i );
	expect ( linkElement ).toBeInTheDocument ();
} );
