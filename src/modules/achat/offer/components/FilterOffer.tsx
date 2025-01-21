import React, { useState } from 'react'
import NourSection from '../../../../components/core/NourSection'
import NourIcon from '../../../../components/core/NourIcon'
import { useDispatch, useSelector } from 'react-redux'
import NourModal from '../../../../components/core/NourModal'
import { AchatStore, setFilter } from '../../../../store/achatStore'
import "./index.scss"
import NourGridView from '../../../../components/core/NourGridView'

export default function FilterOffer() {

  /**@type {AchatStore} */
  const store = useSelector(state => state.achatStore)
  const dispatch = useDispatch()

  const [state, setState] = useState({ mounted: false, modal: false })

  function closeModal(e) {
    if (e?.target.className == "body") return
    setState((state) => ({ ...state, modal: !state.modal }))
  }

  function updateFiltre(field) {
    if (field == "name") {
      if (store.filtre?.name == "asc") {
        dispatch(setFilter({ name: "desc" }))
      } else {
        dispatch(setFilter({ name: "asc" }))
      }
      return
    }
    setState((state) => ({ ...state, modal: !state.modal, type: field }))
  }

  return (
    <NourSection className="offer__filter">
      <div onClick={(e) => updateFiltre(filter.category)}  ><NourIcon icon="category" />Catégorie</div>
      <div onClick={(e) => updateFiltre(filter.subCategory)}><NourIcon icon="sub-category" />Sous Catégorie</div>
      <div onClick={(e) => updateFiltre(filter.name)}><NourIcon icon="asc-name" />Nom</div>
      <div><NourIcon icon="sub-category" />Prix</div>
      <div><NourIcon icon="sub-category" />Date de d'arrivée</div>
      <div><NourIcon icon="sub-category" />Recherche</div>
      {state.modal && <FilterModal closeModal={closeModal} type={state.type} store={store} dispatch={dispatch} />}
    </NourSection>
  )
}

/**
 * @typedef {Object} FilterProps
 * @property {AchatStore} store
 * @param {FilterProps} props
 * @returns 
 */
function FilterModal({ closeModal, type, store, dispatch }) {

  if (type == filter.category) {
    function clickCategory(cat) {
      dispatch(setFilter({ ...store.filtre, category: cat, subCategory: {} }))
      closeModal();
    }
    return <NourModal closeModal={closeModal}>
      <NourGridView className='cat-grid'>
        {store.categories.map((cat, i) =>
          <div key={i} className='cat-box' onClick={() => clickCategory(cat)}>
            <NourIcon icon="category" />
            {cat.libelle}
          </div>
        )}
      </NourGridView>
    </NourModal>
  }

  if (type == filter.subCategory) {
    function clickSubCategory(subCat) {
      dispatch(setFilter({ ...store.filtre, subCategory: subCat }))
      closeModal();
    }
    if (store.filtre.category) {
      let cat = store.categories.find((cat) => cat.id == store.filtre.category.id)
      let subCats = cat.sous_categories;
      return <NourModal closeModal={closeModal}>
        <NourGridView className='cat-grid'>
          {subCats.map((subCat, i) =>
            <div key={i} className='cat-box' onClick={() => clickSubCategory(subCat)}>
              <NourIcon icon="sub-category" />
              {subCat.libelle}
            </div>
          )}
        </NourGridView>
      </NourModal>
    }


  }

  return null;

}


const filter = {
  category: "category",
  name: "name",
  subCategory: "sub-category",
  date: "date",
  search: "search",
}