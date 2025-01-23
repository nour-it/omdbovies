import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Container from './components/Container'
import { URLS, usePreviousUrl } from './utils/url'
import { lazy, Suspense, useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import PreviewPage from './modules/movies/PreviewPage'

const HomePage = lazy(() => import('./modules/movies/HomePage'));

function App() {

    const [socket, setSocket] = useState(null)

    async function onMounted() {
        let webSocketUrl = import.meta.env.VITE_SOCKET_ENDPOINT
        let socket = null//io(webSocketUrl);
        try { socket?.on('connect', () => { setSocket(socket); }) }
        catch (error) { console.log({ error }) }
    }

    useEffect(() => {
        onMounted()
        return () => { socket?.disconnect(); };
    }, [])

    return (
        <BrowserRouter basename="/">
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={URLS.home} element={<HomePage socket={socket} />} />
                    <Route path={URLS.moviePreveiw(":id")} element={<PreviewPage socket={socket} />} />
                    <Route path="*" element={<HomePage socket={socket} />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )


}

export default App
