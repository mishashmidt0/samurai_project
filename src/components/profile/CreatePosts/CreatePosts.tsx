import s from './CreatePosts.module.css';

import React, { ChangeEvent } from 'react';
import { forAction, forState } from "../../../redux/Store";


type forCreatePost = {
	state: forState;
	dispatch: ( action: forAction ) => void;
}

export function CreatePost ( props: forCreatePost ) {

	const aadPost = (): void => {
		props.dispatch ( { type: 'ADD-POST' } );
	}
	const changeText = ( e: ChangeEvent<HTMLTextAreaElement> ): void => {
		props.dispatch ( { type: 'CHANGE-PROFILE', chengeProfileTextArea: e.currentTarget.value } )
	}

	return (
		<section className={ s.createPost }>
			<img src="https://vk.com/images/camera_200.png" alt="logo" width={ 30 } height={ 30 }/>
			<textarea onChange={ changeText } value={ props.state.profile.changeText } name="Posts" id="Posts" cols={ 30 } rows={ 10 } placeholder="  What`s new?"/>
			<div>
				<button onClick={ aadPost }>Create</button>
				<button>Remove</button>
			</div>

		</section>
	)
}

