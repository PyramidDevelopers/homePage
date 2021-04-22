import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <button className="footer__leftButton">
          <p>CLICK ME &gt;</p>
        </button>

        <div className="footer__leftContent">
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
        </div>
      </div>

      <div className="footer__middle">
        <h1>USEFUL LINKS</h1>
        <p>
          Who are we? <br />
          What do we do? <br />
          Show me what you got <br />
          Why choose us <br />
          Our Team <br />
          Reach Us <br />
          Looking to work? <br />
        </p>
      </div>

      <div className="footer__right">
        <h1>STAY CONNECTED</h1>
        <p>
          Address: No.1, Vibha, Bhadrappa Layout <br />
          Nagashettihalli, Bangalore - 560094 <br />
          Phone: 9845309776 <br />
          Email: developpyramid@gmail.com
        </p>

        <div className="footer__rightIcons">
          <LinkedInIcon />
          <InstagramIcon />
          <FacebookIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
