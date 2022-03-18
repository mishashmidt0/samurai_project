import {forActionType, forDialogsData, forMessagesData, forPropsMessages} from "./Store";
import {v1} from "uuid";


export type initialStateForDialog = {
    messageData: forMessagesData
    dailogsData: forDialogsData
    changeMessagesArea: string
}
let initialState: initialStateForDialog = {
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

type addMessage = {
    type: 'ADD-MESSAGE',
}
type changeMessage = {
    type: 'CHANGE-MESSAGE',
    chengeMessageTextArea: string
}

export type forAction = addMessage | changeMessage

export const dialogReducer = (state: forPropsMessages = initialState, action: forAction) => {

    switch (action.type) {
        case forActionType['ADD_MESSAGE']:
            const message = {id: v1(), message: state.changeMessagesArea,};
            if (message.message.trim() === '') return state;
            return {
                ...state,
                messageData: [...state.messageData, message],
                changeMessagesArea: '',
            }
        case forActionType['CHANGE_MESSAGE']:
            return {...state, changeMessagesArea: action.chengeMessageTextArea as string}
        default:
            return state
    }

}

export const addMessage = (): addMessage => {
    return {
        type: 'ADD-MESSAGE',

    }
}
export const changeMessage = (chengeMessageTextArea: string): changeMessage => {
    return {
        type: 'CHANGE-MESSAGE',
        chengeMessageTextArea
    }
}
