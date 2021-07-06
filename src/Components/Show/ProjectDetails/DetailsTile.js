import React, { useEffect } from 'react'
import { DetailedInformation } from '../Details'
import CloseIcon from '@material-ui/icons/Close'
import './DetailsTile.css'
import "../Show.css"
import $ from 'jquery'
window.jquery = window.$ = $

function DetailsTile({ index, onClose }) {
    
useEffect(() => {
    if ($) {
        $('.color-rect-close-icon').on('click', function(){
            $('.col').removeClass('selected');
            $(this).removeClass('selected');
        }); 
    }
    }, [$])

    return (
        <div className="project-details-container">
            <div className="project-details-header">
                <div className="details-tile-title">
                    {DetailedInformation[index].title}
                </div>
                <button className="color-rect-close-icon" onClick={onClose}>
                    <CloseIcon />
                </button>
            </div>
            <div className="status-and-client-section">
                <div className="status-section">
                    <div className="color-rect-status-client">STATUS</div>
                    <div className="status-client-text">
                        {DetailedInformation[index].status}
                    </div>
                </div>
                <div className="client-section">
                    <div className="color-rect-status-client">CLIENT</div>
                    <div className="status-client-text">
                        {DetailedInformation[index].client}
                    </div>
                </div>
            </div>
            <div className="info-scope-links-section">
                <div className="color-rect-for-label">INFO</div>
                <div className="details-text-container">
                    <p>{DetailedInformation[index].info}</p>
                </div>
            </div>
            <div className="info-scope-links-section">
                <div className="color-rect-for-label">SCOPE</div>
                <div className="details-text-container">
                    <p>{DetailedInformation[index].scope}</p>
                </div>
            </div>
            <div className="info-scope-links-section">
                <div className="color-rect-for-label">LINKS</div>
                <div className="details-text-container">
                    {DetailedInformation[index].linksTrue &&
                        DetailedInformation[index].links.map((link, index) => (
                            <div key={index}>
                                {!link.inProgress && (
                                    <>
                                        <a href={link.link} target="_blank">
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
            </div>
        </div>
    )
}

export default DetailsTile
