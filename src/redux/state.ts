import { v1 } from "uuid";

//type
type forMessage = { id: string, message: string }
type forMessagesData = Array<forMessage>;
export type forPropsMessages = {
	messageData: forMessagesData, dailogsData: forDialogsData, changeMessagesArea: string;

}
type forDialog = { id: string, name: string, avatar: number }
type forDialogsData = Array<forDialog>;
type forPost = { id: string, post: string }
export type forPostData = Array<forPost>;
export type forState = {
	profile: {
		postData: forPostData
		changeText: string
	}, messages: forPropsMessages
}
export type forAction = {
	type: string; chengeProfileTextArea?: string; chengeMessageTextArea?: string;
}
export type forStore = {
	_state: forState, getState: () => forState, _callSubscriber: ( store: forState ) => void, _addPost: () => void, _addMessage: () => void, _changeProfileTextarea: ( change: string ) => void, _changeMessageArea: ( change: string ) => void, subscribe: ( observe: ( state: forState ) => void ) => void
	dispatch: ( action: forAction ) => void
}

export const store: forStore = {
	_state: {
		profile: {
			postData: [ { id: v1 (), post: "Hello it's my first post" }, { id: v1 (), post: "How are you?" }, { id: v1 (), post: 'I`m fine and you?' }, { id: v1 (), post: "I am play chess" }, {
				id: v1 (), post: 'Good',
			}, { id: v1 (), post: 'Good-bye' } ], changeText: "it-incubator",
		}, messages: {
			messageData: [ { id: v1 (), message: 'Hi' }, { id: v1 (), message: 'Where are you?' }, { id: v1 (), message: 'I`m fine and you?' }, { id: v1 (), message: 'Nice' }, { id: v1 (), message: 'Good' }, {
				id: v1 (), message: 'Good-bye',
			} ], dailogsData: [ { id: v1 (), name: 'Misha', avatar: 1 }, { id: v1 (), name: 'Nika', avatar: 2 }, { id: v1 (), name: 'Max', avatar: 3 }, { id: v1 (), name: 'Anna', avatar: 4 }, {
				id: v1 (), name: 'Lex', avatar: 5,
			}, { id: v1 (), name: 'Mila', avatar: 6 } ], changeMessagesArea: '',
		},
	}, _callSubscriber (): void{
	}, getState (){
		return this._state;
	}, _addPost (){
		const post = {
			id: v1 (), post: this._state.profile.changeText,
		};
		if ( post.post.trim () === '' ) return;
		this._state.profile.postData.unshift ( post );
		this._state.profile.changeText = '';
		this._callSubscriber ( this._state );
	}, _addMessage (){
		const message = {
			id: v1 (), message: this._state.messages.changeMessagesArea,
		};
		if ( message.message.trim () === '' ) return;
		this._state.messages.messageData.push ( message );
		this._state.messages.changeMessagesArea = '';
		this._callSubscriber ( this._state );
	}, _changeProfileTextarea ( change: string ){
		this._state.profile.changeText = change;
		this._callSubscriber ( this._state );
	}, _changeMessageArea ( change: string ){
		this._state.messages.changeMessagesArea = change;
		this._callSubscriber ( this._state );
	}, subscribe ( observe: ( state: forState ) => void ){
		this._callSubscriber = observe;
	},

	dispatch ( action ){

		switch ( action.type ) {
			case 'ADD-POST':
				this._addPost ();
				break;
			case 'ADD-MESSAGE':
				this._addMessage ();
				break;
			case 'CHANGE-PROFILE':
				this._changeProfileTextarea ( action.chengeProfileTextArea as string );
				break;
			case 'CHANGE-MESSAGE':
				this._changeMessageArea ( action.chengeMessageTextArea as string );
				break;
			case 'GET-STATE':
				this.getState ();
				break;
		}
	},
};

