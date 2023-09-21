import React from 'react'
import './OurTeam.css'
import dhruv from '../../assets/dhruv-shetty2.png'
import ankit from '../../assets/ankit-mallya.png'
import ayush from '../../assets/ayush-kiran-new.png'
import samarth from '../../assets/samarth-kashyap.png'
import pratheek from '../../assets/pratheek-sb.png';
import mathangi from '../../assets/mathangi-krishnamurthy.png';
import nandish from '../../assets/nandish.png';
import anusheel from '../../assets/anusheel.png';
import akshay from '../../assets/akshay.png';
import adnan from '../../assets/adnan.png';
// import ayush from '../../assets/ayush-kiran.png'
// import adithya from '../../assets/adithya-aravind.png';
// import rishi from '../../assets/rishi-pachipulusu.png';
import Member from '../Member/Member'

const OurTeam = () => {
    return (
        <div className="ourTeam" id="ourTeam">
            <div className="ourTeam__top">
                <div className="ourTeam__mobileTopLeft web__hidden">
                    <div className="greyFatRectangle"></div>
                    <div className="darkRectangle"></div>
                    <div className="greyRectangle"></div>
                </div>
                <div className="title">
                    <div>
                        <p>OUR TEAM</p>
                    </div>
                </div>
                <div className="ourTeam__mobileTopRight web__hidden">
                    <div className="darkRectangle"></div>
                    <div className="greyRectangle"></div>
                    <div className="darkRectangle"></div>
                    <div className="greyRectangle"></div>
                </div>
            </div>
            <div className="ourTeam__bottom">
                <div className="bottom__col1 mobile__hidden">
                    <div className="darkRectangle"></div>
                    <div className="greyRectangle"></div>
                    <div className="greyRectangle"></div>
                    <div className="darkRectangle"></div>
                </div>
                <div className="bottom__col2 mobile__hidden">
                    <div className="greyLongRectangle"></div>
                    <div className="darkRectangle"></div>
                    <div className="greyRectangle"></div>
                </div>
                <div className="bottom__col3">
                    <div className="col3__upper">
                        <Member
                            image={dhruv}
                            name="Dhruv Shetty"
                            role="Founder & CEO"
                        />
                        <Member
                            image={ayush}
                            name="Ayush Kiran"
                            role="Lead Designer"
                        />
                        <Member
                            image={samarth}
                            name="Samarth Kashyap"
                            role="Business & Strategy"
                        />
                        <Member
                            image={ankit}
                            name="Ankit Mallya"
                            role="Legal"
                        />
                    </div>
                    <div className="col3__lower">
                        <Member
                            image={pratheek}
                            name="Pratheek SB"
                            role="Core Developer"
                        />
                        <Member
                            image={mathangi}
                            name="Mathangi K"
                            role="Operations Head"
                        />
                        <Member
                            image={nandish}
                            name="Nandish"
                            role="Senior Developer"
                        />
                        <Member
                            image={adnan}
                            name="Adnan"
                            role="Senior Developer"
                        />
                    </div>
                </div>
                <div className="bottom__col4 mobile__hidden">
                    <div className="greyFatRectangle"></div>
                    <div className="darkRectangle"></div>
                    <div className="greyRectangle"></div>
                    <div className="greyFatRectangle"></div>
                </div>
            </div>
            <div className="ourTeam__mobileBottom web__hidden">
                    <div className="darkRectangle"></div>
                    <div className="greyFatRectangle"></div>
                    <div className="darkRectangle"></div>
                    <div className="darkRectangle"></div>
                    <div className="greyRectangle"></div>
                    <div className="greyRectangle"></div>
                    <div className="greyFatRectangle"></div>
                    <div className="greyFatRectangle"></div>
                </div>
        </div>
    )
}

export default OurTeam
