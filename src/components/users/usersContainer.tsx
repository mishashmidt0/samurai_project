import React from 'react';
import {connect} from "react-redux";
import {Users} from "./users";
import {FOLLOW, UNFOLLOW, usersType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";

type actionType = {
    type: string,
    id: string
}


let mapStateToProps = (state: AppStateType): { users: usersType[] } => {
    debugger
    const {users: users1} = state.ussersReducer;
    return {
        users: users1
    }
}
let mapDispatchToProps = (dispatch: (action: actionType) => void) => {
    return {
        follow: (userId: string) => {
            dispatch({
                type: FOLLOW,
                id: userId
            });
        },
        unfollow: (userId: string) => {
            dispatch({
                type: UNFOLLOW,
                id: userId
            })
        }
    }
}


export const UsersContainer =
    connect(mapStateToProps, mapDispatchToProps)(Users)
