import React from 'react';
import {usersType} from "../../redux/users-reducer";
import axios from "axios";
import avatar from '../../assets/images/avatar.jpg'

type usersPropsType = {
    users: Array<usersType>,
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: usersType) => void
}

export function Users(props: usersPropsType) {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
            response => {
                props.setUsers(response.data.items)
                console.log(response.data.items)
            }
        )
    }

    return (
        <div>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <img src={u.photos.small ? u.photos.small : avatar} alt="avatar" height={100}/>

                            {u.followed ? <button onClick={() => props.unfollow(u.id)}>Follow</button> :

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

