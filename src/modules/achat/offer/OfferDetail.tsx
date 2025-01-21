import React, { useState } from 'react'
import NourContainer from '../../../components/core/NourContainer'
import NourGridView from '../../../components/core/NourGridView'
import { useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AchatStore } from '../../../store/achatStore';
import NourButton from '../../../components/core/NourButton';
import NourIcon from '../../../components/core/NourIcon';
import { Offer } from '../../../services/achatService';
import SouscriptionModal from './components/SouscriptionModal';
import AuthService from '../../../services/authService';
import NourToast from '../../../components/core/NourToast';
import { getOfferCreatedAt } from '../function/date';

export default function OfferDetail() {

  const [state, setState] = useState({ mounted: false, souscriptionModal: false })

  let authService = AuthService.getAuthService();

  
  const {achatStore} = useSelector(state => state)
  const dispatch = useDispatch()

  const offerId = useLoaderData();

  console.log(achatStore)

  /**@type {Offer} */
  let offer = achatStore.publicOffers.items.find((offer) => offer.id == offerId)

  console.log(offer)

  function toggleSouscriptionModal (e) {
    if (authService.isAuthenticate()) {
      setState((state) => ({...state, souscriptionModal: !state.souscriptionModal}))
    } else {
      setState((state) => ({ ...state, toast: { type: 'danger', message: "Veuillez vous connecter avant de souscrire" } }))
    }
  }

  function hideToast() {
    setState((state) => ({ ...state, toast: undefined }))
  }


  return (
    <NourContainer>
      {state.toast && <NourToast hideToast={hideToast} toast={state.toast} />}
      {state.souscriptionModal && <SouscriptionModal closeModal={toggleSouscriptionModal} offer={offer}/>}
      <NourGridView className="offer__detail">
        <div className='part1'>
          <div className='social'>
            <div><NourIcon icon="facebook" /></div>
            <div><NourIcon icon="linkedin" /></div>
            <div><NourIcon icon="twitter" /></div>
          </div>
          <div className='img-viewer'>
            <img src='/img/offer.jpg' />
          </div>
          <div className='images'>
            <div><img src='/img/offer.jpg' /></div>
            <div><img src='/img/offer.jpg' /></div>
            <div><img src='/img/offer.jpg' /></div>
          </div>
          <div className='detail'>
            <div className='view'><NourIcon icon="eye" />12</div>
            <div className='like'><NourIcon icon="heart" />0</div>
          </div>

        </div>
        <div className='part2'>
          <h1 className='name'>{offer.name}</h1>
          <ul className='infos'>
            {Object.keys(infos).map((key, index) => <li key={index} className={`${key}`}>
              <span />  <span>{infos[key]}</span> <span>{key == "created_at" ? getOfferCreatedAt(offer[key]) : offer[key]}</span>
              </li>)}
          </ul>
          <NourButton className="btn btn-primary" onClick={toggleSouscriptionModal}>Souscrire</NourButton>
        </div>
        <div className='part3'>
          <h1>Description</h1>
          <p>{offer.description}</p>
        </div>
      </NourGridView>
    </NourContainer>
  )
}


const infos = {
  price: "Prix",
  avance: "Montant à avancer",
  quantite: "Quantité Disponible",
  delay: "Fréquence de payement (jours)",
  mise: "Mise Minimale",
  note: "Note",
  category: "Catégory",
  sous_category_id: "Sous Catégorie",
  created_at: "Date de création"
}