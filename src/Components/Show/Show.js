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
        <div className="show flex flex-col items-center">
            <div className="show__top">
                <div className="greyFatRectangle darkChange"></div>
                <div className="greyRectangle"></div>
                <div className="greyRectangle"></div>
                <div className="top__text">
                    <h1>SHOW ME WHAT YOU GOT</h1>
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
                                {/* <div className="title">

                                </div> */}
                                {/* <div className="subTitle">

                                </div> */}
                            </div>
                            <div className="leftMid__image w-[200px]">
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
                            <div className="leftMid__image w-[200px]">
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
                            <div className="rightMid__image w-[200px]">
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
                            <div className="rightMid__image w-[200px]">
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
                            <div className="rightMid__image w-[200px]">
                                <img src={takeYourTrip} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom__right FlexColumn">
                    <div className="greyRectangle"></div>
                    <div className="darkRectangle"></div>
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
            {/* <div className="show__header">
                <div className="show__headerLeftBox">
                    <div className="show__headerLeft" />
                    <div className="show__headerLeft" />
                </div>
                <h1>SHOW ME WHAT YOU GOT</h1>
                <div className="show__headerRight" />
            </div>

            <div className="show__body">
                <div className="show__left">
                    <div className="show__leftTop" />
                    <div className="show__leftBottomOne" />
                    <div className="show__leftBottomBox" />
                    <div className="show__leftBottomBox" />
                </div>

                <div className="show__middle">
                    <div className="show__middleTop">
                        <div className="show__middleTopLeft" />
                        <div className="show__middleTopRight" />
                    </div>

                    <div className="show__middleContent">
                        <ShowDetails
                            status="ONGOING"
                            name="Nutri.family"
                            description="An innovative health-tech platform where families get healthier, together!"
                            image="https://www.setaswall.com/wp-content/uploads/2018/04/Amoled-Phone-Wallpaper-013-1080x2340.jpg"
                        />

                        <ShowDetails
                            status="ONGOING"
                            name="NearVibe"
                            description="A platform to share, react & discover how poeple are feeling in your area."
                            image="https://www.setaswall.com/wp-content/uploads/2018/04/Amoled-Phone-Wallpaper-013-1080x2340.jpg"
                        />
                    </div>
                </div>

                <div className="show__right">
                    <div className="show__rightContent">
                        <ShowDetails
                            status="ONGOING"
                            name="VitalMinds"
                            description="Personal mental health assistant"
                            image="https://www.setaswall.com/wp-content/uploads/2018/04/Amoled-Phone-Wallpaper-013-1080x2340.jpg"
                        />

                        <ShowDetails
                            name="EnermanApp"
                            description="Solar panel information dashboard"
                            image="https://www.setaswall.com/wp-content/uploads/2018/04/Amoled-Phone-Wallpaper-013-1080x2340.jpg"
                        />

                        <ShowDetails
                            name="TakeYourTrip"
                            description="A travel booking app"
                            image="https://www.setaswall.com/wp-content/uploads/2018/04/Amoled-Phone-Wallpaper-013-1080x2340.jpg"
                        />
                    </div>

                    <div className="show__rightBlocks">
                        <div className="show__rightBlocksTop" />
                        <div className="show__rightBlocksMiddle" />
                        <div className="show__rightBlocksBottom" />
                        <div className="show__rightBlocksBottom" />
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Show
