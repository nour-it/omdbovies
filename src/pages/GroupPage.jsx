import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import useStore from '../utils/store'
import { useNavigate, useParams } from 'react-router-dom'
import Service from '../utils/service'
import { usePreviousUrl } from '../utils/url'

function GroupPage() {

    const [bots, groups, setGroups, addGroup]
        = useStore((state) => [state.bots, state.groups, state.setGroups, state.addGroup])
    const navigate = useNavigate();
    const { id } = useParams();

    function onLoadGroups(groups) {
        setGroups(groups)
    }

    async function onSendMessage(event) {

    }

    useEffect(() => {

        if (!bots.find(b => b.id == id)) {
            navigate("/")
        }

        Service.getBotGroups(id)
            .then(onLoadGroups)
            .catch(console.log)

        return () => {

        }
    }, [id])

    return (
        <div className='rounded-r-lg col-span-7 divide-y divide-solid divide-blue-800 overflow-hidden h-[calc(100%)]' style={{ background: '#0f1a3f' }}>
            <NavBar />
            <div className='flex flex-col justify-between h-[calc(100%-60px)]'>
                <div className='flex flex-col gap-2 overflow-y-auto py-4'>
                    {groups?.map((g, index) => {
                        return (<p key={index.toString()} className='px-3'>
                            {index+1} - {g.name}
                        </p>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default GroupPage