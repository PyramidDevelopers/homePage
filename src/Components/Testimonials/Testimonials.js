import React, { useEffect } from 'react'
import Glide from '@glidejs/glide'
import '@glidejs/glide/src/assets/sass/glide.core.scss'
import './Testimonials.css'

const Testimonials = () => {
    useEffect(() => {
        new Glide('.glide', {
            peek: 300,
            breakpoints: {
                2000: { peek: 250 },
                1899: { peek: 225 },
                1850: { peek: { before: 75, after: 60 } },
                1500:{peek:140},
                1800: {
                    peek: { before: 40, after: 60 },
                },
                1780: { peek: 90 },
                1750: { peek: { before: 55, after: 90 } },
                1720: { peek: 60 },
                1680: {
                    peek: { before: 35, after: 50 },
                },
                1650: { peek: { before: 50, after: 15 } },
                400: {
                    peek: { before: 20, after: 20 },
                },
                299: { peek: { before: -200, after: 10 } },
            },
        }).mount()
    })

    return (
        <div className="testimonials">
            <div className="glide">
                <div className="wrapper">
                    <h1>TESTIMONIALS</h1>
                    <div className="testimonials-buttons">
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
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides testimonials-wrapper">
                        <div className="testimonials-text">
                            <div className="glide__slide description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum
                                </p>
                            </div>
                            <div className="client">Client Name</div>
                            <div className="company">Company Name</div>
                        </div>

                        <div className="testimonials-text">
                            <div className="glide__slide description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum
                                </p>
                            </div>
                            <div className="client">Client Name</div>
                            <div className="company">Company Name</div>
                        </div>

                        <div className="testimonials-text">
                            <div className="glide__slide description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum
                                </p>
                            </div>
                            <div className="client">Client Name</div>
                            <div className="company">Company Name</div>
                        </div>

                        <div className="testimonials-text">
                            <div className="glide__slide description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum
                                </p>
                            </div>
                            <div className="client">Client Name</div>
                            <div className="company">Company Name</div>
                        </div>

                        <div className="testimonials-text">
                            <div className="glide__slide description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum
                                </p>
                            </div>
                            <div className="client">Client Name</div>
                            <div className="company">Company Name</div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Testimonials
