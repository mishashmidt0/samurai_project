import React from 'react';
import {usersType} from "../../redux/users-reducer";
import avatar from '../../assets/images/avatar.jpg'
import s from './users-style.module.css'
import {v1} from "uuid";
import {NavLink} from "react-router-dom";

type usersPropsType = {
    users: Array<usersType>,
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    // setUsers: (users: usersType[]) => void
    // changeCurrentPage: (newCurrentPage: number) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
    // setTotalUsersCount: (totalUsersCount: number) => void
    onPageChanged: (page: number) => void
    isFetching: boolean
}

export function Users(props: usersPropsType) {
    let pages = [];
    for (let i = 1; i <= Math.ceil(props.totalUserCount / props.pageSize); i++) {
        if (i > 30) break
        pages.push(i)
    }
    console.log('Количество пользователей:', props.totalUserCount)
    return (
        <div>
            {pages.map((p) => <span key={v1()} className={props.currentPage === p ? s.active_page : s.pages} onClick={(e) => props.onPageChanged(p)}>{p}</span>)}
            {
                props.users.map(u => {
                    return (
                        <div key={u.id}>

                            <NavLink  to={`../profile/${u.id}`}>
                                <img src={u.photos.small ? u.photos.small : avatar} alt="avatar" height={100}/>
                            </NavLink>


                            {u.followed ? <button onClick={() => props.unFollow(u.id)}>Follow</button> :

                                <button onClick={() => props.follow(u.id)}>Unfollow</button>}

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



