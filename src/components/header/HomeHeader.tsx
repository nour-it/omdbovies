import React, { useEffect, useState } from 'react'

import "./index.scss"

export default function HomeHeader() {

	const [state, setState] = useState({ mounted: false })

	useEffect(() => {
		setState((state) => ({ ...state, mounted: true }))
		return () => {
			setState((state) => ({ ...state, mounted: false }))
		}
	}, [])

	if (!state.mounted) return


	return (
		<header className='home__header'>
			<div className='logo'>
				<a href='#'></a>
			</div>

			<div className='header__nav'>
				<ul className='nav_links'>
					<li className='active'> <a href='#'> Acceuil</a></li>
					<li> <a href='#'> Qui sommes nous ?</a></li>
					<li> <a href='#'> Notre concept</a></li>
					<li> <a href='#'> Nous contacter</a></li>
				</ul>

				<ul className='social__nav'>
					<li><a href='#' className="ic_facebook"></a> </li>
					<li><a href='#' className="ic_twitter"></a></li>
					<li><a href='#' className="ic_linkedin"></a></li>
				</ul>
			</div>
		</header>
	)
}
