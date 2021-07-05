import React from 'react';
import './Testimonials.css';

const Testimonials = ({ description, clientName, companyName, isFirst}) => {
    return (
        <div className='testimonials'>
            <div className="testimonials__text">
                <p> {description}</p>
                <div className='client'>{clientName} </div>
                <h4 className='company'>{companyName }</h4>
            </div>
        </div>
    )
}

export default Testimonials;

    