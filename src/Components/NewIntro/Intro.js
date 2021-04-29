import React from 'react';
import Grid from './Grid';
import './Intro.css';

const Intro = () => {
  return (
    <div className='intro'>
      {/* <div className="intro__title">
                <div className="intro__titleLetter">
                    <span>P</span>
                </div>

                <div className="intro__titleLetter">
                    <span>Y</span>
                </div>

                <div className="intro__titleLetter">
                    <span>R</span>
                </div>

                <div className="intro__titleLetter">
                    <span>A</span>
                </div>

                <div className="intro__titleLetter">
                    <span>M</span>
                </div>

                <div className="intro__titleLetter">
                    <span>I</span>
                </div>

                <div className="intro__titleLetter">
                    <span>D</span>
                </div>

                <div
                    className="intro__titleLetter intro__click"
                    onClick={() => {
                        console.log('Color Should change')
                    }}
                >
                    <span>CLICK ME &gt;</span>
                </div>
            </div>

            <div className="intro__subtitle">
                <span>developers</span>
            </div>

            <div className="intro__description">
                <span>
                    a student community of <br />
                    digital revolutionaries
                </span>
            </div> */}
      <Grid />
    </div>
  );
};

export default Intro;
