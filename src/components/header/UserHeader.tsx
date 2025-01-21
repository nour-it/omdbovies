import React, { useEffect, useState } from 'react'

import "./index.scss"
import NourButton from '../core/NourButton'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import NourIcon from '../core/NourIcon'
import AuthService from '../../services/authService'
import url from '../../var/url'

export default function UserHeader() {

	const [state, setState] = useState({ mounted: false })
  const navigate = useNavigate();

	useEffect(() => {
		setState((state) => ({ ...state, mounted: true }))
		return () => {
			setState((state) => ({ ...state, mounted: false }))
		}
	}, [])

	if (!state.mounted) return


  function logout () {
    AuthService.getAuthService().logout();
    navigate("/");
  }

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

        <ul className='social__nav'>
					<li> <a href='#'><NourIcon icon="bell"/></a></li>
					<li> <Link to={url.dashboard.index}><NourIcon icon="user"/></Link></li>
					<li> <div onClick={logout}><NourIcon icon="off"/></div></li>
				</ul>

			</div>
		</header>
	)
}
