import React from 'react';
import './TestimonialsWrapper.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

const TestimonialsWrapper = () => {
    return (
        <div className="wrapper">
            <h1>TESTIMONIALS</h1>
            <div className="buttons">
                <div className="left__btn">
                    <ArrowBackIosIcon />
                </div>
                <div className="right__btn"> <ArrowForwardIosIcon/></div>
            </div>
        </div>
    )
};

export default TestimonialsWrapper