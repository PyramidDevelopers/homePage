import React from 'react'
import './Show.css'
// import ShowDetails from '../ShowDetails/ShowDetails'
import enermanApp from '../../assets/enerman-app.png'
import vitalMinds from '../../assets/vital-minds.png'
import nearVibe from '../../assets/near-vibe.png'
import nutriFamily from '../../assets/nutri-family.png'
import takeYourTrip from '../../assets/take-your-trip.png'

const Show = () => {
    return (
        <div className="show" id="show">
            <div className="show__top">
                {/* <div className="greyFatRectangle darkChange"></div> */}
                <div className="darkRectangle"></div>
                {/* <div className="darkRectangle"></div> */}
                <div className="greyRectangle"></div>
                <div className="greyRectangle"></div>
                <div className="top__text ">
                    <h1 className="text-center">SHOW ME WHAT YOU GOT</h1>
                </div>
                <div className="darkRectangle"></div>
                <div className="greyFatRectangle"></div>
            </div>
            <div className="show__bottom">
                <div className="bottom__left FlexColumn">
                    <div>
                        <div className="darkRectangle"></div>
                    </div>
                    <div>
                        <div className="greyFatRectangle"></div>
                    </div>
                    <div>
                        <div className="darkRectangle"></div>
                    </div>
                    <div>
                        <div className="greyLongRectangle"></div>
                    </div>
                    <div>
                        <div className="greyRectangle"></div>
                    </div>
                    <div>
                        <div className="greyRectangle"></div>
                    </div>
                    <div>
                        <div className="greyLongRectangle darkChange"></div>
                    </div>
                </div>
                <div className="bottom__center">
                    <div className="center__left FlexColumn">
                        <div className="center__leftTop">
                            <div className="greyRectangle"></div>
                            <div className="greyFatRectangle"></div>
                        </div>
                        <div className="center__leftMid">
                            <div className="leftMid__text FlexColumn">
                                <div className="status">
                                    <p>ONGOING</p>
                                </div>
                                <h4>Nutri.family</h4>
                                <h5>
                                    An innovative health-tech platform <br />
                                    where families get healthier, together!
                                </h5>
                            </div>
                            <div className="leftMid__image">
                                <img src={nutriFamily} alt="" />
                            </div>
                        </div>
                        <div className="center__leftMid">
                            <div className="leftMid__text FlexColumn">
                                <div className="status">
                                    <p>ONGOING</p>
                                </div>
                                <h4>NearVibe</h4>
                                <h5>
                                    A platform to share, react & discover <br />
                                    how people are feeling in your area
                                </h5>
                                {/* <div className="title">

                                </div> */}
                                {/* <div className="subTitle">

                                </div> */}
                            </div>
                            <div className="leftMid__image">
                                <img src={nearVibe} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="center__right FlexColumn">
                        <div className="center__rightMid">
                            <div className="rightMid__text FlexColumn">
                                <div className="status">
                                    <p>ONGOING</p>
                                </div>
                                <h4>VitalMinds</h4>
                                <h5>
                                    Personal mental health <br />
                                    assistant
                                </h5>
                                {/* <div className="title">

                                </div> */}
                                {/* <div className="subTitle">

                                </div> */}
                            </div>
                            <div className="rightMid__image">
                                <img src={vitalMinds} alt="" />
                            </div>
                        </div>
                        <div className="center__rightMid">
                            <div className="rightMid__text FlexColumn">
                                {/* <div className="status">
                                    <p>ONGOING</p>
                                </div> */}
                                <h4>Enerman App</h4>
                                <h5>
                                    Solar Panel information
                                    <br />
                                    dashboard
                                </h5>
                                {/* <div className="title">

                                </div> */}
                                {/* <div className="subTitle">

                                </div> */}
                            </div>
                            <div className="rightMid__image">
                                <img src={enermanApp} alt="" />
                            </div>
                        </div>
                        <div className="center__rightMid">
                            <div className="rightMid__text FlexColumn">
                                {/* <div className="status">
                                    <p>ONGOING</p>
                                </div> */}
                                <h4>TakeYourTrip</h4>
                                <h5>A travel booking app</h5>
                                {/* <div className="title">

                                </div> */}
                                {/* <div className="subTitle">

                                </div> */}
                            </div>
                            <div className="rightMid__image">
                                <img src={takeYourTrip} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom__right FlexColumn gap-3">
                    <div className="greyRectangle"></div>
                    <div className="darkRectangle "></div>
                    <div className="greyLongRectangle"></div>
                    <div className="greyLongRectangle darkChange"></div>
                    <div className="greyFatRectangle"></div>
                    <div className="greyFatRectangle"></div>
                </div>
            </div>
            <div className="bottomCrap">
                <div className="darkRectangle"></div>
                <div className="greyFatRectangle"></div>
            </div>
        </div>
    )
}

export default Show
