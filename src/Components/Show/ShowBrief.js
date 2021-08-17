import React from "react";
import nutrifamily from "../../assets/nutri-family.png";
import nearvibe from "../../assets/near-vibe.png";
import vitalminds from "../../assets/vital-minds.png";
import enermanapp from "../../assets/enerman-app.png";
import takeyourtrip from "../../assets/take-your-trip.png";
import trash2cash1 from '../../assets/trash2cash1.png'
import khushi from '../../assets/khushi.png'
import Slider from '../Slider/Slider'

const ShowBrief = ({ onOpen }) => {
    const images = [nearvibe, vitalminds, trash2cash1, enermanapp, takeyourtrip, khushi];
    const config = {
        // peek: {
        //     before:0,
        //     after:30
        // },
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