import React from 'react';
import {connect} from "react-redux";

import {actionType, currentPageAC, followAC, setTotalUsersCountAC, setUsersAC, unFollowAC, usersType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./users";


let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUserCount: state.usersReducer.setTotalUsersCount,
        currentPage: state.usersReducer.currentPage,
    }
}
let mapDispatchToProps = (dispatch: (action: actionType) => void) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        setUsers: (users: usersType[]) => {
            dispatch(setUsersAC(users));
        },
        unfollow: (id: number) => {
            dispatch(unFollowAC(id))
        },
        changeCurrentPage: (newCurrentPage: number) => {
            dispatch(currentPageAC(newCurrentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}


export const UsersContainer =
    connect(mapStateToProps, mapDispatchToProps)(Users)
