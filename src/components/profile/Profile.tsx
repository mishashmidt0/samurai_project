import s from "./Profile.module.css"
import { CreatePost } from './Posts/CreatePosts'
import Info from './myinfo/Info'
import Photo from '../photo/Photo';
import React from 'react';
import { Post } from "./Posts/Post/Post";


function Profile () {
	return (
		<div className={ s.content }>
			<Photo/>
			<div>
				<Info status="I like a dog"/>
				<CreatePost/>
				<Post messages="Hello it's my first post"/>
				<Post messages="How are you?"/>
				<Post messages="I am play chess"/>
			</div>
		</div>
	)
}

export default Profile;

