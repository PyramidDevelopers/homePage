import React from 'react';
import './Typewriter.css';
import Typist from 'react-typist-component';

const Typewriter = () => {
    // const intro_letters = {
    //     32: 'P',
    //     33: 'Y',
    //     34: 'R',
    //     35: 'A',
    //     36: 'M',
    //     37: 'I',
    //     38: 'D',
    //   };
    return (
        <div className='typewriter'>
            <Typist 
            className='typewriter__typist'
            startDelay={1000} 
            avgTypingDelay={0}>
                    <div className="typewriter__intro">
                        <div className="typewriter__letter">P</div>
                        <div className="typewriter__letter">Y</div>
                        <div className="typewriter__letter">R</div>
                        <div className="typewriter__letter">A</div>
                        <div className="typewriter__letter">M</div>
                        <div className="typewriter__letter">I</div>
                        <div className="typewriter__letter">D</div>
                        <div className="typewriter__letter"> </div>
                    </div>
                    <div className="typewriter__subtitle">
                        <p>developers</p>
                    </div>
            </Typist>
            {/* _.map(intro_letters, (item, i) => {
                <div className="typewriter__letter">
                    <p>{item}</p>
                </div>
            }) */}

        </div>
    )
}

export default Typewriter
