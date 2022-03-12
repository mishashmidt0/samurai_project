import React from 'react';
import {connect} from "react-redux";
import {Users} from "./users";
import {addUsers, FOLLOW, UNFOLLOW, usersType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";

type actionType = {
    type: string,
    id?: number,
    users?: usersType
}


let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.ussersReducer.users
    }
}
let mapDispatchToProps = (dispatch: (action: actionType) => void) => {
    return {
        follow: (id: number) => {
            dispatch({
                type: FOLLOW,
                id: id
            });
        },
        setUsers: (users: usersType) => {
            dispatch({
                type: addUsers,
                users: users
            });
        },
        unfollow: (id: number) => {
            dispatch({
                type: UNFOLLOW,
                id: id
            })
        }
    }
}


export const UsersContainer =
    connect(mapStateToProps, mapDispatchToProps)(Users)
