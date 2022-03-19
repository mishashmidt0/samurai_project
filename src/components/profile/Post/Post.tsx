import s from './Post.module.css'
import React from 'react';


type  forProps = {
    messages: string
    photo: string
}

export function Post(props: forProps) {
    return (
        <section className={s.post}>
            <article className={s.container}>
                <img src={props.photo} alt="logo" width={30} height={30}/>
                <p className={s.text}>{props.messages}</p>
            </article>
        </section>
    )
}


