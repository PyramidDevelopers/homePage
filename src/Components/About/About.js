import React from 'react'
import UpperImage from '../../assets/who-upper.png'
import LowerImage from '../../assets/who-lower.png'
import RightImage from '../../assets/who-right.png'
import InfoBlock from '../InfoBlock/InfoBlock'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import './About.css'

const About = () => {
    return (
        <div className="about" id="about">
            <div className="top__spacer">
                <div className="about__top">
                    <div className="greyRectangle mobile__hidden"></div>
                    <div className="greyFatRectangle mobile__hidden"></div>
                    {/* <div className="darkRectangle"></div> */}
                </div>
            </div>
            <div className="about__bottom ">
                <div className="about__mobileTop web__hidden">
                    <div className="mobile__left">
                        <div className="darkRectangle"></div>
                        <div className="greyRectangle"></div>
                        <div className="greyRectangle"></div>
                    </div>
                    <div className="mobile__right">
                        <div className="greyRectangle"></div>
                        <div className="darkRectangle"></div>
                    </div>
                </div>
                <div className="about__left">
                    <div className="mobile__left web__hidden">
                        <div className="greyFatRectangle"></div>
                        <div className="greyLongRectangle"></div>
                    </div>
                    <InfoBlock
                        title={'WHO ARE WE'}
                        p1={
                            'Simply put, we want to help you convert your idea into a reality. \nWe develop apps, make websites, design interfaces, \ncreate backend architecture and much more.'
                        }
                        p2={
                            'With over 40 projects under our belt, we bring a vast \nskillset to the table. We have made comprehensive \nand quality software products for clients across industries.'
                        }
                    />
                    <div className="space">
                        <div className="greyRectangle mobile__hidden"></div>
                    </div>
                    <div className="mobile__right web__hidden">
                        <div className="greyLongRectangle darkChange"></div>
                        <div className="greyRectangle"></div>
                    </div>
                </div>
                <div className="about__mobileBottom web__hidden">
                    <div className="mobile__left">
                        <div className="darkRectangle"></div>
                        <div className="greyRectangle"></div>
                    </div>
                    <div className="mobile__right">
                        <div className="greyRectangle"></div>
                        <div className="greyRectangle"></div>
                    </div>
                </div>
                <div className="about__right">
                    <div className="images__left">
                            <div className="images__upper">
                                <img src={UpperImage} alt="" />
                            </div>
                            <div className="images__lower">
                                <img src={LowerImage} alt="" />
                            </div>
                    </div>

                    <div className="images__right">
                        <div className="socialMedia">
                            <div className="greyRectangle yellow">
                                <a
                                    href="https://www.linkedin.com/company/pyramid-developers/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <LinkedInIcon />
                                </a>
                            </div>
                            <div className="greyRectangle yellow">
                                <a
                                    href="http://www.instagram.com/pyramid_developers"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <InstagramIcon />
                                </a>
                            </div>
                            <div className="greyRectangle yellow">
                                <a
                                    href="https://www.facebook.com/PyramidDeveloper"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FacebookIcon />
                                </a>
                            </div>
                        </div>
                        <div className="images__inner">
                            <div className="images__innerLeft">
                                <div className="images__innerInnerLeft">
                                    <img
                                        className="images__innerInnerLeftInside"
                                        src={RightImage}
                                        alt=""
                                    />
                                </div>
                                <div className="images__innerBox">
                                    <div className="greyFatRectangle mobile__hidden"></div>
                                </div>
                            </div>
                            <div className="images__innerRight">
                                <div className="greyRectangle mobile__hidden"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
