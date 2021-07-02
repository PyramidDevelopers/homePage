import React from 'react'
import { DetailedInformation } from '../Show/Details'
import CloseIcon from '@material-ui/icons/Close';
import './DetailsTile.css'

function DetailsTile({ index, onClose }) {
    return (
        <div className="project-details-container">
            <div className="project-details-header">
                <div className="details-tile-title">{DetailedInformation[index].title}</div>
                <button className="color-rect-close-icon" onClick = {onClose}>
                    <CloseIcon className = "tile-close-icon"/>
                </button>
            </div>
            <div className="status-and-client-section">
                <div className="status-section">
                    <div className="color-rect-for-label">STATUS</div>
                    <div className="project-details-text">{DetailedInformation[index].status}</div>
                </div>
                <div className="client-section">
                    <div className="color-rect-for-label">CLIENT</div>
                    <div className="project-details-text">{DetailedInformation[index].client}</div>
                </div>
            </div>
            <div className="info-section">
                <div className="color-rect-for-label">INFO</div>
                <div className="project-details-text">{DetailedInformation[index].info}</div>
            </div>
            <div className="scope-section">
                <div className="color-rect-for-label">SCOPE</div>
                <div className="project-details-text">{DetailedInformation[index].scope}</div>
            </div>
            <div className="links-section">
                <div className="color-rect-for-label">LINKS</div>
                <div className="project-details-text">{DetailedInformation[index].links}</div>
            </div>
        </div>
    )
}

export default DetailsTile
