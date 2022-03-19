import s from './Header.module.css'
import React from 'react';
import logo from '../../assets/images/vk_logo.png'
import {Link} from "react-router-dom";
import {usersReducerPropsType} from "../../redux/auth-reducer";

type headerPropsType = {
    data: usersReducerPropsType
}

function Header(props: headerPropsType) {
    console.log(props.data)
    return (
        <header className={s.header}>
            <div className={s.container}>
                <img src={logo} alt="vk_logo" height={40}/>

                <div className={s.loginBlock}>
                    {props.data.isAuth ? <Link to={`/profile/${props.data.userid}`}>{props.data.login}</Link> : <Link to={'/login'}>Login</Link>}
                </div>
            </div>
        </header>

    )
}

export default Header;
