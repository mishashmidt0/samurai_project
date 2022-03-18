import s from "./Profile.module.css"
import Info from './myinfo/Info'
import Photo from './photo/Photo';
import React from 'react';
import {SuperCreatePostContainer} from "./CreatePosts/CreatePostsContainer";
import {profileType} from "../../redux/profile-reducer";



type forPropsProfile = {
    profile: profileType
    setUserProfile: (data: profileType) => void
}

function Profile(props: forPropsProfile) {
    console.log(props)
    return (
        <div className={s.content}>
            <Photo/>
            <div>
                <Info myName={"Misha Shmidt"} status="I like a dog" languages={"Russian"}/>
                <SuperCreatePostContainer
                    // changeText={props.state.profile.changeText}
                    // dispatch={props.dispatch}
                />
                {/*{props.state.profile.postData.map((p) => <Post messages={p.post}/>)}*/}
            </div>
        </div>
    )
}

export default Profile;

