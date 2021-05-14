import React from 'react'
import './InfoBlock.css'

const InfoBlock = ({ title, p1, p2 }) => {
    return (
        <div className="infoblock">
            <div className="text flex flex-row">
                <div className="title flex flex-row md:flex-col">
                    <div className="flex items-center">
                        <div className="title__text mr-6">
                            <p>{title}</p>
                        </div>

                        <div className="title__qmark">
                            <p>?</p>
                        </div>
                    </div>

                    <div>
                        <div className="para1">
                            <p>{p1}</p>
                        </div>

                        <div className="para2">
                            <p>{p2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoBlock
