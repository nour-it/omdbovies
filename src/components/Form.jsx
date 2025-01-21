import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import Service from '../utils/service';
import { useParams } from 'react-router-dom';

function Form({ onSendMessage, onAddMember }) {

    const formRef = useRef(null)

    const { id } = useParams();

    async function onMounted() {

        formRef.current.addEventListener("submit", async (event) => {
            event.preventDefault()
            onSendMessage && onSendMessage(event)
            onAddMember && onAddMember(event)
        })
    }

    useEffect(() => {
        onMounted()
        return () => { }
    }, [])


    return (
        <form action="" ref={formRef} method='post'>
            {/* <div class="col-span-full">
                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-100/25 px-6 py-10 relative">
                    <div class="text-center">
                        <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                        </svg>
                        <div class="mt-4 flex text-sm leading-6 text-gray-600">
                            <label for="file" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                <span>Upload a file</span>
                                <input id="file" name="file" type="file" class="sr-only absolute top-0 left-0 right-0 bottom-0" />
                            </label>
                            <p class="pl-1">or drag and drop</p>
                        </div>
                        <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
            </div> */}
            <div>
                <div className="relative mt-2 rounded-md shadow-sm flex gap-2 px-4">
                    {
                        onSendMessage ? (<div className="bg-blue-500 hover:bg-blue-600 text-white w-12 font-semibold rounded-full overflow-hidden relative">
                            <input id="file" name="file" type="file" className="absolute" />
                        </div>) : null
                    }

                    <input
                        id="message"
                        name="message"
                        type="text"
                        placeholder="your message"
                        className="bg-blue-950 block w-full rounded-full border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6 focus:border-blue-800"
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                        S
                    </button>
                </div>
            </div >
        </form >
    )
}

export default Form