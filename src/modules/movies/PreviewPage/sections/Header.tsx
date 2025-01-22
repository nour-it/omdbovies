import React from 'react'
import { Link } from 'react-router-dom'
import { URLS } from '../../../../utils/url'

function Header({movie}) {

    return (
        <header className="relative bg-cover bg-center w-[100vw] aspect-[2.4] opacity-1 animate-fade-in transition-opacity duration-1000 ease-in-out text-white" style={{ "backgroundImage": `url('${movie.Poster}')` }}>
            <div className='container flex flex-col gap-[80px] mx-auto p-4'>
                <div className='flex items-center justify-between gap-4'>
                    <div className="flex items-center font-bold text-[24px] gap-4">
                        <div className="bg-[url('/icon/logo.svg')] w-[50px] aspect-[1]" />
                        <h1>OMDB Movies</h1>
                    </div>
                 
                    <Link to={URLS.login} className='flex items-center font-bold text-[16px] gap-4'>
                        <div>Sign in</div>
                        <div className="bg-[url('/icon/menu.svg')] w-[36px] aspect-[1]" />
                    </Link>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-[285px] flex flex-col gap-[16px] ">
                        <h1 className="text-bold text-[24px]">{movie.Title}</h1>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="bg-[url('/icon/brand.svg')] w-[35px] h-[17px]" />
                                <div>{movie.Ratings[0].Value}</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-[url('/icon/orange.svg')] w-[16px] h-[17px]" />
                                <div>{movie.Ratings[1].Value}</div>
                            </div>
                        </div>
                        <p>{movie.Plot} </p>
                        <a href="#" className='w-max bg-rose-500 text-white px-6 py-2 rounded-md hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-300 flex items-center gap-2'>
                            <div className="bg-[url('/icon/play.svg')] h-[20px] aspect-[1]" />
                            <div>Watch trailer</div>
                        </a>
                    </div>
                    <div>Pagination</div>
                </div>
            </div>
        </header>
    )
}

export default Header
