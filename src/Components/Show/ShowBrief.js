import React, { useEffect } from "react";
import "./Show.css";
import { BreifInformations } from "./Details";
import nutrifamily from "../../assets/nutri-family.png";
import nearvibe from "../../assets/near-vibe.png";
import vitalminds from "../../assets/vital-minds.png";
import enermanapp from "../../assets/enerman-app.png";
import takeyourtrip from "../../assets/take-your-trip.png";
import GridList from '@material-ui/core/GridList';
import $ from 'jquery'
window.jquery = window.$ = $

const ShowBrief = ({onOpen}) => {
  useEffect(() => {
    if ($) {
        $('#left-button').click(function (event) {
            event.preventDefault()
            $('.grid-list').animate(
                {
                    scrollLeft: '+=400',
                },
                1000
            )
        })

        $('#right-button').click(function (event) {
            event.preventDefault()
            $('.grid-list').animate(
                {
                    scrollLeft: '-=400',
                },
                1000
            )
        })

        const slider = document.querySelector('.grid-list');
        let isDown = false;
        let startX;
        let scrollLeft;
        
        slider.addEventListener('mousedown', (e) => {
          isDown = true;
          slider.classList.add('active');
          startX = e.pageX - slider.offsetLeft;
          scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
          isDown = false;
          slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
          isDown = false;
          slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
          if(!isDown) return;
          e.preventDefault();
          const x = e.pageX - slider.offsetLeft;
          const walk = (x - startX) * 1; //scroll-fast
          slider.scrollLeft = scrollLeft - walk;
          console.log(walk);
        });
    }
  }, [$])

  const images = [nutrifamily, nearvibe, vitalminds, enermanapp, takeyourtrip];

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