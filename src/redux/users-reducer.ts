type followType = {
    type: 'FOLLOW',
    userId: number
}
type setUsersType = {
    type: 'ADD-USERS',
    users: usersType[]
}
type unfollowType = {
    type: 'UNFOLLOW',
    userId: number
}
type currentPageType = {
    type: 'CHANGE-CURRENT-PAGE',
    currentPage: number
}

export type actionType = followType | setUsersType | unfollowType | currentPageType;
export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const addUsers = 'ADD-USERS'
export const changeCurrentPage = 'CHANGE-CURRENT-PAGE'

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
    pageSize: number
    totalUserCount: number
    currentPage: number
}

let initialState: usersReducerPropsType = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    totalUserCount: 20, //общее количество пользователей
}

export const ussersReducer = (state: usersReducerPropsType = initialState, action: actionType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case addUsers:
            return {...state, users: action.users}
        case changeCurrentPage:
            return {...state, currentPage: action.currentPage}
        default:
            return state
    }

}

// применяеться в userContainer
export const follow = (userId: number): followType => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unFollow = (userId: number): unfollowType => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsers = (users: usersType[]): setUsersType => {
    return {
        type: addUsers,
        users
    }
}
export const currentPage = (newCurrentPage: number): currentPageType => {
    return {
        type: changeCurrentPage,
        currentPage: newCurrentPage
    }
}
