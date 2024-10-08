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
import campx1 from '../../../assets/campx/1.svg'
import campx2 from '../../../assets/campx/2.svg'
import campx3 from '../../../assets/campx/3.svg'
import campx4 from '../../../assets/campx/4.svg'
import campx5 from '../../../assets/campx/5.svg'
import poolpay1 from '../../../assets/poolpay/1.svg'
import poolpay2 from '../../../assets/poolpay/2.svg'
import poolpay3 from '../../../assets/poolpay/3.svg'
import poolpay4 from '../../../assets/poolpay/4.svg'
import poolpay5 from '../../../assets/poolpay/5.svg'
import altfit1 from '../../../assets/altfit/1.svg'
import altfit2 from '../../../assets/altfit/2.svg'
import altfit3 from '../../../assets/altfit/3.svg'
import altfit4 from '../../../assets/altfit/4.svg'
import altfit5 from '../../../assets/altfit/5.svg'
import copper1 from '../../../assets/copper/1.jpg'
import copper2 from '../../../assets/copper/2.png'
import copper3 from '../../../assets/copper/3.png'
import copper4 from '../../../assets/copper/4.jpg'
import copper5 from '../../../assets/copper/5.png'
import copper6 from '../../../assets/copper/6.png'
import sportifan1 from '../../../assets/sportifan/1.jpg'
import sportifan2 from '../../../assets/sportifan/2.jpg'
import sportifan3 from '../../../assets/sportifan/3.jpg'
import sportifan4 from '../../../assets/sportifan/4.jpg'
import sportifan5 from '../../../assets/sportifan/5.jpg'
import sportifan6 from '../../../assets/sportifan/6.jpg'
import sportifan7 from '../../../assets/sportifan/7.jpg'
import sportifan8 from '../../../assets/sportifan/8.jpg'
import sportifan9 from '../../../assets/sportifan/9.jpg'
import snacc0 from '../../../assets/snacc/0.png'
import snacc00 from '../../../assets/snacc/00.png'
import snacc000 from '../../../assets/snacc/000.png'
import snacc1 from '../../../assets/snacc/1.png'
import snacc2 from '../../../assets/snacc/2.png'
import snacc3 from '../../../assets/snacc/3.png'
import snacc4 from '../../../assets/snacc/4.png'


function ShowDetailsPopUp({ index, onClose }) {
    const [demoIndex, setDemoIndex] = useState(0)
    const imgRef = useRef(null)

    function handleIndexClick(e) {
        const value = e.target.innerText
        setDemoIndex(value - 1)
        // imgRef.current.style.animation = 'imageAnimation'
        imgRef.current.classList.add('animate')
    }

    // Use index from Details.js to order the list correctly
    const images = [
        [nearvibe1, nearvibe2, nearvibe3, nearvibe4, nearvibe5],
        [vitalMinds, vitalminds1, vitalminds2, vitalminds3, vitalminds4],
        [trash2cash1, trash2cash2, trash2cash3, trash2cash4, trash2cash5],
        [enermanApp, enerman1, enerman2, enerman3],
        [takeYourTrip, takeyourtrip1, takeyourtrip2],
        [khushi1, khushi2, khushi3, khushi4, khushi5],
        [poolpay1, poolpay2, poolpay3, poolpay4, poolpay5],
        [campx1, campx2, campx3, campx4, campx5],
        [altfit1, altfit2, altfit3, altfit4, altfit5],
        [copper1, copper2, copper3, copper4, copper5, copper6],
        [], //AthenaGen AI
        [], //Anemix
        [snacc0, snacc00, snacc000, snacc1, snacc4, snacc2, snacc3, ], //Snacc
        [sportifan1, sportifan2, sportifan3, sportifan4, sportifan5, sportifan6, sportifan7, sportifan8, sportifan9],
        [], //LexPal
    ]

    return (
        <div className="showdetails" id="showdetails" name="showdetails">
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
