type forMessage = { id: number, message: string }
type forMessagesData = Array<forMessage>;
type forDialog = { id: number, name: string }
type forDialogsData = Array<forDialog>;
type forPost = { id: number, post: string }
export type forPostData = Array<forPost>;
export type forPropsMessages = {
	messageData: forMessagesData,
	dailogsData: forDialogsData

}
export type forState = {
	profile: {
		postData: forPostData
	},
	messages: forPropsMessages
}


export const stateForState: forState = {
	profile: {
		postData: [
			{ id: 1, post: "Hello it's my first post" },
			{ id: 2, post: "How are you?" },
			{ id: 3, post: 'I`m fine and you?' },
			{ id: 4, post: "I am play chess" },
			{ id: 5, post: 'Good' },
			{ id: 6, post: 'Good-bye' },
		],
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
	},


}

export const addPost = ( newPost: string ) => {
	const post = {
		id: 7,
		post: newPost,
	}
	stateForState.profile.postData.push ( post );
}
export const addMessage = ( newMessage: string ) => {
	const message = {
		id: 7,
		message: newMessage,
	}
	stateForState.messages.messageData.push ( message );
}
