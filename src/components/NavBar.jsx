
import React from 'react'
import { Link, useParams } from 'react-router-dom'


function NavBar() {

    const { id } = useParams();


    return (
        <div className='flex items-center justify-between p-4'>
            <div className='flex gap-4 items-center'>
                <div className='ml-2'>
                    <img src="/logo.png" alt="" srcSet="" width={32} height={32} />
                </div>
                <h2 className='col-span-3'>Bot {id} Info</h2>
            </div>
            <nav>
                <ul className='flex gap-5 '>
                    <li className='hover:text-blue-700'>
                        <Link to={`/message/${id}`}>Messages</Link>
                    </li>
                    <li className='hover:text-blue-700'>
                        <Link to={`/member/${id}`}>Member</Link>
                    </li>
                    <li className='hover:text-blue-700'>
                        <Link to={`/groups/${id}`}>Groups</Link>
                    </li>
                    <li className='hover:text-blue-700'>
                        <Link to={`/profile/${id}`}>Profile</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar