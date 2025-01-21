import React, { useState } from 'react'
import NourContainer from '../components/core/NourContainer'
import ExperienceHeader from '../components/header/ExperienceHeader'
import HomeFooter from '../components/footer/HomeFooter'
import { SUPPORT } from '../data/support'
import { support } from '../utils/type'


function supportItem(support: support, index: number, array: Object[]): React.ReactNode {

  if (support.illustrationPosition === "left") {
    return <div className='support' key={index.toString()}>
      <div className='illustration rounded' style={{ backgroundImage: `url("/img/support/${support.img}")` }}>
      </div>
      <div className='desc'>
        <h1>{support.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: support.description }} />

      </div>
    </div>
  }

  return <div className='support right' key={index.toString()}>
    <div className='desc'>
      <h1>{support.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: support.description }} />
    </div>
    <div className='illustration rounded' style={{ backgroundImage: `url("/img/support/${support.img}")` }}>
    </div>
  </div>
}

export default function SupportIndex(props: any) {
  const [state, setState] = useState({ theme: localStorage.getItem("theme") });
  function onThemeChange(): void {
    let body = document.body;
    if (body.classList.length > 0) {
      setState({ ...state, theme: "" });
      localStorage.setItem("theme", "");
    } else {
      setState({ ...state, theme: "dark" });
      localStorage.setItem("theme", "dark");
    }
    body.classList.toggle("dark");
  }

  let theme = localStorage.getItem("theme") || ""
  return (
    <NourContainer >
      <ExperienceHeader onThemeChange={onThemeChange} theme={state.theme} />
      <div className="supports">
        {SUPPORT.supports.map(supportItem)}
      </div>
      <HomeFooter theme={theme} />
    </NourContainer>
  )
}
