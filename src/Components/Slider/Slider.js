import React, { useEffect, useState, useRef } from 'react'
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

    const ref = useRef(); 
    const [y,sety]=useState(0)
    const [z,setz]=useState(0)
    const [ x, setx ] = useState(0)

    const styles = {
        transform: `translate3d(${x}px, ${y}px, ${ z }px)`,
    }

    const handleChange = () => {
        const matches = ref.current.style.transform.match(/[+-]?([0-9]*[.])?[0-9]+/g)
        // console.log(matches)
        setx(matches[1])
        sety(matches[2])
        setz(matches[3])
        // console.log(ref.current.style.transform)
        // console.log(ref.current.style.transition)
    }

    useEffect(() => {
        if (isTestimonial) {
            new Glide('.testimonial__glide', testimonialConfig).mount()
        } else {
            new Glide('.show__glide', showConfig).mount()
            ref.current.style.transform = `translate3d(${ x }px, ${ y }px, ${ z }px)`
            // ref.current.style.transition = `transform 800ms cubic-bezier(0.165, 0.84, 0.44, 1) 1s`
        }
    })

    const showHeading = 'SHOW ME WHAT YOU GOT'
    const testimonialHeading = 'TESTIMONIALS'

    const showInfo = (images, onOpen) => {
        return BreifInformations.map((information) => (
            <li className="glide__slide showcase_wrapper">
                <div className="projects-slider-tile">
                    <div
                        className="col"
                        onClick={(e) => { onOpen(information.key)}}
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
                <div className="testimonial__client">
                    <div className="client">{testimonials.clientName}</div>
                    <div className="company">{testimonials.companyName}</div>
                </div>
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
                                onClick={handleChange}
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
                                onClick={handleChange}
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
                                : 'glide__slides showcase_overall_wrapper'
                        }
                        ref={ref}
                        // style={{styles}}
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
