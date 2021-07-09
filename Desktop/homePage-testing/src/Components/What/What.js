import React from 'react'
import './What.css'
import UpperImage from '../../assets/what-upper.png'
import LowerImage from '../../assets/what-lower.png'
import LeftImage from '../../assets/what-left.png'
import InfoBlock from '../InfoBlock/InfoBlock'

const What = () => {
    return (
        <div className="what" id="what">
            <div className="what__left">
                <div className="top">
                    <div className="top__left">
                        <div className="upper mobile__hidden">
                            <div className="greyRectangle"></div>
                        </div>
                        <div className="lower">
                            <div className="lower__left mobile__hidden">
                                <div className="row1">
                                    <div className="greyFatRectangle"></div>
                                </div>
                                <div className="darkRectangle"></div>
                                <div className="greyRectangle"></div>
                            </div>
                            <div className="lower__right">
                                <img src={LeftImage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mobile__spacer web__hidden">
                        <div className="greyRectangle"></div>
                        <div className="greyRectangle"></div>
                        <div className="greyRectangle"></div>
                    </div>
                    <div className="top__right">
                        <div className="upper">
                            <div className="upper__left">
                                <img src={UpperImage} alt="" />
                            </div>
                            <div className="upper__right mobile__hidden">
                                <div className="greyRectangle"></div>
                            </div>
                        </div>
                        <div className="lower">
                            <img src={LowerImage} alt="" />
                        </div>
                    </div>
                    <div className="space mobile__hidden">
                        <div className="darkRectangle"></div>
                    </div>
                {/* <div className="rightSpacer">
                    <div className="greyLongRectangle web__hidden"></div>
                </div> */}
                </div>
                <div className="bottom mobile__hidden">
                    <div className="greyFatRectangle"></div>
                </div>
            </div>
            <div className="darkRectangle web__hidden"></div>
            <div className="what__rightContent">
                <div className="space mobile__hidden">
                    <div className="darkRectangle"></div>
                </div>
                <div className="what__rightContentTop">
                    <InfoBlock
                        title={'WHAT DO WE DO'}
                        p1={
                            'We make highly customised mobile applications which are \nvery efficient and scalable at low cost.'
                        }
                        p2={
                            "We use Flutter for our front end which is the latest \nframework by Google and Firebase for our backend which \nis one of the world's leading Backend services used by \ncompanies like Alibaba, Accenture and Twitch."
                        }
                    />
                </div>
                <div className="what__rightContentBottom mobile__hidden">
                    <div className="greyRectangle"></div>
                </div>
            </div>
            <div className="darkRectangle web__hidden"></div>
            <div className="what__endRectangle mobile__hidden">
                <div className="darkRectangle"></div>
                <div className="darkRectangle"></div>
                <div className="darkRectangle"></div>
                <div className="greyRectangle "></div>
            </div>
        </div>
    )
}

export default What
