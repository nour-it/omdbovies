import React, { useEffect, useState } from 'react'

import "./index.scss"
import NourButton from '../core/NourButton'
import { Link } from 'react-router-dom'

export default function GuestHeader() {

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
					<li className='active'> <a href='#'>Tontine Achat</a></li>
					<li> <a href='#'>Groupe Tontine</a></li>
					<li> <a href='#'>Vitrine</a></li>
					<li> <a href='#'>Association</a></li>
				</ul>

				<Link className="btn btn-primary" to={"/auth/login"}>Se connecter</Link>

			</div>
		</header>
	)
}
