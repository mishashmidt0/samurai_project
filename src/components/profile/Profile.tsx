import s from "./Profile.module.css"
import Info from './myinfo/Info'
import Photo from './photo/Photo';
import React from 'react';
import {SuperCreatePostContainer} from "./CreatePosts/CreatePostsContainer";


type forPropsProfile = {
    // state: forState;
    // dispatch: (action: forAction) => void
}

function Profile(props: forPropsProfile) {
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

