import s from "./Profile.module.css"
import { CreatePost } from './CreatePosts/CreatePosts'
import Info from './myinfo/Info'
import Photo from './photo/Photo';
import React from 'react';
import { Post } from "./Post/Post";
import { forAction, forState } from "../../redux/state";


type forPropsProfile = {
	state: forState;
	dispatch: ( action: forAction ) => void
}

function Profile ( props: forPropsProfile ) {

	return (
		<div className={ s.content }>
			<Photo/>
			<div>
				<Info status="I like a dog"/>
				<CreatePost state={ props.state } dispatch={ props.dispatch }/>
				{ props.state.profile.postData.map ( ( p ) => <Post messages={ p.post }/> ) }
			</div>
		</div>
	)
}

export default Profile;

