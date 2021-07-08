import React from 'react'
import Grid from './Grid'
import './Intro.css';
import Typewriter from './Typewriter/Typewriter'

//alternative width: 1900px

const Intro = () => {
    return (
        <div className="intro ">
            <Grid />
            <Typewriter />
        </div>
    )
}

export default Intro
