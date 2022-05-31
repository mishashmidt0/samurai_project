import React from 'react';
import {connect} from "react-redux";
import {changeCurrentPages, changeIsFetching, follow, getUsersThunk, setTotalUsersCount, setUsers, unFollow, usersType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {Users} from "./users";
import {Preloader} from "../common/Preloader";
import {usersAPI} from "./api";

type usersPropsType = {
    users: Array<usersType>,
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: usersType[]) => void
    changeCurrentPages: (newCurrentPage: number) => void
    changeIsFetching: (isFetching: boolean) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
    setTotalUsersCount: (totalUsersCount: number) => void
    isFetching: boolean
    getUsersThunk: (pageNumber: number, pageSize: number) => void
}

class UsersAPIComponent extends React.Component<usersPropsType> {

    componentDidMount() {
        this.props.changeIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true}).then(
            response => {
                this.props.changeIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            }
        )
    }

    onPageChanged(pageNumber: number) {
        this.props.changeIsFetching(true)
        this.props.changeCurrentPages(pageNumber);
        usersAPI.getusers(pageNumber, this.props.pageSize)
            .then(response => {
                    this.props.changeIsFetching(false)
                    this.props.setUsers(response.data.items)
                }
            )
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
        setUsers,
        unFollow,
        changeCurrentPages,
        setTotalUsersCount,
        changeIsFetching,
        getUsersThunk,
    })(UsersAPIComponent)



