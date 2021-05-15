// sm:flex flex-col md:grid md:grid-cols-3 5xl:flex 5xl:flex-row flex-wrap 5xl:space-x-20
import React, { useState } from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import { Link } from 'react-scroll'
import './Footer.css'
import { actionTypes } from '../../reducer'
import { useStateValue } from '../../StateProvider'
import peach from '../../assets/Group-3.svg'
import green from '../../assets/Group-4.svg'
import purple from '../../assets/Group-5.svg'
import cyan from '../../assets/Group-6.svg'
import orange from '../../assets/Group-7.svg'
import pink from '../../assets/Group-1.svg'
import light_green from '../../assets/Group-2.svg'
import yellow from '../../assets/Group-8.svg'

const Footer = () => {
    const [{ globalCount }, changeCount] = useStateValue()
    // const c = globalCount
    const [counter, setCounter] = useState(1)
    // var colors = [
    //     '#FF60BB',
    //     '#DBFF60',
    //     '#FF6085',
    //     '#60FFBA',
    //     '#B460FF',
    //     '#60EFFF',
    //     '#FF7660',
    //     '#ffca60',
    // ]

    const colors = [
        yellow,
        pink,
        light_green,
        peach,
        green,
        purple,
        cyan,
        orange,
    ]

    const THEME_COLOR = [
        '#ffca60',
        '#FF60BB',
        '#DBFF60',
        '#FF6085',
        '#60FFBA',
        '#B460FF',
        '#60EFFF',
        '#FF7660',
    ]
    // let counter = 0

    const onClick = (e) => {
        e.preventDefault()

        document.documentElement.style.setProperty(
            '--general-color',
            THEME_COLOR[counter]
        )
        // counter = (counter + 1) % 8
        setCounter((counter + 1) % 8)
        changeCount({
            type: actionTypes.CHANGE_COLOR,
            countValue: counter % 8,
        })

        console.log('Footer globalCount', globalCount)
    }

    return (
        <div className="footer space-x-20">
            <div className="footer__left lg:ml-[-80px]">
                <div className="leftButton ml-[20px]">
                    <button onClick={onClick} className="leftButton__clickMe">
                        <img src={colors[globalCount]} alt="" />
                        <p className="pl-1 pb-4">CLICK ME&gt;</p>
                    </button>
                </div>

                <div className="footer__left flex flex-col ml-[20px]">
                    <h1 className="text-4xl lg:text-5xl 2xl:text-5xl mb-4">
                        ABOUT US
                    </h1>

                    <p className="text-xl 2xl:text-2xl">
                        Pyramid Developers are a student <br />
                        based community of problem <br />
                        solvers, specializing in providing <br />
                        end-to-end solutions. Our <br />
                        team can help you fulfill your <br />
                        digital requirements such as <br />
                        Android and iOS applications and <br />
                        websites.
                    </p>
                </div>
            </div>

                <div className="footer__middle ml-6">
                    <h1 className="text-4xl lg:text-5xl 2xl:text-5xl mb-4 ml-4">
                        USEFUL LINKS
                    </h1>
                    <div className="footer__middleContent ml-4 text-left flex flex-col space-y-2">
                        <Link
                            to="about"
                            duration={1000}
                            smooth={true}
                            className="cursor-pointer"
                        >
                            <p className="text-2xl">Who are we?</p>
                        </Link>

                        <Link
                            to="what"
                            duration={1000}
                            smooth={true}
                            className="cursor-pointer"
                        >
                            <p className="text-2xl">What do we do?</p>
                        </Link>

                        <Link
                            to="show"
                            duration={1000}
                            smooth={true}
                            className="cursor-pointer"
                        >
                            <p className="text-2xl">Show me what you got</p>
                        </Link>

                        <Link
                            to="choose"
                            duration={1000}
                            smooth={true}
                            className="cursor-pointer"
                        >
                            <p className="text-2xl">Why choose us</p>
                        </Link>

                        <Link
                            to="ourTeam"
                            duration={1000}
                            smooth={true}
                            className="cursor-pointer"
                        >
                            <p className="text-2xl">Our Team</p>
                        </Link>

                        <Link
                            to="reachUs"
                            duration={1000}
                            smooth={true}
                            className="cursor-pointer"
                        >
                            <p className="text-2xl">Reach Us</p>
                        </Link>

                        <Link
                            to="reachUs"
                            duration={1000}
                            smooth={true}
                            className="cursor-pointer"
                        >
                            <p className="text-2xl">Looking to work?</p>
                        </Link>
                    </div>
                </div>

                <div className="footer__right flex flex-col">
                    <h1 className="text-4xl lg:text-5xl 2xl:text-5xl mb-4">
                        STAY CONNECTED
                    </h1>
                    <p className="text-2xl">
                        Address: No.1, Vibha, Bhadrappa Layout <br />
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Nagashettihalli,
                        Bangalore - 560094 <br />
                    </p>

                    <p className="text-2xl">
                        Phone: 9845309776 <br />
                        Email: developpyramid@gmail.com
                    </p>

                    <div className="flex text-center space-x-4 mt-4">
                        <a
                            href="https://www.linkedin.com/company/pyramid-developers/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedInIcon style={{ fontSize: 50 }} />
                        </a>
                        <a
                            href="http://www.instagram.com/pyramid_developers"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <InstagramIcon style={{ fontSize: 50 }} />
                        </a>
                        <a
                            href="https://www.facebook.com/PyramidDeveloper"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon style={{ fontSize: 50 }} />
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default Footer
