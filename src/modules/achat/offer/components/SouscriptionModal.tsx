import React, { useEffect } from 'react'
import NourModal from '../../../../components/core/NourModal'
import "./index.scss"
import NourButton from '../../../../components/core/NourButton';
import { Offer } from '../../../../services/achatService';

let formElements;

/**
 * 
 * @param {Object} props
 * @param {Offer} props.offer
 * @returns 
 */
export default function SouscriptionModal(props) {
  const { offer } = props;
  function onFocus(e) {
    let label = e.target.parentNode.children[0]
    formElements.forEach(form_element => {
      form_element.classList.remove('active');
    })
    //label.animate([{transform: 'translateY(-20px)'}], {duration: 300, iterations: 1})
    label.classList.toggle("active")
  }

  useEffect(() => {
    formElements = document.querySelector("form").querySelectorAll('*')
    formElements.forEach(input => {
      input.addEventListener("focus", onFocus)
    })
    return () => {
      formElements.forEach(input => {
        input.removeEventListener("focus", onFocus)
      })
    }
  }, [])


  return (
    <NourModal closeModal={props.closeModal}>
      <form method='post'>
        <div className='form-row'>
          <div className="form-group">
            <label htmlFor="avance">Avance ({offer.avance})</label>
            <input type="text" name="avance" id="avance" />
          </div>
        </div>
        <div className='form-row'>
          <div className="form-group">
            <label htmlFor="quantite">Quantité ({offer.quantite})</label>
            <input type="text" name="quantite" id="quantite" />
          </div>
        </div>
        <div className='form-row'>
          <div className="form-group">
            <label htmlFor="delay">Féquence de payement ({offer.delay})</label>
            <input type="text" name="delay" id="delay" />
          </div>
        </div>
        <div className='form-row'>
          <div class="form-row">
            <NourButton type="submit" className="btn btn-primary">Send</NourButton>
          </div>
        </div>
      </form>
    </NourModal>
  )
}
