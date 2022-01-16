//type
type forMessage = { id: number, message: string }
type forMessagesData = Array<forMessage>;
export type forPropsMessages = {
	messageData: forMessagesData,
	dailogsData: forDialogsData,
	changeMessagesArea: string;

}
type forDialog = { id: number, name: string }
type forDialogsData = Array<forDialog>;
type forPost = { id: number, post: string }
export type forPostData = Array<forPost>;
export type forState = {
	profile: {
		postData: forPostData
		changeText: string
	},
	messages: forPropsMessages
}

export type forStore = {
	_state: forState,
	getState: () => forState,
	_callSubscriber: ( store: forState ) => void,
	addPost: () => void,
	addMessage: () => void,
	changeProfileTextarea: ( change: string ) => void,
	changeMessageArea: ( change: string ) => void,
	subscribe: ( observe: ( state: forState ) => void ) => void
}

export const store: forStore = {
	_state: {
		profile: {
			postData: [
				{ id: 1, post: "Hello it's my first post" },
				{ id: 2, post: "How are you?" },
				{ id: 3, post: 'I`m fine and you?' },
				{ id: 4, post: "I am play chess" },
				{ id: 5, post: 'Good' },
				{ id: 6, post: 'Good-bye' },
			],
			changeText: "it-incubator",
		},
		messages: {
			messageData: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'Where are you?' },
				{ id: 3, message: 'I`m fine and you?' },
				{ id: 4, message: 'Nice' },
				{ id: 5, message: 'Good' },
				{ id: 6, message: 'Good-bye' },
			],
			dailogsData: [
				{ id: 1, name: 'Misha' },
				{ id: 2, name: 'Nika' },
				{ id: 3, name: 'Max' },
				{ id: 4, name: 'Anna' },
				{ id: 5, name: 'Lex' },
				{ id: 6, name: 'Mila' },
			],
			changeMessagesArea: 'it-incubator',
		},
	},
	getState () {
		return this._state
	},
	_callSubscriber (): void {
	},
	addPost () {
		const post = {
			id: 7,
			post: this._state.profile.changeText,
		}
		if ( post.post === '' ) return;
		this._state.profile.postData.unshift ( post );
		this._state.profile.changeText = '';
		this._callSubscriber ( this._state )
	},
	addMessage () {
		const message = {
			id: 7,
			message: this._state.messages.changeMessagesArea,
		}
		if ( message.message === '' ) return;
		this._state.messages.messageData.push ( message );
		this._state.messages.changeMessagesArea = '';
		this._callSubscriber ( this._state );
	},
	changeProfileTextarea ( change: string ) {
		this._state.profile.changeText = change;
		this._callSubscriber ( this._state );
	},
	changeMessageArea ( change: string ) {
		this._state.messages.changeMessagesArea = change;
		this._callSubscriber ( this._state );
	},
	subscribe ( observe: ( state: forState ) => void ) {
		this._callSubscriber = observe;
	},
}


//Old code//
// //data
// export const stateForState: forState = {
// 	profile: {
// 		postData: [
// 			{ id: 1, post: "Hello it's my first post" },
// 			{ id: 2, post: "How are you?" },
// 			{ id: 3, post: 'I`m fine and you?' },
// 			{ id: 4, post: "I am play chess" },
// 			{ id: 5, post: 'Good' },
// 			{ id: 6, post: 'Good-bye' },
// 		],
// 		changeText: "it-incubator",
// 	},
// 	messages: {
// 		messageData: [
// 			{ id: 1, message: 'Hi' },
// 			{ id: 2, message: 'Where are you?' },
// 			{ id: 3, message: 'I`m fine and you?' },
// 			{ id: 4, message: 'Nice' },
// 			{ id: 5, message: 'Good' },
// 			{ id: 6, message: 'Good-bye' },
// 		],
// 		dailogsData: [
// 			{ id: 1, name: 'Misha' },
// 			{ id: 2, name: 'Nika' },
// 			{ id: 3, name: 'Max' },
// 			{ id: 4, name: 'Anna' },
// 			{ id: 5, name: 'Lex' },
// 			{ id: 6, name: 'Mila' },
// 		],
// 		changeMessagesArea: 'it-incubator',
// 	},
// }
// //func
// export const addPost = () => {
//
// 	const post = {
// 		id: 7,
// 		post: stateForState.profile.changeText,
// 	}
// 	if ( post.post === '' ) return;
// 	stateForState.profile.postData.unshift ( post );
// 	stateForState.profile.changeText = '';
// 	renderLink ()
// }
// export const changeProfileTextarea = ( change: string ) => {
// 	stateForState.profile.changeText = change;
// 	renderLink ();
// }
// export const changeMessageArea = ( change: string ) => {
// 	stateForState.messages.changeMessagesArea = change;
// 	renderLink ();
// }
// export const addMessage = () => {
// 	const message = {
// 		id: 7,
// 		message: stateForState.messages.changeMessagesArea,
// 	}
// 	if ( message.message === '' ) return;
// 	stateForState.messages.messageData.push ( message );
// 	stateForState.messages.changeMessagesArea = '';
// 	renderLink ();
// }
// //observe
// export const rerenderLink = ( observe: () => void ) => {
// 	renderLink = observe;
// }
// let renderLink = (): any => {
// 	console.log ( '123' )
// }