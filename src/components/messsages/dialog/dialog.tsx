import s from "../Messsages.module.css";
import { Link } from "react-router-dom";
import React from "react";


type forPropsDialog = {
	id: number,
	name: string,
	message?: string
}

export function Dialog ( props: forPropsDialog ) {
	return (
		<div className={ s.dialog }>
			<img className={ s.avatar } src={ `https://cspromogame.ru//storage/upload_images/avatars/391${ props.id }.jpg` } alt="avaatar"/>
			<Link to={ `/messages/${ props.id }` }>{ props.name }</Link>
		</div>
	)
}
