import React from 'react'
import './Choose.css'
import LeftImage from '../../assets/choose-left.png'
import RightImage from '../../assets/choose-right.png'
import InfoBlock from '../InfoBlock/InfoBlock'

const Choose = () => {
    return (
        <div className="choose" id="choose">
            <div className="choose__left">
                <InfoBlock
                    title={'WHY CHOOSE US'}
                    p1={`Our main focus is quality. We will give you the best \nlooking, most user friendly products with a firm code \nbase, for the right price.`}
                    p2={`If you partner with Pyramid, We will ensure that you \nreceive an end product that exceeds expectations.\nWe follow Agile Development practices to ensure we \nfulfil our promises.`}
                />
            </div>
            <div className="darkRectangle"></div>
            <div className="choose__right">
                <div className="col1">
                    <div className="col1__image">
                        <img src={LeftImage} alt="" />
                    </div>
                    <div className="greyFatRectangle mobile__hidden"></div>
                </div>
                <div className="col2">
                    <div className="greyFatRectangle mobile__hidden"></div>
                    <div className="col2__image">
                        <img src={RightImage} alt="" />
                    </div>
                </div>
                <div className="col3 mobile__hidden">
                    <div className="greyRectangle"></div>
                    <div className="greyRectangle"></div>
                    <div className="darkRectangle"></div>
                    <div className="greyRectangle"></div>
                </div>
                <div className="col4 mobile__hidden">
                    <div className="darkRectangle"></div>
                    <div className="greyRectangle"></div>
                </div>
            </div>
        </div>
    )
}

export default Choose
