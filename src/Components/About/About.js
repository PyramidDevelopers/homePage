import React from 'react';
import './About.css';
import UpperImage from '../../assets/who-upper.png';
import LowerImage from '../../assets/who-lower.png';
import RightImage from '../../assets/who-right.png';
import InfoBlock from '../InfoBlock/InfoBlock';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const About = () => {
  return (
    <div className='about'>
		<div className='about__top'>
			<div className='greyRectangle'></div>
			<div className='greyFatRectangle'></div>
		</div>
		<div className='about__bottom'>
			<div className='about__left'>
				<InfoBlock 
				title={"WHO ARE WE"} 
				p1={"Simply put, college students looking to make it big. We develop apps, make website, design interfaces, create backend architecture and much more."} 
				p2={"We may still be in college but we bring a vast skillset to the table.We have made comprehensive and quality digital products from numerous clients."}
				/>
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
						<div className='greyRectangle yellow'><LinkedInIcon style={{fontSize: 75}}/></div>
						<div className='greyRectangle yellow'><InstagramIcon style={{fontSize: 75}}/></div>
						<div className='greyRectangle yellow'><FacebookIcon style={{fontSize: 75}}/></div>
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
								<div className='greyFatRectangle'></div>
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
