import React from 'react';
import { usersType} from "../../redux/users-reducer";


type usersPropsType = {
    users: Array<usersType>,
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}

export function Users(props: usersPropsType) {
    return (
        <div>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <img src={u.img} alt="avatar"/>

                            {u.follow ? <button onClick={() => props.unfollow(u.id)}>FULLOW</button> :

                                <button onClick={() => props.follow(u.id)}>UNFULLOW</button>}

                            <div>
                                <span>{u.firstName}</span>
                                <span>{u.lastName}</span>
                            </div>
                            <span>{u.status}</span>
                            <div>
                                <span>{u.country}</span>
                                <span>{u.city}</span>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

