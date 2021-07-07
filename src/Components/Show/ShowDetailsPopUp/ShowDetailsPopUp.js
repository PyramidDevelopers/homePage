import React, { useState } from 'react'
import './ShowDetailsPopUp.css'
import { DetailedInformation } from '../Details'
import DetailsTile from '../ProjectDetails/DetailsTile'
import enermanApp from '../../../assets/enerman-app.png'
import vitalMinds from '../../../assets/vital-minds.png'
import nearVibe from '../../../assets/near-vibe.png'
import nutriFamily from '../../../assets/nutri-family.png'
import takeYourTrip from '../../../assets/take-your-trip.png'

function ShowDetailsPopUp({ index, onClose }) {
    const [demoIndex, setDemoIndex] = useState(0)

    function handleIndexClick(e) {
        const value = e.target.innerText
        console.log(value - 1)
        setDemoIndex(value - 1)
    }

    const images = [
        [nearVibe, nutriFamily, vitalMinds, enermanApp, takeYourTrip],
        [vitalMinds, nutriFamily, nearVibe, enermanApp, takeYourTrip],
        [enermanApp, nutriFamily, nearVibe, vitalMinds, takeYourTrip],
        [takeYourTrip, nutriFamily, nearVibe, vitalMinds, enermanApp],
        [nutriFamily, nearVibe, vitalMinds, enermanApp, takeYourTrip],
    ]

    return (
        <div className="showdetails ">
            <div className="left">
                <div className="left__Image">
                    <img
                        src={images[index][demoIndex]}
                        alt={DetailedInformation[index].title}
                    />
                </div>
                <div className="left__Index">
                    {images.map((_work, workIdx) => {
                        console.log(workIdx)
                        let classes = 'inactive1'
                        if (demoIndex === workIdx) {
                            classes = 'active1'
                        }
                        return (
                            <button
                                onClick={handleIndexClick}
                                key={workIdx}
                                className={classes}
                            >
                                {workIdx + 1}
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className="right__Info">
                <DetailsTile index={index} onClose={onClose} />
            </div>
        </div>
    )
}

export default ShowDetailsPopUp
