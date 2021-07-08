import React from 'react'
import Grid from './Grid'
import './Intro.css';
import Typewriter from './Typewriter/Typewriter'
import $ from "jquery";

//alternative width: 1900px

const Intro = () => {
    $(window).on('load',function(){//from  w w w. j ava 2 s  .  co  m
        $(".typewriter").delay(9000).queue(function() {
            $(this).remove();
        });
            });
    return (
        <div className="intro ">
            <Grid />
            <Typewriter/>
        </div>
    )
}

export default Intro
