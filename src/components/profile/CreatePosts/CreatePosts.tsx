import s from './CreatePosts.module.css';

import React from 'react';


type forCreatePost = {
	addPost: ( value: string ) => void
}

export function CreatePost ( props: forCreatePost ) {

	const newPostElement: any = React.createRef ();
	const aadPost = () => {
		debugger
		const text = newPostElement.current.value;
		props.addPost ( text )
	}

	return (
		<section className={ s.createPost }>
			<img src="https://vk.com/images/camera_200.png" alt="logo" width={ 30 } height={ 30 }/>
			<textarea ref={ newPostElement } name="Posts" id="Posts" cols={ 30 } rows={ 10 } placeholder="  What`s new?"/>
			<div>
				<button onClick={ aadPost }>Create</button>
				<button>Remove</button>
			</div>

		</section>
	)
}

