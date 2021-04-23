import React from 'react'
import './Choose.css';
import LeftImage from '../../assets/Map.jpg';
import RightImage from '../../assets/DnD.png';
import InfoBlock from '../InfoBlock/InfoBlock';

const Choose = () => {
    return (
        <div className="choose">
            <div className="choose__left">
                <InfoBlock 
                    title={"WHY CHOOSE US"}
                    p1={"Our main focus is quality. We will give you the best looking, most user friendly products with a firm code base, for the right price."}
                    p2={"If you partner with Pyramid, We will ensure that you receive an end product that exceeds expectations.We follow Agile Development practices to ensure we fulfil our promises."}
                />
            </div>
            <div className="choose__right">
                <div className="col1">
                    <div className="col1__image">
                        <img src={LeftImage} alt=""/>
                    </div>
                    <div className="greyFatRectangle"></div>
                </div>
                <div className="col2">
                    <div className="greyFatRectangle"></div>
                    <div className="col2__image">
                        <img src={RightImage} alt=""/>
                    </div>
                </div>  
                <div className="col3">
                    <div className="greyRectangle"></div>
                    <div className="greyRectangle"></div>
                    <div className="greyRectangle"></div>
                </div>
                <div className="col4">
                    <div className="greyRectangle"></div>
                </div>
            </div>
        </div>
    )
}

export default Choose
