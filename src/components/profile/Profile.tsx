import s from "./Profile.module.css"
import { CreatePost } from './CreatePosts/CreatePosts'
import Info from './myinfo/Info'
import Photo from './photo/Photo';
import React from 'react';
import { Post } from "./Post/Post";
import { forPostData } from "../../redux/state";


type forPropsProfile = {
	profile: { postData: forPostData, changeText: string };
	addPost: () => void;
	changeProfileTextarea: ( change: string ) => void;
}

function Profile ( props: forPropsProfile ) {
	return (
		<div className={ s.content }>
			<Photo/>
			<div>
				<Info status="I like a dog"/>
				<CreatePost addPost={ props.addPost } changeTextarea={ props.changeProfileTextarea } statePeofile={ props.profile }/>
				{ props.profile.postData.map ( ( p ) => <Post messages={ p.post }/> ) }
			</div>
		</div>
	)
}

export default Profile;

