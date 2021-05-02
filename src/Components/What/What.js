import React from 'react'
import './What.css'
import UpperImage from '../../assets/what-upper.png'
import LowerImage from '../../assets/what-lower.png'
import LeftImage from '../../assets/what-left.png'
import InfoBlock from '../InfoBlock/InfoBlock'

const What = () => {
    return (
        <div className="what flex items-center justify-center">
            <div className="what__left">
                <div className="top">
                    <div className="top__left">
                        <div className="upper">
                            <div className="greyRectangle"></div>
                        </div>
                        <div className="lower">
                            <div className="lower__left">
                                <div className="row1">
                                    <div className="greyRectangle no-border"></div>
                                    <div className="greyRectangle no-border curve-rectangle-right"></div>
                                </div>
                                <div className="darkRectangle"></div>
                                <div className="greyRectangle"></div>
                            </div>
                            <div className="lower__right">
                                <img src={LeftImage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="top__right">
                        <div className="upper">
                            <div className="upper__left">
                                <img src={UpperImage} alt="" />
                            </div>
                            <div className="upper__right">
                                <div className="greyRectangle"></div>
                            </div>
                        </div>
                        <div className="lower">
                            <img src={LowerImage} alt="" />
                        </div>
                    </div>
                    <div className="space">
                        <div className="darkRectangle"></div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="greyFatRectangle"></div>
                </div>
            </div>

            <div className="what__rightContent">
                <div className="space">
                    <div className="darkRectangle"></div>
                </div>
                <div className="what__rightContentTop">
                    <InfoBlock
                        title={'WHAT DO WE DO'}
                        p1={
                            ' We make highly customised mobile applicatons which are very efficient and scalable at low cost.'
                        }
                        p2={
                            "We use Flutter for our front end which is the latest framework by Google and Firebase for our backend which is one of the world's leading Backend services used by companies like Alibaba, Accenture and Twitch."
                        }
                    />
                </div>
                <div className="what__rightContentBottom">
                    <div className="greyRectangle"></div>
                    <div className="greyRectangle"></div>
                </div>
            </div>
        </div>
    )
}

export default What

{
    /* <div className='what__leftContent'>
        <div className='what__left'>
          <div className='what__leftTop' />
          <div className='what__leftBottom' />
        </div>

        <div className='what__middle'>
          <div className='what__middleTop' />
          <div className='what__middleImage'>
            <img
              src='https://i.pinimg.com/236x/8c/b5/ee/8cb5ee0a8fc8dd21497f0c2d0ebe1238.jpg'
              alt=''
            />
          </div>
        </div>

        <div className='what__right'>
          <div className='what__rightTop'>
            <div className='what__rightTopImage'>
              <img
                src='https://i.pinimg.com/originals/08/9e/a4/089ea4676c8bd05f1a6cc435466e718f.jpg'
                alt=''
              />
            </div>
            <div className='what__rightTopRight' />
          </div>

          <div className='what__rightBottom'>
            <div className='what__rightBottomImage'>
              <img
                src='data:image/jpeg;base64,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'
                alt=''
              />
            </div>
            <div className='what__rightBottomRight' />
          </div>
        </div>
      </div> */
}
