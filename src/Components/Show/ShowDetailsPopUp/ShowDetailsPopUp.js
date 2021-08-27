import React, { useState, useRef } from 'react'
import './ShowDetailsPopUp.css'
import { DetailedInformation } from '../Details'
import DetailsTile from '../ProjectDetails/DetailsTile'
import enermanApp from '../../../assets/enerman-app.png'
import vitalMinds from '../../../assets/vital-minds.png'
import nearVibe from '../../../assets/near-vibe.png'
import nutriFamily from '../../../assets/nutri-family.png'
import takeYourTrip from '../../../assets/take-your-trip.png'
import nearvibe1 from  '../../../assets/nearvibe/1.png'
import nearvibe2 from  '../../../assets/nearvibe/2.png'
import nearvibe3 from  '../../../assets/nearvibe/3.png'
import nearvibe4 from  '../../../assets/nearvibe/4.png'
import nearvibe5 from  '../../../assets/nearvibe/5.png'
import nearvibe6 from  '../../../assets/nearvibe/6.png'
import nearvibe7 from  '../../../assets/nearvibe/7.png'
import vitalminds1 from '../../../assets/vitalminds/1.png'
import vitalminds2 from '../../../assets/vitalminds/2.png'
import vitalminds3 from '../../../assets/vitalminds/3.png'
import vitalminds4 from '../../../assets/vitalminds/4.png'
import vitalminds5 from '../../../assets/vitalminds/5.png'
import enerman1 from '../../../assets/enerman/1.png'
import enerman2 from '../../../assets/enerman/2.png'
import enerman3 from '../../../assets/enerman/3.png'
import takeyourtrip1 from '../../../assets/takeyourtrip/1.png'
import takeyourtrip2 from '../../../assets/takeyourtrip/2.png'
import trash2cash1 from '../../../assets/trashtocash/1.png'
import trash2cash2 from '../../../assets/trashtocash/2.png'
import trash2cash3 from '../../../assets/trashtocash/3.png'
import trash2cash4 from '../../../assets/trashtocash/4.png'
import trash2cash5 from '../../../assets/trashtocash/5.png'
import khushi1 from '../../../assets/Khushi/1.png'
import khushi2 from '../../../assets/Khushi/2.png'
import khushi3 from '../../../assets/Khushi/3.png'
import khushi4 from '../../../assets/Khushi/4.png'
import khushi5 from '../../../assets/Khushi/5.png'

function ShowDetailsPopUp({ index, onClose }) {
    const [demoIndex, setDemoIndex] = useState(0)
    const imgRef = useRef(null)

    function handleIndexClick(e) {
        const value = e.target.innerText
        setDemoIndex(value - 1)
        // imgRef.current.style.animation = 'imageAnimation'
        imgRef.current.classList.add('animate')
    }

    const images = [
        [nearvibe1, nearvibe2, nearvibe3, nearvibe4, nearvibe5],
        [vitalMinds, vitalminds1, vitalminds2, vitalminds3, vitalminds4],
        [trash2cash1, trash2cash2, trash2cash3, trash2cash4, trash2cash5],
        [enermanApp, enerman1, enerman2, enerman3],
        [takeYourTrip, takeyourtrip1, takeyourtrip2],
        [khushi1, khushi2, khushi3, khushi4, khushi5],
    ]
    // const images = [
    //     [nearvibe1, nearvibe2, nearvibe3, nearvibe4, nearvibe5, nearvibe6, nearvibe7],
    //     [vitalMinds, vitalminds1, vitalminds2, vitalminds3, vitalminds4, vitalminds5],
    //     [enermanApp, enerman1, enerman2, enerman3],
    //     [takeYourTrip, takeyourtrip1, takeyourtrip2],
    //     [trash2cash1, trash2cash2, trash2cash3, trash2cash4, trash2cash5],
    //     [khushi1, khushi2, khushi3, khushi4, khushi5],
    // ]

    return (
        <div className="showdetails">
            <div className="left">
                <div className="left__Image">
                    <img
                        ref={imgRef}
                        src={images[index][demoIndex]}
                        alt={DetailedInformation[index].title}
                    />
                </div>
                <div className="left__Index">
                    {images[index].map((_work, workIdx) => {
                        let classes = 'inactive1'
                        if (demoIndex === workIdx) {
                            classes = 'active1'
                        }
                        return (
                            <button
                                onClick={handleIndexClick}
                                key={workIdx}
                                className={classes}
                                id="btn"
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
