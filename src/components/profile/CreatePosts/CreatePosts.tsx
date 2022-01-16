import s from './CreatePosts.module.css';

import React from 'react';
import { forPostData } from "../../../redux/state";


type forCreatePost = {
	addPost: () => void
	changeTextarea: ( change: string ) => void
	statePeofile: { postData: forPostData, changeText: string };
}

export function CreatePost ( props: forCreatePost ) {

	const newPostElement: any = React.createRef ();

	const aadPost = (): void => {
		props.addPost ( );
	}
	const changeText = (): void => {
		const change = newPostElement.current.value;
		props.changeTextarea ( change )
	}

	return (
		<section className={ s.createPost }>
			<img src="https://vk.com/images/camera_200.png" alt="logo" width={ 30 } height={ 30 }/>
			<textarea onChange={ changeText } value={ props.statePeofile.changeText } ref={ newPostElement } name="Posts" id="Posts" cols={ 30 } rows={ 10 } placeholder="  What`s new?"/>
			<div>
				<button onClick={ aadPost }>Create</button>
				<button>Remove</button>
			</div>

		</section>
	)
}

