import React from 'react'
import './Show.css'
import ShowDetails from '../ShowDetails/ShowDetails'

const Show = () => {
    return (
        <div className="show">
            <div className="show__header">
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
            </div>
        </div>
    )
}

export default Show
