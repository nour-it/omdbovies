
import React from 'react'
import NourSection from '../../components/core/NourSection'
import NourGridView from '../../components/core/NourGridView'
import { Link } from 'react-router-dom'
import url from '../../var/url'

export default function Section2() {

  return (
    <NourSection className="home section2">
      <div>Première plateforme de Tontines-Achats et d'Engagements socioéconomiques Matwi Socialement engagé.</div>
      <div>
        <h1>Choississez un pays</h1>
        <NourGridView data={pays} gridItem={(item) => <CountryGridItem item={item} key={item.id} />} className="pays"/>
        <NourGridView data={data} gridItem={(item) => <DataGridItem item={item} key={item.id} />} className="stats"/>
      </div>
    </NourSection>
  )
}

function CountryGridItem({ item }) {
  return <Link className='grid-el' to={url.achat.publicOffersUrl} >
    <div>
      <img src={item.image} />
      <h3>{item.nom}</h3>
    </div>
  </Link>
}

function DataGridItem({ item }) {
  return <div className='grid-el' >
    <div>
      <h1>{item.label}</h1>
      <h3>{item.value}</h3>
    </div>
  </div>
}

const pays = [
  { id: 1, nom: "Togo", image: "/img/flag-togo.png" },
  { id: 2, nom: "Burkina Fase", image: "/img/flag-burkina-faso.png" },
  { id: 3, nom: "Bénin", image: "/img/flag-benin.png" },
  { id: 4, nom: "Tchad", image: "/img/flag-tchad.png" },
  { id: 5, nom: "Niger", image: "/img/flag-niger.png" },
]

const data = [
  { id: 1, label: "clients", value: 30000 },
  { id: 2, label: "Offres", value: 200 },
  { id: 3, label: "Souscriptions", value: 1000 },
  { id: 4, label: "Partenaires", value: 4000 },
]