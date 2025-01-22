import React from 'react'
import { Link } from 'react-router-dom'
import { URLS } from '../../../../utils/url'

function Header() {
    return (
        <header className="relative bg-[url('/img/poster.jpg')] bg-cover bg-center w-[100vw] aspect-[2.4] opacity-1 animate-fade-in transition-opacity duration-1000 ease-in-out text-white">
            <div className='container flex flex-col gap-[80px] mx-auto p-4'>
                <div className='flex items-center justify-between gap-4'>
                    <div className="flex items-center font-bold text-[24px] gap-4">
                        <div className="bg-[url('/icon/logo.svg')] w-[50px] aspect-[1]" />
                        <h1>OMDB Movies</h1>
                    </div>
                    <div className="flex flex-1 items-center justify-between relative max-w-[525px]">
                        <input type="text" name="q" id="q" placeholder='What do you want to watch?' className='border border-gray-300 px-2 rounded-md w-full bg-transparent' />
                        <div className="bg-[url('/icon/search.svg')] w-[16px] aspect-[1] absolute right-3 top-1 text-gray-400" />
                    </div>
                    <Link to={URLS.login} className='flex items-center font-bold text-[16px] gap-4'>
                        <div>Sign in</div>
                        <div className="bg-[url('/icon/menu.svg')] w-[36px] aspect-[1]" />
                    </Link>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-[285px] flex flex-col gap-[16px] ">
                        <h1 className="text-bold text-[24px]">John Wick 3 : Parabellum</h1>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="bg-[url('/icon/brand.svg')] w-[35px] h-[17px]" />
                                <div>86.0/100</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-[url('/icon/orange.svg')] w-[16px] h-[17px]" />
                                <div>97%</div>
                            </div>
                        </div>
                        <p>
                            John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
                        </p>
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
