import React from 'react';
import s from './Messsages.module.css'
import { Dialog } from "./dialog/dialog";
import { Message } from "./message/message";
import { forPropsMessages } from '../../redux/state';


type forMessages = {
	messages: forPropsMessages,
	addMessage: ( value: string ) => void
}

export function Messages ( props: forMessages ) {

	const newMessageElement: any = React.createRef ();
	const aadMessage = () => {
		const text = newMessageElement.current.value;
		props.addMessage ( text )
	}

	return (
		<div className={ s.messages }>
			<div className="dialogs">
				{ props.messages.dailogsData.map ( ( d ) => <Dialog id={ d.id } name={ d.name }/> ) }
			</div>
			<div className={ s.message }>
				{ props.messages.messageData.map ( ( m ) => <Message message={ m.message }/> ) }
				<textarea className={ s.textarea } ref={ newMessageElement } name="Posts" id="Posts" cols={ 45 } rows={ 3 }/>
				<div>
					<button className={ s.button } onClick={ aadMessage }>Create</button>
				</div>
			</div>
		</div>

	)
}

