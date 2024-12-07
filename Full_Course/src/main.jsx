import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Globalstate from './context/index.jsx'

createRoot(document.getElementById('root')).render(

    // <App />
    // <Globalstate>
    //     <App/>
    // </Globalstate>
    <React.StrictMode>
        <App/>
    </React.StrictMode>

)
