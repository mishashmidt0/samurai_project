import s from './CreatePosts.module.css';
import React, {ChangeEvent} from 'react';
import {Post} from "../Post/Post";
import {forPostData} from "../../../redux/Store";
import {profileType} from "../../../redux/profile-reducer";
import Photo from "../photo/Photo";
import Info from "../myinfo/Info";
import {Preloader} from "../../common/Preloader";


type forCreatePost = {
    chengeMessageTextArea: (text: string) => void
    addPost: (text: string) => void
    changeText: string
    postData: forPostData
    profile: profileType | null
}

export function CreatePost(props: forCreatePost) {

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        let text = e.currentTarget.value
        props.chengeMessageTextArea(text)
    }

    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div className={s.container}>
            <Photo photo={props.profile?.photos.large as string}/>
            <div>
                <Info myName={"Misha Shmidt"} status="I like a dog" languages={"Russian"}/>
                <section className={s.createPost}>
                    <img src={props.profile?.photos.small} alt="logo" width={30} height={30}/>
                    <textarea onChange={onPostChange} value={props.changeText} name="Posts" id="Posts" cols={30} rows={10} placeholder="  What`s new?"/>

                    <div>
                        <button onClick={() => props.addPost(props.changeText)}>Create</button>
                        <button>Remove</button>
                    </div>

                    {props.postData.map((p) => <Post messages={p.post} key={p.id} photo={props.profile?.photos.small as string}/>)}
                </section>
            </div>

        </div>
    )
}

