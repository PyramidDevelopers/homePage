import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import './Footer.css'

const Footer = () => {
    var colors = [
        '#FF60BB',
        '#DBFF60',
        '#FF6085',
        '#60FFBA',
        '#B460FF',
        '#60EFFF',
        '#FF7660',
        '#ffca60',
    ]
    var counter = 0

    const onClick = (e) => {
        e.preventDefault()
        document.documentElement.style.setProperty(
            '--general-color',
            colors[counter]
        )
        counter = (counter + 1) % 8
    }
    return (
        <div className="footer sm:flex flex-col md:grid md:grid-cols-3 5xl:flex 5xl:flex-row flex-wrap 5xl:space-x-20 justify-center">
            <div className="footer__left flex flex-col sm:flex-col sm:align-center md:flex md:flex-row">
                <div className="leftButton">
                    <button onClick={onClick} className="leftButton__clickMe">
                        <p>CLICK ME&gt;</p>
                    </button>
                </div>

                <div className="footer__leftContent">
                    <h1 className="text-4xl lg:text-5xl 2xl:text-5xl min-w-full text-center mb-4">
                        ABOUT US
                    </h1>
                    <p className="text-xl lg:text-2xl 2xl:text-3xl">
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

            <div className="footer__middle">
                <h1 className="text-4xl lg:text-5xl 2xl:text-5xl min-w-full text-center mb-4">
                    USEFUL LINKS
                </h1>
                <div className="footer__middleContent text-center flex flex-col items-center">
                    <p className="text-xl lg:text-2xl 2xl:text-3xl mb-4 ">
                        Who are we?
                    </p>
                    <p className="text-xl lg:text-2xl 2xl:text-3xl mb-4 ">
                        What do we do?
                    </p>
                    <p className="text-xl lg:text-2xl 2xl:text-3xl mb-4 ">
                        Show me what you got
                    </p>
                    <p className="text-xl lg:text-2xl 2xl:text-3xl mb-4 ">
                        Why choose us
                    </p>
                    <p className="text-xl lg:text-2xl 2xl:text-3xl mb-4 ">
                        Our Team
                    </p>
                    <p className="text-xl lg:text-2xl 2xl:text-3xl mb-4 ">
                        Reach Us
                    </p>
                    <p className="text-xl lg:text-2xl 2xl:text-3xl mb-4 ">
                        Looking to work?
                    </p>
                </div>
            </div>

            <div className="footer__right flex flex-col items-center">
                <h1 className="text-4xl lg:text-5xl 2xl:text-5xl min-w-full text-center mb-4">
                    STAY CONNECTED
                </h1>
                <p className="text-xl lg:text-2xl 2xl:text-3xl">
                    Address: No.1, Vibha, Bhadrappa Layout <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Nagashettihalli,
                    Bangalore - 560094 <br />
                </p>
                <p className="text-xl lg:text-2xl 2xl:text-3xl">
                    Phone: 9845309776 <br />
                    Email: developpyramid@gmail.com
                </p>

                <div className="flex text-center">
                    <LinkedInIcon style={{ fontSize: 60 }} />
                    <InstagramIcon style={{ fontSize: 60 }} />
                    <FacebookIcon style={{ fontSize: 60 }} />
                </div>
            </div>
        </div>
    )
}

export default Footer
