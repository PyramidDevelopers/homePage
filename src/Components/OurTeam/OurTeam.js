import React from 'react'
import './OurTeam.css'
import dhruv from '../../assets/dhruv-shetty.png'
// import adithya from '../../assets/adithya-aravind.png';
// import pratheek from '../../assets/pratheek-sb.png';
import ayush from '../../assets/ayush-kiran.png'
import ankit from '../../assets/ankit-mallya.png'
// import rishi from '../../assets/rishi-pachipulusu.png';
import samarth from '../../assets/samarth-kashyap.png'
import Member from '../Member/Member'

const OurTeam = () => {
    return (
        <div className="ourTeam" id="ourTeam">
            <div className="ourTeam__top">
                <div className="title">
                    <p>OUR TEAM</p>
                </div>
            </div>
            <div className="ourTeam__bottom">
                <div className="bottom__upper">
                    <div className="col1">
                        <div className="darkRectangle"></div>
                        <div className="greyRectangle"></div>
                    </div>
                    <div className="col2">
                        <div className="greyLongRectangle"></div>
                    </div>
                    <div className="col3">
                        <Member
                            image={dhruv}
                            name="Dhruv Shetty"
                            role="Business Analyst & Core Developer"
                        />
                        <Member
                            image={samarth}
                            name="Samarth Kashyap"
                            role="Business & Strategy"
                        />
                        <Member
                            image={ayush}
                            name="Ayush Kiran"
                            role="Lead Designer"
                        />
                        <Member
                            image={ankit}
                            name="Ankit Mallya"
                            role="Legal"
                        />
                        {/* <Member image={adithya} name="Adithya Aravind" role="Core Developer"/>
                       <Member image={pratheek} name="Pratheek SB" role="Core Developer"/> */}
                    </div>
                    <div className="col4">
                        {/* <div className="greyRectangle no-border curve-rectangle-left"></div>
                        <div className="greyRectangle no-border"></div> */}
                        <div className="greyFatRectangle"></div>
                    </div>
                </div>
                {/* <div className="bottom__lower">
                    <div className="push">
                        <div className="darkRectangle"></div>
                    </div>
                    <div className="col1">
                        <div className="greyRectangle"></div>
                    </div>
                    <div className="col2">
                        <div className="greyLongRectangle"></div>
                    </div>
                    <div className="col3">
                        <Member image={ankit} name="Ankit Mallya" role="Legal"/>
                       <Member image={rishi} name="Rishi Pachipulusu" role="Social Media & Marketing"/>
                       <Member image={samarth} name="Samarth Kashyap" role="Business & Strategy"/>
                    </div>
                    <div className="col4">
                        <div className="greyRectangle"></div>
                        <div className="greyRectangle"></div>
                    </div>
                    <div className="col5">
                        <div className="greyRectangle no-border curve-rectangle-left"></div>
                        <div className="greyRectangle no-border curve-rectangle-right"></div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default OurTeam
