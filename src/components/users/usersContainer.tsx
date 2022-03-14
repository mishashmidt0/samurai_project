import React from 'react';
import {connect} from "react-redux";

import {actionType, currentPage, follow, setUsers, unFollow, usersType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./users";


let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUserCount: state.usersReducer.totalUserCount,
        currentPage: state.usersReducer.currentPage,
    }
}
let mapDispatchToProps = (dispatch: (action: actionType) => void) => {
    return {
        follow: (userId: number) => {
            dispatch(follow(userId))
        },
        setUsers: (users: usersType[]) => {
            dispatch(setUsers(users));
        },
        unfollow: (id: number) => {
            dispatch(unFollow(id))
        },
        changeCurrentPage: (newCurrentPage: number) => {
            dispatch(currentPage(newCurrentPage))
        }
    }
}


export const UsersContainer =
    connect(mapStateToProps, mapDispatchToProps)(Users)
