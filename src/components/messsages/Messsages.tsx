import React, { ChangeEvent } from 'react';
import s from './Messsages.module.css'
import { Dialog } from "./dialog/dialog";
import { Message } from "./message/message";
import { forAction, forState } from '../../redux/Store';


type forMessages = {
	state: forState;
	dispatch: ( action: forAction ) => void;
}

export function Messages ( props: forMessages ) {


	const aadMessage = () => {
		props.dispatch ( { type: 'ADD-MESSAGE' } );
	}
	const changeMessageArea = ( e: ChangeEvent<HTMLTextAreaElement> ) => {
		console.log ( e.currentTarget.value )
		props.dispatch ( { type: 'CHANGE-MESSAGE', chengeMessageTextArea: e.currentTarget.value } )
	}


	return (
		<div className={ s.messages }>
			<div className="dialogs">
				{ props.state.messages.dailogsData.map ( ( d ) => <Dialog id={ d.id } name={ d.name } avatar={ d.avatar }/> ) }
			</div>
			<div className={ s.message }>
				{ props.state.messages.messageData.map ( ( m ) => <Message message={ m.message }/> ) }
				<textarea className={ s.textarea }
				          value={ props.state.messages.changeMessagesArea }
				          onChange={ changeMessageArea } name="Posts" id="Posts" cols={ 45 } rows={ 3 }/>
				<div>
					<button className={ s.button } onClick={ aadMessage }>Create</button>
				</div>
			</div>
		</div>

	)
}

