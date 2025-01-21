import React from 'react'
import Form from './components/Form'

function RightSection() {
    return (
        <div className='rounded-r-lg col-span-7 divide-y divide-solid  divide-blue-800 ' style={{ background: '#0f1a3f' }}>
            <div className='flex p-4 gap-4 items-center'>
                <div className='ml-2'>
                    <img src="logo.png" alt="" srcSet="" width={32} height={32} />
                </div>
                <h2 className='col-span-3'>Bot 1 Info</h2>
            </div>
            <div className='flex flex-col justify-between p-4' style={{height: "calc(100% - 80px)"}}>
                <p>Message sent</p>
                <Form/>
            </div>
        </div>
    )
}

export default RightSection