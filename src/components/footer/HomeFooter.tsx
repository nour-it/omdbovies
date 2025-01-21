import React, { useEffect, useState } from 'react'
import NourGridView from '../core/NourGridView'

import "./index.scss";

export default function HomeFooter() {
  const [state, setState] = useState({ mounted: false })

  useEffect(() => {
    setState((state) => ({ ...state, mounted: true }))
    return () => {
      setState((state) => ({ ...state, mounted: false }))
    }
  }, [])

  if (!state.mounted) return

  return (
    <footer className='home__footer'>
      <NourGridView data={footerElements} gridItem={(item) => <FooterGridItem item={item} key={item.id} />} />
      <hr/>
      <span>© Copyright MaTwi 2021. All Rights Reserved. Powered by TixPROS</span>
    </footer>
  )
}

function FooterGridItem({ item }) {
  return <div className='grid-el'>
    <h1>{item.title}</h1>
    <ul>
      {item.children.map((c, i) => <li key={i}>{c.label}</li>)}
    </ul>
  </div>
}

const footerElements = [
  {
    id: 1,
    title: "Société",
    children: [
      {
        label: "Qui sommes nous ?"
      },
      {
        label: "Notre Concepte"
      },
      {
        label: "Nous contacter"
      },
    ]
  },
  {
    id: 2,
    title: "Partenaire et revendeur",
    children: [
      {
        label: "Qui sommes nous ?"
      },
      {
        label: "Notre Concepte"
      },
      {
        label: "Nous contacter"
      },
    ]
  },
  {
    id: 3,
    title: "Nous contacter",
    children: [
      {
        label: "Qui sommes nous ?"
      },
      {
        label: "Notre Concepte"
      },
      {
        label: "Nous contacter"
      },
    ]
  },
  {
    id: 4,
    title: "Suivez nous",
    children: [
      {
        label: "Qui sommes nous ?"
      },
      {
        label: "Notre Concepte"
      },
      {
        label: "Nous contacter"
      },
    ]
  },
  {
    id: 5,
    title: "Informations Légales",
    children: [
      {
        label: "Qui sommes nous ?"
      },
      {
        label: "Notre Concepte"
      },
      {
        label: "Nous contacter"
      },
    ]
  },
  {
    id: 6,
    title: "Télécharger Matwi Mobile",
    children: [
      {
        label: "Qui sommes nous ?"
      },
      {
        label: "Notre Concepte"
      },
      {
        label: "Nous contacter"
      },
    ]
  },
  {
    id: 7,
    title: "News Letter",
    children: [
      {
        label: "Qui sommes nous ?"
      },
      {
        label: "Notre Concepte"
      },
      {
        label: "Nous contacter"
      },
    ]
  },
]
