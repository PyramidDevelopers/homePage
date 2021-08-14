import React, { useEffect } from 'react'
import '@glidejs/glide'
import { BreifInformations } from '../Show/Details'
import { Testimonials } from '../Testimonials/Details'
import '../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import '../Testimonials/Testimonials.css'
import '../Show/Show.css'
import Glide from '@glidejs/glide'

const Slider = ({
    isTestimonial,
    showImages,
    testimonialConfig,
    showConfig,
    onOpen,
}) => {
    useEffect(() => {
        if (isTestimonial) {
            new Glide('.testimonial__glide', testimonialConfig).mount()
        } else {
            new Glide('.show__glide', showConfig).mount()
        }
    })

    const showHeading = 'SHOW ME WHAT YOU GOT'
    const testimonialHeading = 'TESTIMONIALS'

    const showInfo = (images, onOpen) => {
        return BreifInformations.map((information) => (
            <li className="glide__slide">
                <div className="projects-slider-tile">
                    <div
                        className="col"
                        onClick={(e) => onOpen(information.key)}
                        key={information.key}
                    >
                        <div className="col-text">
                            {information.ongoing && (
                                <div className="content">
                                    <p>ONGOING</p>
                                </div>
                            )}
                            <h4>{information.title}</h4>
                            <h5>{information.text}</h5>
                        </div>
                        <div className="col-image">
                            <img src={images[information.key]} alt="" />
                        </div>
                    </div>
                </div>
            </li>
        ))
    }

    const testimonialInfo = () => {
        return Testimonials.map((testimonials) => (
            <div className="testimonials-text">
                <li className="glide__slide description">
                    <p>{testimonials.description}</p>
                </li>
                <div className="client">{testimonials.clientName}</div>
                <div className="company">{testimonials.companyName}</div>
            </div>
        ))
    }

    const showHeader = () => {
        return (
            <div className="showcase-title">
                <h1>{showHeading}</h1>
            </div>
        )
    }

    return (
        <div className={isTestimonial ? 'testimonials' : 'showcase'}>
            <div
                className={
                    isTestimonial
                        ? 'testimonial__glide glide'
                        : 'show__glide glide'
                }
            >
                <div className={isTestimonial ? 'wrapper' : 'showcase-header'}>
                    {isTestimonial ? (
                        <h1>{testimonialHeading}</h1>
                    ) : (
                        showHeader()
                    )}
                    <div
                        className={
                            isTestimonial ? 'testimonials-buttons' : 'buttons'
                        }
                    >
                        <div
                            className="glide__arrows left-button"
                            data-glide-el="controls"
                        >
                            <button
                                className="glide__arrow glide__arrow--left"
                                data-glide-dir="<"
                            >
                                &lt;
                            </button>
                        </div>
                        <div
                            className="glide__arrows right-button"
                            data-glide-el="controls"
                        >
                            <button
                                className="glide__arrow glide__arrow--right"
                                data-glide-dir=">"
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        isTestimonial
                            ? 'glide__track'
                            : 'glide__track showcase-slider'
                    }
                    data-glide-el="track"
                >
                    <ul
                        className={
                            isTestimonial
                                ? 'glide__slides testimonial_wrapper'
                                : 'glide__slides'
                        }
                    >
                        {isTestimonial
                            ? testimonialInfo()
                            : showInfo(showImages, onOpen)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Slider
