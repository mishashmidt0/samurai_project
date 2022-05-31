import {usersAPI} from "../components/users/api";

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
type toggleFollowingProgressType = {
    type: 'TOGGLE-FOLLOWING',
    toggleFollowing: boolean,
    userId: number
}

export type actionType = followType | setUsersType | unfollowType | currentPageType | totalUsersCountType | isFetchingChangeType | toggleFollowingProgressType;
export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const addUsers = 'ADD-USERS'
export const changeCurrentPage = 'CHANGE-CURRENT-PAGE'
export const changeTotalUsersCount = 'CHANGE-TOTAL-UC'
export const isFetchingChange = 'CHANGE-ISFETCHING'
export const followingProgress = 'TOGGLE-FOLLOWING'

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
    isFetching: boolean,
    toggleFollowing: boolean,
}

let initialState: usersReducerPropsType = {
    users: [],
    pageSize: 20,
    currentPage: 1,
    setTotalUsersCount: 0,//общее количество пользователей
    isFetching: true,
    toggleFollowing: false,
}

export const usersReducer = (state: usersReducerPropsType = initialState, action: actionType) => {
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
        case followingProgress:
            return {...state, toggleFollowing: action.toggleFollowing}
        default:
            return state
    }

}


export const followSuccess = (userId: number): followType => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unFollowSuccess = (userId: number): unfollowType => {
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
export const changeCurrentPages = (newCurrentPage: number): currentPageType => {
    return {
        type: changeCurrentPage,
        currentPage: newCurrentPage
    }
}
export const setTotalUsersCount = (totalUsersCount: number): totalUsersCountType => {
    return {
        type: changeTotalUsersCount,
        totalUsersCount
    }
}
export const changeIsFetching = (isFetching: boolean): isFetchingChangeType => {
    return {
        type: isFetchingChange,
        isFetching
    }
}
export const toggleFollowingProgress = (toggleFollowing: boolean, userId: number): toggleFollowingProgressType => {
    return {
        type: followingProgress,
        toggleFollowing,
        userId
    }
}


export const getUsersThunk = (pageNumber: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(changeIsFetching(true))
        usersAPI.getUsers(pageNumber, pageSize)
            .then(data => {
                    dispatch(changeIsFetching(false))
                    dispatch(setUsers(data.items))
                    dispatch(setTotalUsersCount(data.totalCount))
                }
            )
    }
}

export const follow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (!response.data.resultCode) followSuccess(userId)
            })
        dispatch(toggleFollowingProgress(false, userId))
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (!response.data.resultCode) unFollowSuccess(userId)
            })
        dispatch(toggleFollowingProgress(false, userId))
    }
}
