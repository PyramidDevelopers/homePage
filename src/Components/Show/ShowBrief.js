import React from "react";
import "./Show.css";
import { BreifInformations } from "./Details";
import nutrifamily from "../../assets/nutri-family.png";
import nearvibe from "../../assets/near-vibe.png";
import vitalminds from "../../assets/vital-minds.png";
import enermanapp from "../../assets/enerman-app.png";
import takeyourtrip from "../../assets/take-your-trip.png";
import GridList from '@material-ui/core/GridList';

const ShowBrief = ({onOpen}) => {

  const images = [nutrifamily, nearvibe, vitalminds, enermanapp, takeyourtrip];

  return (
    <div className="showcase">
      <div className="showcase-title">
        <div className="title-text">
          <h1>SHOW ME WHAT YOU GOT</h1>
        </div>
      </div>
      <GridList>
        <div className="main">
          <div className="tile">
            {BreifInformations.map(information => (
              <div className="col"  onClick = {e => onOpen(information.key)} key={information.key}>
                <div className="col-text">
                  {information.ongoing && <div className="content">
                    <p>ONGOING</p>
                  </div>
                  }
                  <h4>{information.title}</h4>
                  <h5>{information.text}</h5>
                </div>
                <div className="col-image">
                  <img src={images[information.key]} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </GridList>
    </div>
    
  );
};

export default ShowBrief;
