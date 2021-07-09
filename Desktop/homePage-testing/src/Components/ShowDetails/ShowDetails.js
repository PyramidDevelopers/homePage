import './ShowDetails.css'

const ShowDetails = ({ status, name, description, image }) => {
    return (
        <div className="showDetails">
            <div className="showDetails__image">
                <img src={image} alt="" />
            </div>

            <div className="showDetails__text">
                <h4 className={status ? 'showDetails__textStatus' : ''}>
                    {status}
                </h4>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ShowDetails
