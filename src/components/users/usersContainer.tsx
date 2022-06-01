import React from 'react';
import {connect} from "react-redux";
import {changeCurrentPages, follow, getUsersThunk, setTotalUsersCount, unfollow, usersType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./users";
import {Preloader} from "../common/Preloader";


type usersPropsType = {
    users: Array<usersType>,
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    changeCurrentPages: (newCurrentPage: number) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
    setTotalUsersCount: (totalUsersCount: number) => void
    isFetching: boolean
    getUsersThunk: (pageNumber: number, pageSize: number) => void

}

class UsersAPIComponent extends React.Component<usersPropsType> {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged(pageNumber: number) {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    render() {
        if (this.props.isFetching) {
            return this.props.isFetching ? <Preloader/> : null
        }
        return <Users {...this.props} onPageChanged={this.onPageChanged}/>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUserCount: state.usersReducer.setTotalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
    }
}


export const UsersContainer =
    connect(mapStateToProps, {
        follow,
        unfollow,
        changeCurrentPages,
        setTotalUsersCount,
        getUsersThunk,
    })(UsersAPIComponent)



