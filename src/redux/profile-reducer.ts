import {forActionType, forPostData} from "./Store";
import {v1} from "uuid";


type ProfileReducerPropsStateType = {
    postData: forPostData
    changeText: string
    profile: profileType | null
}

type addPost = {
    type: 'ADD-POST';
    newTextForPost: string
}
type changeProfile = {
    type: 'CHANGE-PROFILE';
    chengeProfileTextArea: string
}
type contactsProfileType = {
    facebook: string | null
    github: string | null
    instagram: string | null
    mainLink: string | null
    twitter: string | null
    vk: string | null
    website: string | null
    youtube: string | null
}

export type profileType = {
    aboutMe: string | null
    contacts: contactsProfileType
    fullName: string | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    photos: { small: string, large: string }
    userId: number | null
} | null
type setUserProfile = {
    type: 'SET-USER-PROFILE';
    profile: profileType
}

export type forAction = addPost | changeProfile | setUserProfile;

let initialState: ProfileReducerPropsStateType = {
    postData: [
        {id: v1(), post: "Hello it's my first post",},
        {id: v1(), post: "How are you?"},
        {id: v1(), post: 'I`m fine and you?'},
        {id: v1(), post: "I am play chess"},
        {id: v1(), post: 'Good'},
        {id: v1(), post: 'Good-bye'}
    ],
    changeText: "it-incubator",
    profile: null,
}


export const profileReducer = (state: ProfileReducerPropsStateType = initialState, action: forAction) => {
    switch (action.type) {
        case forActionType['ADD_POST']:
            const post = {
                id: v1(), post: state.changeText,
            };
            if (post.post.trim() === '') return state;
            return {
                ...state,
                postData: [post, ...state.postData],
                changeText: '',
            }
        case forActionType['CHANGE_PROFILE']:
            return {...state, changeText: action.chengeProfileTextArea}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}

        default:
            return state
    }

}
export const addPost = (text: string): addPost => {
    return {
        type: 'ADD-POST',
        newTextForPost: text
    }
}
export const chengeMessageTextArea = (text: string): changeProfile => {
    return {
        type: 'CHANGE-PROFILE',
        chengeProfileTextArea: text
    }
}
export const setUserProfile = (profile: profileType): setUserProfile => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    }
}
