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
import { Offer, Souscription } from '../../services/achatService'


export default function SouscriptionSection() {
  const [state, setState] = useState({ mounted: false, loading: false, authService: AuthService.getAuthService() })

  /**@type {UserStore} */
  const store = useSelector(state => state.userStore)
  const dispatch = useDispatch()

  const {souscription} = store;

  return (
    <div className='offers-section'>
      <h1>Mes Souscriptions</h1>
      <Link to={url.dashboard.userOffersUrl}>Voir Plus <NourIcon icon="arrow" /></Link>
      <NourGridView data={souscription} gridItem={(item, key) => <SouscriptionGridItem item={item} key={key} />} className="user-offers" />
      {state.loading && <NourLoader />}
    </div>
  )
}


/**
 * 
 * @param {Object} props
 * @param {Souscription} props.item 
 * @returns 
 */
function SouscriptionGridItem(props) {
  const { item } = props;
  return <div className='grid-el offer'>
    <img src='/img/offer.jpg' />
    <span className='note'></span>
    <h1 className='name'>{item.offer.name}</h1>
    <p className='price'>{item.price}</p>
    <div className='detail'>
      <div className='view'><NourIcon icon="eye" />12</div>
      <div className='like'><NourIcon icon="heart" />0</div>
      <Link className="btn btn-primary" to={url.dashboard.userOfferDetail(item.id)}>Voir</Link>
    </div>
  </div>
}