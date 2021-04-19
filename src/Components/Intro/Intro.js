import React from 'react';
import './Intro.css';

const Intro = () => {
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
                    <h6>CLICK ME&gt;</h6>
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
                    <h3 className="giveUs">Give Us<br /> A Project<br />&gt;&gt;&gt;</h3>
                </div>

                <div className="link">
                    <h3 className = "join">Become A<br /> Part Of Us<br />&gt;&gt;&gt;</h3>
                </div>
            </div>

        </div>
    )
}

export default Intro;
