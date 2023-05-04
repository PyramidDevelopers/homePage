import React from "react";
import nutrifamily from "../../assets/nutri-family.png";
import nearvibe from "../../assets/near-vibe.png";
import vitalminds from "../../assets/vital-minds.png";
import enermanapp from "../../assets/enerman-app.png";
import takeyourtrip from "../../assets/take-your-trip.png";
import trash2cash1 from '../../assets/trash2cash1.png'
import khushi from '../../assets/khushi.png'
import poolpay from '../../assets/poolpay/2.svg'
import campx from '../../assets/campx/1.svg'
import altfit from '../../assets/altfit/1.svg'
import Slider from '../Slider/Slider'

const ShowBrief = ({ onOpen }) => {
    const images = [nearvibe, vitalminds, trash2cash1, enermanapp, takeyourtrip, khushi, poolpay, campx, altfit];
    const config = {
        // peek: {
        //     before:0,
        //     after:30
        // },
        rewind: false,
        perView: 3,
        breakpoints: {
            300: {
                perView: 2
            }
        }
    };

    return (
        <Slider isTestimonial={false} showImages={images} showConfig={config} onOpen={onOpen}/>
    );
};

export default ShowBrief;