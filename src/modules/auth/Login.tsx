import React, { useEffect, useState } from 'react'
import NourContainer from '../../components/core/NourContainer'
import NourButton from '../../components/core/NourButton'

import "./index.scss"
import NourIcon from '../../components/core/NourIcon';

// import { useGoogleLogin } from '@react-oauth/google';
import AuthService from '../../services/authService';
import NourToast from '../../components/core/NourToast';
import { useNavigate } from "react-router-dom";
import url from '../../var/url';


let formElements;

export default function Login() {

  const [state, setState] = useState({ mounted: false })

  let authService = AuthService.getAuthService();

  function onFocus(e) {
    let label = e.target.parentNode.children[0]
    formElements.forEach(form_element => {
      form_element.classList.remove('active');
    })
    label.classList.toggle("active")
  }

  useEffect(() => {
    if (state.mounted) {
      formElements = document.querySelector("form").querySelectorAll('*')
      formElements?.forEach(input => {
        input.addEventListener("focus", onFocus)
      })
    }
    setState(state => ({ ...state, mounted: true }))
    return () => {
      if (state.mounted) {
        formElements?.forEach(input => {
          input.removeEventListener("focus", onFocus)
        })
      }
    }
  }, [state.mounted])

  const navigate = useNavigate();

  // const login = useGoogleLogin({
  //   onSuccess: codeResponse => console.log(codeResponse),
  //   flow: 'auth-code',
  // });

  /**
   * 
   * @param {} e 
   */
  async function requestForLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (await authService.loginAttempt(formData)) {
      setState((state) => ({ ...state, toast: { type: 'success', message: "Vous êtes connecté avec succès" } }))
      let timer = setTimeout(() => {
        navigate(url.achat.publicOffersUrl)
        clearTimeout(timer)
      }, 5000)
    }
  }

  function hideToast() {
    setState((state) => ({ ...state, toast: undefined }))
  }

  return (
    <NourContainer>
      {state.toast && <NourToast hideToast={hideToast} toast={state.toast} />}
      <div className='auth__login'>
        <div className='login__form'>
          <img src='/img/logo.png' />
          <form method='post' onSubmit={requestForLogin}>
            {Object.keys(fields).map((key, index) =>
              <div key={index} className='form-row'>
                <div className="form-group">
                  <label htmlFor={key}>{fields[key]}</label>
                  <input type="text" name={key} id={key} />
                </div>
              </div>)}

            <div className='form-row'>
              <div className="form-row">
                <NourButton type="submit" className="btn btn-primary">Login</NourButton>
              </div>
            </div>
          </form>
          <div className='social__login' onClick={() => {}} ><NourIcon icon="google" /> Se connecter via Google</div>
          <div className='social__login'><NourIcon icon="facebook" /> Se connecter via Facebook</div>
        </div>
      </div>
    </NourContainer>
  )
}


const fields = {
  email: "Email",
  password: "Mot de Passe",
}