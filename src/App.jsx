import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Container from './components/Container'
import { URLS, usePreviousUrl } from './utils/url'
import { lazy, Suspense, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const HomePage = lazy(() => import('./pages/HomePage'));
const MessagePage = lazy(() => import('./pages/MessagePage'));
const MemberPage = lazy(() => import('./pages/MemberPage'));
const GroupPage = lazy(() => import('./pages/GroupPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const QrCodePage = lazy(() => import('./pages/QrCodePage'));

function App() {

    const [socket, setSocket] = useState(null)

    async function onMounted() {
        let webSocketUrl = import.meta.env.VITE_SOCKET_ENDPOINT
        console.log(webSocketUrl)
        let socket = io(webSocketUrl);
        try { socket.on('connect', () => { setSocket(socket); }) }
        catch (error) { console.log(error) }
    }

    useEffect(() => {
        onMounted()
        return () => { socket?.disconnect(); };
    }, [])

    return (
        <BrowserRouter basename="/">
            <Container socket={socket}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={URLS.home} element={<HomePage />} />
                        <Route path={URLS.message} element={<MessagePage />} />
                        <Route path={URLS.member} element={<MemberPage />} />
                        <Route path={URLS.groups} element={<GroupPage />} />
                        <Route path={URLS.profile} element={<ProfilePage />} />
                        <Route path={URLS.codeScanner} element={<QrCodePage socket={socket} />} />
                    </Routes>
                </Suspense>
            </Container>
        </BrowserRouter>
    )


}

export default App
