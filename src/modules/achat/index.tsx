import React, { } from 'react'
import { Outlet } from 'react-router-dom'
import NourContainer from '../../components/core/NourContainer'
import "./index.scss"
import GuestHeader from '../../components/header/GuestHeader'
import OfferList from './offer/OfferList'
import OfferDetail from './offer/OfferDetail'
import AuthService from '../../services/authService'
import UserHeader from '../../components/header/UserHeader'

export default function AchatIndex() {

  let authService = AuthService.getAuthService(); 

  return (
    <NourContainer>
      {authService.isAuthenticate() ? <UserHeader/> : <GuestHeader />}
      <Outlet />
    </NourContainer>
  )
}


/** @type RouteObject */
export const achatChildren = [
  {
      path: "",
      element: <OfferList />,
  },
  {
      path: "offer/:offer",
      loader: ({ params }) => { return params.offer },
      element: <OfferDetail />,
  },
]
