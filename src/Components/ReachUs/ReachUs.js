import React, { useState } from 'react'
import './ReachUs.css'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import axios from 'axios'

const ReachUs = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    // const [phone, setPhone] = useState('')
    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // const url = 'https://script.google.com/macros/s/AKfycbxyaXIvYz03A4uCTRpdbXpN5h49vmr6C-7OEHtRdg/exec'

        axios.get(
            `https://script.google.com/macros/s/AKfycbxyaXIvYz03A4uCTRpdbXpN5h49vmr6C-7OEHtRdg/exec?name=${name}&emailID=${email}&phoneNo=${phone}&query=${query}`
        )

        axios.post(
            'https://mkqzdpmnm4.execute-api.ap-south-1.amazonaws.com/default/sendEmailPyramidContactUs',
            {
                Name: name,
                EmailID: email,
                PhoneNumber: phone,
                Query: query,
            }
        )

        // fetch(url,{method:'POST', body:{new FormData(form)}})
        // console.log(name)
        // console.log(phone)
        // console.log(email)
        // console.log(query)

        setName('')
        setPhone('')
        setEmail('')
        setQuery('')
    }

    return (
        <div className="reachUs" id="reachUs">
            <div className="reachUs__top">
                <h1 className="reachUs__header" id="reach">
                    REACH US
                </h1>
            </div>

            <div className="reachUs__bottom">
                <div className="spacer mobile__hidden">
                    <div className="darkRectangle"></div>
                </div>
                <div className="reachUs__bottomLeft">
                    <div className="reachUs__bottomLeftTop">
                        <p>
                            Our eagerness to work with you will reflect in our
                            <br />
                            promptness when you contact us. Do not hesitate to
                            <br />
                            ask us anything :)
                        </p>
                        <div className="darkRectangle"></div>
                    </div>

                    <form className="reachUs__form" onSubmit={handleSubmit}>
                        <div className="reachUs__formLeft">
                            <div className="Input">
                                <p>Your Name</p>
                                <input
                                    required
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="Input">
                                <p>Your Email ID</p>
                                <input
                                    required
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="Input">
                                <p>Your Phone No</p>
                                <input
                                    required
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="Input Inputtextarea">
                                <p>Your Query</p>
                                <textarea
                                    className="textarea"
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="reachUs__formRight">
                            <div className="darkRectangle"></div>
                            <div className="greyRectangle" />
                            <div className="greyLongRectangle">
                                <button
                                    className="reachUs__formButton"
                                    type="submit"
                                >
                                    <KeyboardReturnIcon />
                                    <p className="size-down">SUBMIT</p>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="spacer mobile__hidden">
                    <div className="darkRectangle"></div>
                </div>

                <div className="reachUs__bottomRight">
                    <div className="bottomRight__upper">
                        <div className="left">
                            <a href="https://bit.ly/PyramidDevelopersRecruitment">
                                <p className="left__topP">
                                    Looking to work with us? &gt;&gt;&gt;
                                </p>
                            </a>

                            <p className="left__lowerP">
                                Join us to take part in exciting projects <br />
                                and gain experience along with the student{' '}
                                <br />
                                community, and unlock amazing new prospects.
                            </p>
                        </div>
                        <div className="right mobile__hidden">
                            <div className="greyRectangle"></div>
                        </div>
                    </div>
                    {/* <div className="space">
						<div className="greyRectangle"></div>
					</div> */}
                    <div className="bottomRight__lower">
                        <div className="contact">
                            <div className="contact__left greyRectangle">
                                <MailOutlineIcon />
                                <p>MAIL</p>
                            </div>
                            <a href="mailto:build@pyramiddeveloper.com">
                            <div className="contact__right">
                                <p>build@pyramiddeveloper.com</p>
                            </div>
                            </a>
                        </div>
                        <div className="contact">
                            <div className="contact__left greyRectangle">
                                <PhoneOutlinedIcon />
                                <p>PHONE</p>
                            </div>
                            <a href="tel:9567948158"></a>
                            <div className="contact__right">
                                <p>9567948158</p>
                            </div>
                        </div>
                        <div className="contact">
                            <div className="contact__left greyRectangle">
                                <WhatsAppIcon />
                                <p>WHATSAPP</p>
                            </div>
                            <a href="https://wa.me/+919845309776">
                            <div className="contact__right">
                                <p>9845309776</p>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="spacer mobile__hidden">
                    <div className="darkRectangle"></div>
                    <div className="greyRectangle"></div>
                </div>
            </div>
        </div>
    )
}

export default ReachUs
