import React from 'react'
import './OurTeam.css'
import dhruv from '../../assets/dhruv-shetty.png'
import ankit from '../../assets/ankit-mallya.png'
import ayush from '../../assets/ayush-kiran-new.png'
import samarth from '../../assets/samarth-kashyap.png'
import pratheek from '../../assets/pratheek-sb.png';
import stuti from '../../assets/stuti-mohanty.png';
import srujit from '../../assets/srujit-naina.png';
import ritesh from '../../assets/ritesh-sapata.png';
// import ayush from '../../assets/ayush-kiran.png'
// import adithya from '../../assets/adithya-aravind.png';
// import rishi from '../../assets/rishi-pachipulusu.png';
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
                <div className="bottom__col1">
                    <div className="darkRectangle"></div>
                    <div className="greyRectangle"></div>
                    <div className="greyRectangle"></div>
                    <div className="darkRectangle"></div>
                </div>
                <div className="bottom__col2">
                    <div className="greyLongRectangle"></div>
                    <div className="darkRectangle"></div>
                    <div className="greyRectangle"></div>
                </div>
                <div className="bottom__col3">
                    <div className="col3__upper">
                        <Member
                            image={dhruv}
                            name="Dhruv Shetty"
                            role="Business Analyst & Core Developer"
                        />
                        <Member
                            image={ankit}
                            name="Ankit Mallya"
                            role="Legal"
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
                    </div>
                    <div className="col3__lower">
                        <Member
                            image={pratheek}
                            name="Pratheek SB"
                            role="Core Developer"
                        />
                        <Member
                            image={stuti}
                            name="Stuti Mohanty"
                            role="Lead App Developer"
                        />
                        <Member
                            image={srujit}
                            name="Srujit Naina"
                            role="Lead App Developer"
                        />
                        <Member
                            image={ritesh}
                            name="Ritesh Sapata"
                            role="Lead Web Developer"
                        />
                    </div>
                </div>
                <div className="bottom__col4">
                    <div className="greyFatRectangle"></div>
                    <div className="darkRectangle"></div>
                    <div className="greyRectangle"></div>
                    <div className="greyFatRectangle"></div>
                </div>
                {/* <div className="col3">
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
                    </div>*/}
            </div>
        </div>
    )
}

export default OurTeam
