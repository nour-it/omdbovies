import React, { useEffect, useState } from 'react'

import "./index.scss"
import { Link, useNavigate } from 'react-router-dom'
import NourIcon from '../core/NourIcon'
import AuthService from '../../services/authService'
import url from '../../var/url'

export default function DashboardHeader() {

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

        <ul className='social__nav'>
					<li> <a href='#'><NourIcon icon="bell"/></a></li>
					<li> <Link to={url.dashboard.index}><NourIcon icon="user"/></Link></li>
					<li> <div onClick={logout}><NourIcon icon="off"/></div></li>
				</ul>

			</div>
		</header>
	)
}
