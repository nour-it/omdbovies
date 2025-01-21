import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AuthService from '../../services/authService'
import NourContainer from '../../components/core/NourContainer'
import NourLoader from '../../components/core/NourLoader'
import { UserStore, setAll } from '../../store/userStore'
import NourGridView from '../../components/core/NourGridView'
import NourIcon from '../../components/core/NourIcon'
import { Link } from 'react-router-dom'
import url from '../../var/url'

import "./index.scss"
import DashboardHeader from '../../components/header/DashboardHeader'
import OfferSection from './OfferSection'
import SouscriptionSection from './SouscriptionSection'

export default function DashboardIndex() {


  const [state, setState] = useState({ mounted: false, loading: false, authService: AuthService.getAuthService() })

  /**@type {UserStore} */
  const store = useSelector(state => state.userStore)
  const dispatch = useDispatch()

  async function loadFetch() {
    if (state.mounted && !state.loading) {
      setState((state) => ({ ...state, loading: true }))
      const res = await state.authService.loadUserInfo()
      console.log(res);
      dispatch(setAll(res))
      setState((state) => ({ ...state, loading: false }))

    }
  }

  const { adhesion, offer } = store;


  useEffect(() => {
    setState((state) => ({ ...state, mounted: true }))
    loadFetch();
    return () => {
      setState((state) => ({ ...state, mounted: false }))
    }
  }, [state.mounted])

  if (!state.mounted) return

  return (
    <NourContainer className="nour-container dashboard" >
      <DashboardHeader />
      {state.loading ? <NourLoader /> : (
        <div>
          <OfferSection />
          <SouscriptionSection />
        </div>
      )}
    </NourContainer>
  )
}

