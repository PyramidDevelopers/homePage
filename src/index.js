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

import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <StateProvider reducer={reducer} initialState={initialState}>
            <App />
        </StateProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
