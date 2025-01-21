import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import axios from 'axios';

function QrCodePage({ socket }) {
    const [state, setState] = useState({ qrCodeUrl: null, socket });
    async function printCode(qrcode) {
        try {
            const url = await QRCode.toDataURL(qrcode);
            setState({ ...state, qrCodeUrl: url });
        } catch (err) { console.error(err); }

    }

    useEffect(() => {
        axios({
            method: "get",
            url: import.meta.env.VITE_API_ENDPOINT,
            headers: {
                authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then(response => {
                if (response.status >= 200 && response.status < 400) {
                    printCode(response.data)
                }
            })
            .catch(error => {
                console.log('Error:', error);
            });

        function onNewCode(code) {
            if (code) {
                printCode(code)
            }
        }
        socket.on("new:qrcode", onNewCode)
        return () => {
            socket.off("new:qrcode", onNewCode)
        };

    }, [])


    return (
        <div className='rounded-r-lg col-span-7 divide-y divide-solid  divide-blue-800 flex justify-center items-center ' style={{ background: '#0f1a3f' }}>
            {state.qrCodeUrl ? (
                <img src={state.qrCodeUrl} alt="QR Code" style={{ width: "60%", height: "auto" }} />
            ) : (
                <p>Generating QR Code...</p>
            )}
        </div>
    )
}

export default QrCodePage