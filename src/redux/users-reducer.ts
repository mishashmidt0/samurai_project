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
type totalUsersCountType = {
    type: 'CHANGE-TOTAL-UC',
    totalUsersCount: number
}
type isFetchingChangeType = {
    type: 'CHANGE-ISFETCHING',
    isFetching: boolean
}

export type actionType = followType | setUsersType | unfollowType | currentPageType | totalUsersCountType | isFetchingChangeType;
export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const addUsers = 'ADD-USERS'
export const changeCurrentPage = 'CHANGE-CURRENT-PAGE'
export const changeTotalUsersCount = 'CHANGE-TOTAL-UC'
export const isFetchingChange = 'CHANGE-ISFETCHING'

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
    currentPage: number
    setTotalUsersCount: number
    isFetching: boolean
}

let initialState: usersReducerPropsType = {
    users: [],
    pageSize: 20,
    currentPage: 1,
    setTotalUsersCount: 0,//общее количество пользователей
    isFetching: true,
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
        case changeTotalUsersCount:
            return {...state, setTotalUsersCount: action.totalUsersCount}
        case isFetchingChange:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }

}

// применяеться в userContainer
export const followAC = (userId: number): followType => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unFollowAC = (userId: number): unfollowType => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersAC = (users: usersType[]): setUsersType => {
    return {
        type: addUsers,
        users
    }
}
export const currentPageAC = (newCurrentPage: number): currentPageType => {
    return {
        type: changeCurrentPage,
        currentPage: newCurrentPage
    }
}
export const setTotalUsersCountAC = (totalUsersCount: number): totalUsersCountType => {
    return {
        type: changeTotalUsersCount,
        totalUsersCount
    }
}
export const changeIsFetchingAC = (isFetching: boolean): isFetchingChangeType => {
    return {
        type: isFetchingChange,
        isFetching
    }
}
