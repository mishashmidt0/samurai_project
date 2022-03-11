import {v1} from "uuid";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UN-FOLLOW';
export const setUsers = 'SET-USERS'

type actionType = {
    type: string
    userId?: string
    users?: Array<usersType>
}
export type usersType = {
    id: string,
    follow: boolean,
    firstName: string,
    lastName: string,
    country: string,
    city: string,
    status: string,
    img: string
}
export type usersReducerPropsType = {
    users: Array<usersType>
}
let initialState: usersReducerPropsType = {
    users: [
        {
            id: v1(),
            follow: true,
            firstName: 'Masha',
            lastName: "Orlova",
            country: 'Russia',
            city: 'Moscow',
            status: 'Good day',
            img: 'https://sun7-6.userapi.com/s/v1/if1/6jwBUpZUKs1Dghreq8mnTD1UOMYdfUrexedo_6isD6tIMQblu8p_UC1APt5Tl8x6GGPIjqQf.jpg?size=200x200&quality=96&crop=114,37,552,552&ava=1'
        },
        {
            id: v1(),
            follow: false,
            firstName: 'Masha',
            lastName: "Orlova",
            country: 'Russia',
            city: 'Moscow',
            status: 'Good day',
            img: 'https://sun7-6.userapi.com/s/v1/if1/6jwBUpZUKs1Dghreq8mnTD1UOMYdfUrexedo_6isD6tIMQblu8p_UC1APt5Tl8x6GGPIjqQf.jpg?size=200x200&quality=96&crop=114,37,552,552&ava=1'
        },
        {
            id: v1(),
            follow: true,
            firstName: 'Masha',
            lastName: "Orlova",
            country: 'Russia',
            city: 'Moscow',
            status: 'Good day',
            img: 'https://sun7-6.userapi.com/s/v1/if1/6jwBUpZUKs1Dghreq8mnTD1UOMYdfUrexedo_6isD6tIMQblu8p_UC1APt5Tl8x6GGPIjqQf.jpg?size=200x200&quality=96&crop=114,37,552,552&ava=1'
        },
    ],
}

export const ussersReducer = (state: usersReducerPropsType = initialState, action: actionType) => {
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        u.follow = true
                        return u
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        u.follow = false
                        return u
                    }
                })
            }
        case setUsers:
            return {...state, ...action.users}
        default:
            return state
    }

}
export const follow = (userId: string) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unFollow = (userId: string) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
