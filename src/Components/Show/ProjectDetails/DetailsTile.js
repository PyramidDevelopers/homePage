import React, { useEffect } from 'react'
import { DetailedInformation } from '../Details'
import './DetailsTile.css'
import '../Show.css'

function DetailsTile({ index, onClose }) {
    return (
        <div className="project-details-container">
            <div className="project-details-header">
                <div className="details-tile-title">
                    {DetailedInformation[index].title}
                </div>
                <button className="color-rect-close" onClick={onClose}>
                    <div className="close-tile">x</div>
                </button>
            </div>
            <div className="status-and-client-section">
                <div className="status-section">
                    <div className="color-rect-for-label">STATUS</div>
                    <div className="details-text">
                        {DetailedInformation[index].status}
                    </div>
                </div>
                <div className="client-section">
                    <div className="color-rect-for-label">CLIENT</div>
                    <div className="details-text">
                        {DetailedInformation[index].client}
                    </div>
                </div>
            </div>
            <div className="info-scope-links-section">
                <div className="color-rect-for-label">INFO</div>
                <div className="details-text">
                    {DetailedInformation[index].info}
                </div>
            </div>
            <div className="info-scope-links-section">
                <div className="color-rect-for-label">SCOPE</div>
                <div className="details-text">
                    {DetailedInformation[index].scope}
                </div>
            </div>
            { DetailedInformation[index].linksTrue &&
            <div className="info-scope-links-section">
                <div className="color-rect-for-label">LINKS</div>
                <div className="details-text">
                    {
                        DetailedInformation[index].links.map((link, index) => (
                            <div key={index}>
                                {!link.inProgress && (
                                    <>
                                        <a
                                            href={link.link}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {link.title}
                                        </a>
                                        <br />
                                    </>
                                )}
                                {link.inProgress && (
                                    <>
                                        {link.title}: In Progress
                                        <br />
                                    </>
                                )}
                            </div>
                        ))}
                    {!DetailedInformation[index].linksTrue && (
                        <>
                            {DetailedInformation[index].linkWriteUp}
                            <br />
                        </>
                    )}
                </div>
            </div>}
        </div>
    )
}

export default DetailsTile
