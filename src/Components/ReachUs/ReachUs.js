import React, { useState } from 'react'
import './ReachUs.css'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined'

const ReachUs = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(query)
        setName('')
        setEmail('')
        setQuery('')
    }

    return (
        <div className="reachUs flex flex-col items-center" id="reachUs">
            <div className="reachUs__top">
                <h1
                    className="reachUs__header text-7xl w-screen text-center"
                    id="reach"
                >
                    REACH US
                </h1>
            </div>

            <div className="reachUs__bottom">
                <div className="spacer">
                    <div className="darkRectangle"></div>
                </div>
                <div className="reachUs__bottomLeft">
                    <div className="reachUs__bottomLeftTop">
                        <p>
                            Our eagerness to work with you will reflect in our{' '}
                            <br />
                            promptness when you contact us. Do not hesitate to{' '}
                            <br />
                            ask us anything :)
                        </p>
                        <div className="darkRectangle"></div>
                    </div>

                    <form className="reachUs__form">
                        <div className="reachUs__formLeft">
                            <div className="Input">
                                <p>Your Name</p>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="Input">
                                <p>Your Email ID</p>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="Input Inputtextarea">
                                <p>Your Query</p>
                                <textarea
                                    className="textarea"
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="reachUs__formRight">
                            <div className="greyRectangle" />
                            <div className="greyLongRectangle">
                                <button
                                    className="reachUs__formButton"
                                    type="submit"
                                    onClick={handleSubmit}
                                >
                                    <KeyboardReturnIcon
                                        style={{ fontSize: 60 }}
                                    />
                                    <p>SUBMIT</p>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="spacer">
                    <div className="darkRectangle"></div>
                </div>

                <div className="reachUs__bottomRight">
                    <div className="bottomRight__upper">
                        <div className="left">
                            <p className="left__topP">
                                Looking to work us? &gt;&gt;&gt;
                            </p>

                            <p className="left__lowerP">
                                Join us to take part in exciting projects <br />
                                and gain experience along with the student{' '}
                                <br />
                                community, and unlock amazing new prospects.
                            </p>
                        </div>
                        <div className="right">
                            <div className="greyRectangle"></div>
                        </div>
                    </div>
                    {/* <div className="space">
						<div className="greyRectangle"></div>
					</div> */}
                    <div className="bottomRight__lower">
                        <div className="contact">
                            <div className="contact__left greyRectangle">
                                <MailOutlineIcon style={{ fontSize: 60 }} />
                                <p>MAIL</p>
                            </div>
                            <div className="contact__right">
                                <p>developpyramid@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact">
                            <div className="contact__left greyRectangle">
                                <PhoneOutlinedIcon style={{ fontSize: 60 }} />
                                <p>PHONE</p>
                            </div>
                            <div className="contact__right">
                                <p>9845309776</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="spacer">
                    <div className="darkRectangle"></div>
                    <div className="greyRectangle"></div>
                </div>
            </div>
        </div>
    )
}

export default ReachUs
