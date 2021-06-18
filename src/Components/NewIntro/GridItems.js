import colors from './Colors'
import _ from 'lodash'
import Logo from './Logo'
import { Link } from 'react-scroll'

function GridItems(layout, color, count, changeLayout) {
    return _.map(layout, (item, i) => {
        if (colors[color].invisible.includes(item.i)) {
            return <div key={item.i} className="grid-item-invisible"></div>
        }
        if (colors[color].name.includes(item.i)) {
            return (
                <div key={item.i} className="grid-item-color">
                    <span>{colors[color].letters[item.i]}</span>
                </div>
            )
        }
        if (item.i === '31') {
            return (
                <div key="31" className="logo">
                    {/* <Logo color={count} /> */}
                    <Logo />
                </div>
            )
        }
        if (item.i === '39') {
            return (
                <div
                    key="39"
                    className="grid-item-color grid-item-clickme"
                    onClick={changeLayout}
                >
                    <span>CLICK ME&gt;</span>
                </div>
            )
        }
        if (item.i === '50') {
            return (
                <div key="50" className="intro__subtitle">
                    <span className="developers">developers</span>
                </div>
            )
        }
        if (item.i === '59') {
            return (
                <div key="59" className="intro__description">
                    <span>
                        a student community of
                        <br />
                        digital revolutionaries
                    </span>
                </div>
            )
        }
        if (item.i === '64') {
            return (
                <div key="64" className="link">
                    <Link
                        activeClass="active"
                        to="reachUs"
                        spy={true}
                        smooth={true}
                        offset={-160}
                        duration={1000}
                    >
                        <h3 className="giveUs">
                            GIVE US
                            <br /> A PROJECT
                            <br />
                            &gt;&gt;&gt;
                        </h3>
                    </Link>
                </div>
            )
        }
        if (item.i === '66') {
            return (
                <div key="66" className="link">
                    
                        <a href="https://bit.ly/PyramidDevelopersRecruitment" target="_blank">
                            <h3 className="join">
                                BECOME A<br /> PART OF US
                                <br />
                                &gt;&gt;&gt;
                            </h3>
                        </a>
                    
                </div>
            )
        }
        return <div key={item.i} className="grid-item"></div>
    })
}

export default GridItems
