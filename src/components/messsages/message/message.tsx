import s from "../Messsages.module.css";
import React from "react";


type forPropsMessage = {
	message: string;
}

export function Message ( props: forPropsMessage ) {
	return (
		<div className={ s.message }>{ props.message }</div>
	)
}