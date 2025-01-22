import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { URLS } from './utils/url'

function LeftSection({ socket }) {

    async function onMounted() {
        try {
        } catch (error) { console.log(error) }
        return () => { socket?.disconnect(); };
    }

    useEffect(() => {
        onMounted()
        return () => { }
    }, [])


    return (
        <div className='divide-y divide-solid col-span-3 divide-blue-800 relative'>
            <Link to={'/'} className=''>
                <div className='flex p-4 gap-4 items-center w-max'>
                    <div className='ml-2'>
                        <img src="/logo.png" alt="" srcSet="" width={32} height={32} />
                    </div>
                    <h2 className='col-span-3 font-bold text-xl'>Bots</h2>
                </div>
            </Link>
            <ul className='p-4 divide-y divide-solid divide-blue-800'>
            </ul>
            <Link to={URLS.codeScanner}>
                <div className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full absolute bottom-8 right-10 drop-shadow-md hover:drop-shadow-2xl'>A</div>
            </Link>
        </div>
    )
}

export default LeftSection