export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UN-FOLLOW';
export const addUsers = 'SET-USERS'

type actionType = {
    type: string
    id?: number
    users?: usersType[]
}
export type usersType = {
    id: number,
    followed: boolean,
    name: string,
    photos: {
        small: string | null,
        large: string | null
    },
    status: string | null,
    uniqueUrlName: string | null,
}
export type usersReducerPropsType = {
    users: Array<usersType>
}

let initialState: usersReducerPropsType = {
    users: [],
}

export const ussersReducer = (state: usersReducerPropsType = initialState, action: actionType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case addUsers:
            return {...state, users: [...state.users, ...action.users as usersType[]]}
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
export const setUsers = (users: usersType) => {
    return {
        type: addUsers,
        users
    }
}
