import React, { useEffect } from "react";
import { BreifInformations } from "./Details";
import "./Show.css";
import nutrifamily from "../../assets/nutri-family.png";
import nearvibe from "../../assets/near-vibe.png";
import vitalminds from "../../assets/vital-minds.png";
import enermanapp from "../../assets/enerman-app.png";
import takeyourtrip from "../../assets/take-your-trip.png";
import Glide from '@glidejs/glide'
import "../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css";

const ShowBrief = ({ onOpen }) => {
    const images = [nearvibe, vitalminds, enermanapp, takeyourtrip, nutrifamily];
    const left = "<";
    const right = ">";
    const config = {
        perView: 3,
        // breakpoints: {
        //     1000: {
        //         perView: 2
        //     },
        //     300: {
        //         perView: 1
        //     }
        // }
    };
    useEffect(() => {
        new Glide('.glide', config).mount()
    })

    return (
        <div className="showcase">
            <div className="glide">
                <div className="showcase-header">
                    <div className="showcase-title">
                        <h1>SHOW ME WHAT YOU GOT</h1>
                    </div>
                    <div className="glide__arrows buttons" data-glide-el="controls">
                        <button className="glide__arrow glide__arrow--left navigation-arrows" data-glide-dir="<"><p className="arrow-icon">{left}</p></button>
                        <button className="glide__arrow glide__arrow--right navigation-arrows" data-glide-dir=">"><p className="arrow-icon">{right}</p></button>
                    </div>
                </div>
                <div className="glide__track showcase-slider" data-glide-el="track">
                    <ul className="glide__slides">
                        {BreifInformations.map(information => (
                            <li className="glide__slide">
                                <div className="projects-slider-tile">
                                    <div className="col" onClick={e => onOpen(information.key)} key={information.key}>
                                        <div className="col-text">
                                            {information.ongoing && <div className="content">
                                                <p>ONGOING</p>
                                            </div>
                                            }
                                            <h4>{information.title}</h4>
                                            <h5>{information.text}</h5>
                                        </div>
                                        <div className="col-image">
                                            <img src={images[information.key]} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ShowBrief;