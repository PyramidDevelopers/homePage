import React from 'react';
import './Member.css';
// import dhruv from '../../assets/dhruv-shetty.png';

const Member = ({image,name,role}) => {
    return (
        <div className="member">
            <div className="member__image">
                <img src={image} alt=""/>
            </div>
            <div className="member__info">
                <h5>{name}</h5>
                <h6>Business Analyst & Core Developer</h6>
            </div>
        </div>
    )
}

export default Member
