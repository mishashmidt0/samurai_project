
import s from './Header.module.css'
import React from 'react';


function Header () {
	return (
		<header className={ s.header }>
			<div className={ s.container }>

				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M0 14.4C0 7.61 0 4.22 2.1 2.1 4.23 0 7.62 0 14.4 0h1.2c6.79 0 10.18 0 12.3 2.1C30 4.23 30 7.62 30 14.4v1.2c0 6.79 0 10.18-2.1 12.3C25.77 30 22.38 30 15.6 30h-1.2c-6.79 0-10.18 0-12.3-2.1C0 25.77 0 22.38 0 15.6v-1.2z"
						fill="#07F"/>
					<path
						d="M15.96 21.61c-6.84 0-10.74-4.68-10.9-12.48H8.5c.11 5.72 2.63 8.14 4.63 8.64V9.13h3.23v4.93c1.97-.21 4.05-2.46 4.75-4.94h3.22a9.53 9.53 0 01-4.38 6.23 9.87 9.87 0 015.13 6.26h-3.55c-.76-2.37-2.66-4.21-5.17-4.46v4.46h-.39z"
						fill="#fff"/>
				</svg>

				<input className={ s.search } type="text" placeholder="  Search"/>

				<div className={ s.player }>
					<button/>
					<button/>
					<button/>
					<p>New Song</p>
				</div>
			</div>
		</header>

	)
}

export default Header;