import React from 'react'
import Grid from './Grid'
import './Intro.css'

//alternative width: 1900px

const Intro = () => {
    return (
        <div className="intro w-full 3xl:w-[1900px] mx-auto mb-20">
            <Grid />
        </div>
    )
}

export default Intro
