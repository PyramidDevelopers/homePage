import React from 'react';
import './Intro.css';
import { Link } from "react-scroll";

const Intro = () => {
    var colors = ['#ffca60','#FF60BB','#DBFF60','#FF6085','#60FFBA','#B460FF','#60EFFF','#FF7660'];
    var counter = 0;

    const onClick = (e) =>{
        e.preventDefault();
        document.documentElement.style.setProperty('--general-color', colors[counter]);
        counter = (counter+1)%8;
    }
    
    return (
        <div className="intro">
            <div className="intro__top">
                <div className="row">
                    <div className="greyRectangle"></div>
                </div>
                <div className="row">
                    <div className="greyRectangle"></div>
                </div>
            </div>

            <div className="intro__name">
                <div className="greyRectangle"></div>
                <div className="pyramid">
                    <h1>PYRAMID</h1>
                </div>

                <div className="clickMe">
                    <button onClick={onClick}>CLICK ME&gt;</button>
                    {/* <h6>CLICK ME&gt;</h6> */}
                </div>
  
            </div>
            <div className="intro__developers">
                <div className="greyRectangle"></div>
                <div className="developers">
                    <h1>developers</h1>
                </div> 
            </div>
            

            <div className="intro__bottom">
                <div className="phrase">
                    <h3>a student community of <br/>digital revolutionaries</h3>
                </div>

                <div className="greyRectangle"></div>
                <div className="link">
                <Link
                    activeClass="active"
                    to="reachUs"
                    spy={true}
                    smooth={true}
                    offset={-160}
                    duration={1000}
                >
                    <h3 className="giveUs">Give Us<br /> A Project<br />&gt;&gt;&gt;</h3>
                </Link>
                </div>

                <div className="link">
                <Link
                    activeClass="active"
                    to="reachUs"
                    spy={true}
                    smooth={true}
                    offset={-160}
                    duration={1000}
                >
                    <h3 className = "join">Become A<br /> Part Of Us<br />&gt;&gt;&gt;</h3>
                </Link>
                </div>
            </div>

        </div>
    )
}

export default Intro;
