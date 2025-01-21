import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import NavBar from '../components/NavBar'
import useStore from '../utils/store'
import { useNavigate, useParams } from 'react-router-dom'
import Service from '../utils/service'
import { heure } from '../utils/date'
import { usePreviousUrl } from '../utils/url'

function MessagePage() {

    const [bots, messages, setMessages, addMessage]
        = useStore((state) => [state.bots, state.messages, state.setMessages, state.addMessage])
    const navigate = useNavigate();
    const { id } = useParams();


    function onLoadMessages(messages) {
        setMessages(messages)
    }

    async function onSendMessage(event) {
        // setMessages(messages.concat(message.get("message")))
        const data = new FormData(event.target)
        data.forEach((value, key) => { console.log(key + ': ' + value) });
        let message = await Service.shareMessage(id, data)
        addMessage(message)
        event.target.querySelectorAll("input")
            .forEach((input, index) => {
                input.value = ""
            })
    }

    useEffect(() => {

        if (!bots.find(b => b.id == id)) {
            navigate("/")
        }

        Service.getBotSharedMessages(id)
            .then(onLoadMessages)
            .catch(console.log)

        return () => {

        }
    }, [id])

    return (
        <div className='rounded-r-lg col-span-7 divide-y divide-solid divide-blue-800 overflow-hidden h-[calc(100%)]' style={{ background: '#0f1a3f' }}>
            <NavBar />
            <div className='flex flex-col justify-between h-[calc(100%-64px)] pb-4'>
                <div className='flex flex-col gap-2 overflow-y-auto py-4'>
                    {messages.map((m, index) => {
                        return (
                            <div key={index.toString()} className='bg-blue-700 w-max mx-4 p-1 rounded-2xl flex flex-col min-w-[10%]' style={{'maxWidth': '70%'}}>
                                {m.file ? <div className='rounded-2xl bg-white overflow-hidden min-w-[100px] max-w-[500px]'>
                                    <img src={m.file.split('public')[1]} width={"100%"} />
                                </div> : null}
                                <p className='px-4 pt-2'>{m.content}</p>
                                <p className='text-xs px-4 ml-auto'>{heure(m.timestamp)}</p>
                            </div>
                        )
                    })}
                </div>
                <Form onSendMessage={onSendMessage} />
            </div>
        </div>
    )
}

export default MessagePage