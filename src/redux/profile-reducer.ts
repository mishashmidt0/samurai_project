import {forAction, forActionType, forPostData} from "./Store";
import {v1} from "uuid";

let initialState = {
    postData: [
        {id: v1(), post: "Hello it's my first post",},
        {id: v1(), post: "How are you?"},
        {id: v1(), post: 'I`m fine and you?'},
        {id: v1(), post: "I am play chess"},
        {id: v1(), post: 'Good'},
        {id: v1(), post: 'Good-bye'}
    ],
    changeText: "it-incubator",
}

export const profileReducer = (state: {
    postData: forPostData
    changeText: string
} = initialState, action: forAction) => {

    switch (action.type) {

        case forActionType['ADD_POST']:
            const post = {
                id: v1(), post: state.changeText,
            };
            if (post.post.trim() === '') return state;
            state.postData.unshift(post);
            state.changeText = '';
            return state
        case forActionType['CHANGE_PROFILE']:
            state.changeText = action.chengeProfileTextArea as string;
            return state

        default:
            return state
    }

}
