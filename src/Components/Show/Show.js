import React,{useEffect} from 'react'
import './Show.css'
import nutrifamily from '../../assets/nutri-family.png'
import nearvibe from '../../assets/near-vibe.png'
import vitalminds from '../../assets/vital-minds.png'
import enermanapp from '../../assets/enerman-app.png'
import takeyourtrip from '../../assets/take-your-trip.png'
import GridList from '@material-ui/core/GridList'
import $ from 'jquery'
window.jquery = window.$ = $

const Show = () => {
  useEffect(() => {
    if($){
      $('#left-button').click(function(event) {
        event.preventDefault();
        $('.grid-list').animate({
          scrollLeft: "+=400"
        }, 1000);

     });
  
       $('#right-button').click(function(event) {
         event.preventDefault();
        $('.grid-list').animate({
          scrollLeft: "-=400"
        }, 1000);
     });
     }
   },[$])

    return (
        <div className="showcase">
            <div className="showcase-title">
                <div className="title-text">
                    <h1>SHOW ME WHAT YOU GOT</h1>
                </div>
                <div className="buttons">
                    <div className="title-text1" id="right-button">
                        <button>&lt;</button>
                    </div>
                    <div className="title-text2" id="left-button">
                        <button>&gt;</button>
                    </div>
                </div>
            </div>
            <GridList className="grid-list">
                <div className="main">
                    <div className="tile">
                        <div className="col">
                            <div className="col-text">
                                <div className="content">
                                    <p>ONGOING</p>
                                </div>
                                <h4>Nutri.family</h4>
                                <h5>
                                    An innovative health-tech platform <br />
                                    where families get healthier, together!
                                </h5>
                            </div>

                            <div className="col-image">
                                <img src={nutrifamily} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="col-text">
                                <div className="content">
                                    <p>ONGOING</p>
                                </div>
                                <h4>NearVibe</h4>
                                <h5>
                                    A platform to share, react & discover <br />
                                    how people are feeling in your area
                                </h5>
                            </div>
                            <div className="col-image">
                                <img src={nearvibe} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="col-text">
                                <div className="content">
                                    <p>ONGOING</p>
                                </div>
                                <h4>VitalMinds</h4>
                                <h5>
                                    Personal mental health <br />
                                    assistant
                                </h5>
                            </div>
                            <div className="col-image">
                                <img src={vitalminds} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="col-text">
                                <h4>Enerman App</h4>
                                <h5>
                                    Solar Panel information
                                    <br />
                                    dashboard
                                </h5>
                            </div>
                            <div className="col-image">
                                <img src={enermanapp} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="col-text">
                                <h4>TakeYourTrip</h4>
                                <h5>A travel booking app</h5>
                            </div>
                            <div className="col-image">
                                <img src={takeyourtrip} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </GridList>
        </div>
    )
}

export default Show
