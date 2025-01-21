import React, { useEffect, useState } from 'react'
import FilterOffer from './components/FilterOffer'
import { useDispatch, useSelector } from 'react-redux'
import AchatService, { Offer } from '../../../services/achatService'
import { AchatStore, setCategories, setPublicOffers } from '../../../store/achatStore'
import NourGridView from '../../../components/core/NourGridView'
import NourIcon from '../../../components/core/NourIcon'
import { Link } from 'react-router-dom'
import url from '../../../var/url'
import { categoryFilter, nameFilter, subCategoryFilter } from '../function/filter'
import NourLoader from '../../../components/core/NourLoader'

let loading = 0;

export default function OfferList() {

  const [state, setState] = useState({ mounted: false, loading: false, achatService: AchatService.getAchatService() })

  /**@type {AchatStore} */
  const store = useSelector(state => state.achatStore)
  const dispatch = useDispatch()

  async function loadFetch() {
    if (state.mounted && !state.loading) {
      if (store.publicOffers.items.length == 0) {
        setState((state) => ({ ...state, loading: true }))
        const { offers, total } = await state.achatService.loadPublicOffer()
        dispatch(setPublicOffers({ items: offers, total: total }))
        setState((state) => ({ ...state, loading: false }))
        if (!state.achatService.categories?.allLoad) {
          const { categories } = await state.achatService.loadOffersCategories()
          dispatch(setCategories(categories));
        }
      }
    }
  }

  const onScroll = async (e) => {
    const height = window.innerHeight;
    const top = e.target.scrollingElement.scrollTop;
    const maxHeight = e.target.scrollingElement.scrollHeight;
    if (loading == 1) return
    if (state.achatService.publicOffer.allLoad) return
    if (height + top == maxHeight) {
      loading = 1;
      await loadFetch();
      scrollTo(0, top);
      loading = 0;
    }
  }

  useEffect(() => {
    setState((state) => ({ ...state, mounted: true }))
    loadFetch();
    document.addEventListener('scroll', onScroll)
    return () => {
      setState((state) => ({ ...state, mounted: false }))
      document.removeEventListener("scroll", onScroll)
    }
  }, [state.mounted])

  if (!state.mounted) return

  let data = [...store.publicOffers.items];

  data = categoryFilter(store.filtre, data)
  data = subCategoryFilter(store.filtre, data)
  data = nameFilter(store.filtre, data)
  return (
    <div>
      <FilterOffer />
      <NourGridView data={data} gridItem={(item, key) => <OfferGridItem item={item} key={key} />} className="offers" />
      {state.loading && <NourLoader />}
    </div>
  )
}


/**
 * 
 * @param {Object} props
 * @param {Offer} props.item 
 * @returns 
 */
function OfferGridItem(props) {
  const { item } = props;
  return <div className='grid-el offer'>
    <img src='/img/offer.jpg' />
    <span className='note'>{item?.note || ""}</span>
    <h1 className='name'>{item.name}</h1>
    <p className='price'>{item.price}</p>
    <div className='detail'>
      <div className='view'><NourIcon icon="eye" />12</div>
      <div className='like'><NourIcon icon="heart" />0</div>
      <Link className="btn btn-primary" to={url.achat.offerDetailUrl(item.id)}>Voir Plus</Link>
    </div>
  </div>
}