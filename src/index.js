import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './fonts/OCRAEXT.TTF'
import './fonts/isocpeur.ttf'
// import './fonts/JdScarabeoLightRegular-EZVl.ttf';
import './fonts/jd_scarabeo_light.ttf'
// import './fonts/ocraextended.ttf';
import { StateProvider } from './StateProvider'
import reducer, { initialState } from './reducer'
import ReactGA from 'react-ga'

import './index.css'

const trackingId = 'UA-197018412-1' // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId)

ReactDOM.render(
    <React.StrictMode>
        <StateProvider reducer={reducer} initialState={initialState}>
            <App />
        </StateProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
