import React, { useEffect, useState } from 'react'
import Header from './sections/Header'
import Movies from './sections/Movies'
import Filters from './sections/Filter'
import Footer from './sections/Footer'
import { useDispatch, useSelector } from 'react-redux'
import MoviesService from '../../../services/moviesService'
import { addMovies } from '../../../store/moviesStore'

function HomePage({ socket }) {
    const [state, setState] = useState({ mounted: false, souscriptionModal: false })

    const moviesStore = useSelector(state => state.moviesStore)
    const dispatch = useDispatch()

    const moviesService = MoviesService.getMoviesService();

    const onScroll = async (e) => {
        // const height = window.innerHeight;
        // const top = e.target.scrollingElement.scrollTop;
        // const maxHeight = e.target.scrollingElement.scrollHeight;
        // if (loading == 1) return
        // if (state.achatService.publicOffer.allLoad) return
        // if (height + top == maxHeight) {
        //     loading = 1;
        //     scrollTo(0, top);
        //     loading = 0;
        // }
    }


    useEffect(() => {
        moviesService.getMovies().then((data) => {
            dispatch(addMovies(data))
        });
        setState((state) => ({ ...state, mounted: true }))
        document.addEventListener('scroll', onScroll)
        return () => {
            setState((state) => ({ ...state, mounted: false }))
            document.removeEventListener("scroll", onScroll)
        }
    }, [])

    console.log(moviesStore)

    return (
        <>
            <Header />
            <Filters moviesStore={moviesStore} />
            <Movies moviesStore={moviesStore} />
            <Footer />
        </>

    )
}

export default HomePage