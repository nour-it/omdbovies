

import React, { useEffect } from 'react'
import NourContainer from '../../components/core/NourContainer'
import Section1 from './Section1'
import Section2 from './Section2'
import HomeHeader from '../../components/header/HomeHeader'

import "./index.scss"
import HomeFooter from '../../components/footer/HomeFooter'

function HomeIndex(props) {

  useEffect(() => {

    
    return () => {
       
    }
  }, [])
  
  
  return (
    <NourContainer>
      <HomeHeader/>
      <Section1/>
      <Section2/>
      <HomeFooter/>
    </NourContainer>
  )
}


export default HomeIndex
