import s from './Info.module.css'
import React from 'react';


type forPropsInfo = {
    myName: string
    status: string
    languages: string
}

function Info(props: forPropsInfo) {
    return (
        <div className={s.profile}>
            <h2>{props.myName}</h2>
            <p>{props.status}</p>
            <hr/>
            <div className={s.info}>
                <p>Languages: {props.languages}</p>
            </div>
            <hr/>
        </div>
    )
}


export default Info;
