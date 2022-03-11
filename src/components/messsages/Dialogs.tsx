import React from 'react';
import s from './Messsages.module.css'
import {Dialog} from "./dialog/dialog";
import {Message} from "./message/message";
import {forDialogsData, forMessagesData} from "../../redux/Store";


type typeForMessages = {
    addMessage: () => void;
    changeMessageArea: (text: string) => void;
    dailogsData: forDialogsData;
    messageData: forMessagesData
    changeMessagesAreaStart: string
}

export function Dialogs(props: typeForMessages) {
    return (
        <div className={s.messages}>
            <div className="dialogs">
                {props.dailogsData.map((d) => <Dialog id={d.id} name={d.name} avatar={d.avatar} key={d.id}/>)}
            </div>
            <div className={s.message}>
                {props.messageData.map((m) => <Message message={m.message} key={m.id}/>)}
                <textarea className={s.textarea}
                          value={props.changeMessagesAreaStart}
                          onChange={(e) => props.changeMessageArea(e.currentTarget.value)} name="Posts" id="Posts" cols={45} rows={3}/>
                <div>
                    <button className={s.button} onClick={props.addMessage}>Create</button>
                </div>
            </div>
        </div>

    )
}

