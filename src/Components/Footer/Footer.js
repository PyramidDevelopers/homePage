import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./Footer.css";

const Footer = () => {
	var colors = ['#ffca60','#FF60BB','#DBFF60','#FF6085','#60FFBA','#B460FF','#60EFFF','#FF7660'];
    var counter = 0;

    const onClick = (e) =>{
        e.preventDefault();
        document.documentElement.style.setProperty('--general-color', colors[counter]);
        counter = (counter+1)%8;
    }
	return (
		<div className="footer">
			<div className="leftButton">
			<button onClick={onClick}className="leftButton__clickMe">
				<p>CLICK ME&gt;</p>
			</button>
			</div>
		<div className="footer__left">
			{/* <div className="footer__leftContent"> */}
			<h1>ABOUT US</h1>
			<p>
				Pyramid Developers are a student <br />
				based community of problem <br />
				solvers, specializing in providing <br />
				end-to-end solutions. Our <br />
				team can help you fulfill your <br />
				digital requirements such as <br />
				Android and iOS applications and <br />
				websites.
			</p>
			{/* </div> */}
		</div>

		<div className="footer__middle">
			<h1>USEFUL LINKS</h1>
			<p>Who are we?</p>
			<p>What do we do?</p>
			<p>Show me what you got</p>
			<p>Why choose us</p>
			<p>Our Team</p>
			<p>Reach Us</p>
			<p>Looking to work?</p>
		</div>

		<div className="footer__right">
			<h1>STAY CONNECTED</h1>
			<p>
				Address: No.1, Vibha, Bhadrappa Layout <br />
				&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Nagashettihalli, Bangalore - 560094 <br />
			</p>
			<p>
				Phone: 9845309776 <br />
				Email: developpyramid@gmail.com
			</p>

			<div className="footer__rightIcons">
				<LinkedInIcon style={{fontSize:60}}/>
				<InstagramIcon style={{fontSize:60}}/>
				<FacebookIcon style={{fontSize:60}}/>
			</div>
		</div>
		</div>
	);
};

export default Footer;
