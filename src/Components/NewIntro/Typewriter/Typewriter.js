import React from 'react';
import './Typewriter.css';
import Typist from 'react-typist';

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
            avgTypingDelay={200}>
                    <div className="typewriter__intro">
                        <div>P</div>
                        <div>Y</div>
                        <div>R</div>
                        <div>A</div>
                        <div>M</div>
                        <div>I</div>
                        <div>D</div>
                        <div> </div>
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
