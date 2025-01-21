import React from 'react';
import NavBar from '../components/NavBar';
import { Link, useParams } from 'react-router-dom';
import { usePreviousUrl } from '../utils/url';

function ProfilePage() {

    const { id } = useParams();

    return (
        <div className='rounded-r-lg col-span-7 divide-y divide-solid  divide-blue-800 ' style={{ background: '#0f1a3f' }}>
            <div className='flex flex-col justify-between p-4' style={{ height: "calc(100% - 80px)" }}>
                <Link to={`/message/${id}`}>
                    <p>Go Back</p>
                </Link>
            </div>
        </div>
    )
}

export default ProfilePage