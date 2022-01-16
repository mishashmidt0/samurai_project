import React from 'react';
import s from './Messsages.module.css'
import { Dialog } from "./dialog/dialog";
import { Message } from "./message/message";
import { forPropsMessages } from '../../redux/state';


type forMessages = {
	messages: forPropsMessages,
	addMessage: () => void,
	changeMessageArea: ( change: string ) => void,
}

export function Messages ( props: forMessages ) {

	const newMessageElement: any = React.createRef ();

	const aadMessage = () => {
		props.addMessage ();
	}
	const changeMessageArea = () => {
		const text = newMessageElement.current.value;
		props.changeMessageArea ( text )
	}


	return (
		<div className={ s.messages }>
			<div className="dialogs">
				{ props.messages.dailogsData.map ( ( d ) => <Dialog id={ d.id } name={ d.name }/> ) }
			</div>
			<div className={ s.message }>
				{ props.messages.messageData.map ( ( m ) => <Message message={ m.message }/> ) }
				<textarea className={ s.textarea } value={props.messages.changeMessagesArea} onChange={ changeMessageArea } ref={ newMessageElement } name="Posts" id="Posts" cols={ 45 } rows={ 3 }/>
				<div>
					<button className={ s.button } onClick={ aadMessage }>Create</button>
				</div>
			</div>
		</div>

	)
}

