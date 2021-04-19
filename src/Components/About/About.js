import React from 'react';
import './About.css';
import UpperImage from '../../assets/DnD.png';
import LowerImage from '../../assets/Map.jpg';
import RightImage from '../../assets/Emergency.jpg';

const About = () => {
  return (
    <div className='about'>
      <div className='about__top'>
        <div className='greyRectangle'></div>
        <div className='greyRectangle'></div>
      </div>
      <div className='about__bottom'>
        <div className='about__left'>
          <div className='text'>
            <div className='whoAreWe'>
              <div className='whoAreWe__text'>
                <p>WHO ARE WE</p>
              </div>
              <div className='whoAreWe__qmark'>
                <p>?</p>
              </div>
            </div>
            <div className='para1'>
              <p>
                Simply put, college students looking to make it big.We develop
                apps, make website, design interfaces, create backend
                architecture and much more.
              </p>
            </div>
            <div className='para2'>
              <p>
                We may still be in college but we bring a vast skillset to the
                table.We have made comprehensive and quality digital products
                from numerous clients.
              </p>
            </div>
          </div>

          <div className='space'>
            <div className='greyRectangle'></div>
          </div>
        </div>

        <div className='about__right'>
          <div className='images__left'>
            <div className='images__innerLeft'>
              <div className='images__upper'>
                <img src={UpperImage} alt='' />
              </div>
              <div className='images__lower'>
                <img src={LowerImage} alt='' />
              </div>
            </div>
          </div>
          <div className='images__right'>
            <div className='socialMedia'>
              <div className='yellowRectangle'></div>
              <div className='yellowRectangle'></div>
              <div className='yellowRectangle'></div>
            </div>
            <div className='images__inner'>
              <div className='images__innerLeft'>
                <div className='images__innerInnerLeft'>
                  <img
                    className='images__innerInnerLeftInside'
                    src={RightImage}
                    alt=''
                  />
                </div>
                <div className='images__innerBox'>
                  <div className='greyLongRectangle'></div>
                </div>
              </div>
              <div className='images__innerRight'>
                <div className='greyRectangle'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
