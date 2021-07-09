import React, { useEffect } from 'react'
import './Testimonials.css'
import $ from 'jquery'
import GridList from '@material-ui/core/GridList'
window.jquery = window.$ = $

const Testimonials = () => {
    useEffect(() => {
        if ($) {
            $('#right__btn').click(function (event) {
                event.preventDefault()
                $('.grid-list1').animate(
                    {
                        scrollLeft: '+=645',
                    },
                    1000
                )
            })

            $('#left__btn').click(function (event) {
                event.preventDefault()
                $('.grid-list1').animate(
                    {
                        scrollLeft: '-=645',
                    },
                    1000
                )
            })
        }
        const slider = document.querySelector('.grid-list1')
        let isDown = false
        let startX
        let scrollLeft

        slider.addEventListener('mousedown', (e) => {
            isDown = true
            startX = e.pageX - slider.offsetLeft
            scrollLeft = slider.scrollLeft
        })
        slider.addEventListener('mouseleave', () => {
            isDown = false
        })
        slider.addEventListener('mouseup', () => {
            isDown = false
        })
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return
            e.preventDefault()
            const x = e.pageX - slider.offsetLeft
            const walk = (x - startX) * 3 //scroll-fast
            slider.scrollLeft = scrollLeft - walk
            console.log(walk)
        })
    })

    return (
        <div className="head">
            <div className="wrapper">
                <h1>TESTIMONIALS</h1>
                <div className="buttons1">
                    <div className="button1" id="left__btn">
                        <button>&lt;</button>
                    </div>
                    <div className="button1" id="right__btn">
                        <button>&gt;</button>
                    </div>
                </div>
            </div>
            <GridList className="grid-list1">
                <div className="testimonials">
                    <div className="col1">
                        <div className="testimonials-text">
                            <div className="description">
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
                            <h4 className="client">Client Name</h4>
                            <h4 className="company">Company Name</h4>
                        </div>
                    </div>

                    <div className="col1">
                        <div className="testimonials-text">
                            <div className="description">
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
                            <h4 className="client">CLIENT NAME</h4>
                            <h4 className="company">Company Name</h4>
                        </div>
                    </div>

                    <div className="col1">
                        <div className="testimonials-text">
                            <div className="description">
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
                            <h4 className="client">CLIENT NAME</h4>
                            <h4 className="company">Company Name</h4>
                        </div>
                    </div>

                </div>
            </GridList>
        </div>
    )
}
export default Testimonials
