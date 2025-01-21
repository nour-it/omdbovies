import React from 'react'
import LeftSection from '../LeftSection'
import { usePreviousUrl } from '../utils/url';

function Container({ children, socket }) {

    return (
        <div className='text-white bg-gradient-to-tr from-blue-900 to-gray-900  w-full '  >
            <div className='backdrop-blur-sm  min-h-screen flex items-center justify-center' >
                <div className='border border-blue-800 rounded-lg bg-blue-950 divide-x divide-solid grid grid-cols-10  divide-blue-800' style={{ width: "90vw", height: "90vh" }}>
                    <LeftSection socket={socket}/>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Container