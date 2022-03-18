import s from './CreatePosts.module.css';
import React, {ChangeEvent} from 'react';
import {Post} from "../Post/Post";
import {forPostData} from "../../../redux/Store";


type forCreatePost = {
    chengeMessageTextArea: (text: string) => void
    addPost: (text: string) => void
    changeText: string
    postData: forPostData
}

export function CreatePost(props: forCreatePost) {

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        let text = e.currentTarget.value
        props.chengeMessageTextArea(text)
        // props.dispatch({type: 'CHANGE-PROFILE', chengeProfileTextArea: e.currentTarget.value})
    }
    return (
        <section className={s.createPost}>
            <img src="https://vk.com/images/camera_200.png" alt="logo" width={30} height={30}/>
            <textarea onChange={onPostChange} value={props.changeText} name="Posts" id="Posts" cols={30} rows={10} placeholder="  What`s new?"/>

            <div>
                <button onClick={() => props.addPost(props.changeText)}>Create</button>
                <button>Remove</button>
            </div>

            {props.postData.map((p) => <Post messages={p.post} key={p.id}/>)}
        </section>
    )
}

