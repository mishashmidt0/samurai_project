import s from "../users/users-style.module.css";
import preloader from "../../assets/images/Eclipse-1.8s-197px.svg";
import React from "react";

export function Preloader() {
    return <div>
        <img className={s.preloader} src={preloader} alt="preloader"/>
    </div>
}
