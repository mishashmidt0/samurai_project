import React from 'react';
import {usersType} from "../../redux/users-reducer";
import axios from "axios";
import avatar from '../../assets/images/avatar.jpg'
import s from './users-style.module.css'

type usersPropsType = {
    users: Array<usersType>,
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: usersType[]) => void
    changeCurrentPage: (newCurrentPage: number) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
}

export class Users extends React.Component<usersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?user=${this.props.pageSize}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setUsers(response.data.items)
            }
        )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?user=${pageNumber}&count=${this.props.pageSize}`).then(
            response => {
                console.log(pageNumber)
                this.props.setUsers(response.data.items)
                console.log(response.data.items)
            }
        )
    }

    render() {

        let pages = [];
        for (let i = 1; i <= Math.ceil(this.props.totalUserCount / this.props.pageSize); i++) {
            pages.push(i)
        }


        return (
            <div>
                {pages.map((p) => <span className={this.props.currentPage === p ? s.active_page : s.pages} onClick={(e) => this.onPageChanged(p)}>{p}</span>)}
                {
                    this.props.users.map(u => {
                        return (
                            <div key={u.id}>
                                <img src={u.photos.small ? u.photos.small : avatar} alt="avatar" height={100}/>

                                {u.followed ? <button onClick={() => this.props.unfollow(u.id)}>Follow</button> :

                                    <button onClick={() => this.props.follow(u.id)}>Unfollow</button>}

                                <div>
                                    <span>{u.name}</span>
                                </div>
                                <span>{u.status}</span>
                                <div>
                                    <span>{'u.country'}</span>
                                    <span>{'u.city'}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )

    }
}


