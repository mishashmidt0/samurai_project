import React from 'react';
import {connect} from "react-redux";
import {actionType, changeIsFetchingAC, currentPageAC, followAC, setTotalUsersCountAC, setUsersAC, unFollowAC, usersType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {Users} from "./users";
import {Preloader} from "../common/Preloader";

type usersPropsType = {
    users: Array<usersType>,
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: usersType[]) => void
    changeCurrentPage: (newCurrentPage: number) => void
    changeIsFetching: (isFetching: boolean) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
    setTotalUsersCount: (totalUsersCount: number) => void
    isFetching: boolean
}

class UsersAPIComponent extends React.Component<usersPropsType> {

    componentDidMount() {
        this.props.changeIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
            response => {
                this.props.changeIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            }
        )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeIsFetching(true)
        this.props.changeCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(
            response => {
                this.props.changeIsFetching(false)
                this.props.setUsers(response.data.items)
            }
        )
    }

    render() {
        {
            if (this.props.isFetching) {
                return this.props.isFetching ? <Preloader/> : null
            }
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
        },
        changeIsFetching: (isFitching: boolean) => {
            dispatch(changeIsFetchingAC(isFitching))
        },
    }
}


export const UsersContainer =
    connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)



