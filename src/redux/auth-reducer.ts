import {usersAPI} from "../components/users/api";
import {toggleFollowingProgress, unFollowSuccess} from "./users-reducer";

type setUserDataType = {
    type: 'SET-USER-DATA',
    data: usersReducerPropsType
}

export type actionType = setUserDataType

export type usersReducerPropsType = {
    userid: number | null,
    email: string | null,
    login: string | null
    isFetching: boolean,
    isAuth: boolean,
}

let initialState: usersReducerPropsType = {
    userid: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false,
}

export const authReducer = (state: usersReducerPropsType = initialState, action: actionType) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: action.data.isAuth
            }
        default:
            return state
    }

}
export const setUserData = (userid: number, email: string, login: string, isFetching: boolean, isAuth: boolean): setUserDataType => {
    return {
        type: 'SET-USER-DATA',
        data: {
            userid,
            email,
            login,
            isFetching,
            isAuth,
        }
    }
}
export const getMe = () => {
    return (dispatch: any) => {
        usersAPI.getMyLink()
            .then(
                response => {
                    if (response.data.resultCode === 0) {
                        const {email, id, login} = response.data.data
                        dispatch(setUserData(id, email, login, true, true))
                    }
                })
    }
}
