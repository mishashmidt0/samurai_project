import {forAction, forActionType, forPropsMessages} from "./Store";
import {v1} from "uuid";

let initialState = {
    messageData: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Where are you?'},
        {id: v1(), message: 'I`m fine and you?'},
        {id: v1(), message: 'Nice'},
        {id: v1(), message: 'Good'},
        {id: v1(), message: 'Good-bye',}
    ],
    dailogsData: [
        {id: v1(), name: 'Misha', avatar: 1},
        {id: v1(), name: 'Nika', avatar: 2},
        {id: v1(), name: 'Max', avatar: 3},
        {id: v1(), name: 'Anna', avatar: 4},
        {id: v1(), name: 'Lex', avatar: 5,},
        {id: v1(), name: 'Mila', avatar: 6}
    ],
    changeMessagesArea: '',
}
export const dialogReducer = (state: forPropsMessages = initialState, action: forAction) => {

    switch (action.type) {
        case forActionType['ADD_MESSAGE']:
            const message = {id: v1(), message: state.changeMessagesArea,};
            if (message.message.trim() === '') return;
            state.messageData.push(message);
            state.changeMessagesArea = '';
            return state
        case forActionType['CHANGE_MESSAGE']:
            state.changeMessagesArea = action.chengeMessageTextArea as string;
            return state
        default:
            return state
    }

}
