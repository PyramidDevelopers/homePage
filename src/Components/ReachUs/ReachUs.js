import React, { useState } from "react";
import "./ReachUs.css";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";

const ReachUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(query);
    setName("");
    setEmail("");
    setQuery("");
  };

  return (
    <div className="reachUs">
      <h1 className="reachUs__header">REACH US</h1>
      <div className="reachUs__body">
        <div className="reachUs__bodyLeft">
          <p className="reachUs__bodyLeftP">
            Our eagerness to work with you will reflect in our <br />
            promptness when you contact us. Do not hesitate to <br />
            ask us anything :)
          </p>

          <form className="reachUs__form">
            <div className="reachUs__formLeft">
              <input
                className="reachUs__formInput"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="reachUs__formInput"
                type="text"
                placeholder="Your Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className="reachUs__formInput reachUs__textarea"
                type="text"
                placeholder="Your Query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="reachUs__formRight">
              <div className="reachUs__formRightBox" />
              <button
                className="reachUs__formButton"
                type="submit"
                onClick={handleSubmit}
              >
                <KeyboardReturnIcon />
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        <div className="reachUs__bodyRight">
          <div className="reachUs__bodyRightTop">
            <div className="reachUs__bodyRightTopHeader">
              <p className="reachUs__bodyRightTopHeaderP">
                Looking to work us? &gt;&gt;&gt;
              </p>

              <p className="reachUs__bodyRightTopHeaderp">
                Join us to take part in exciting projects <br />
                and gain experience along with the student <br />
                community, and unlock amazing new prospects.
              </p>
            </div>

            <div className="reachUs__bodyRightTopBlocks">
              <div className="reachUs__bodyRightTopBlockLeft" />
              <div className="reachUs__bodyRightTopBlockRight" />
            </div>
          </div>

          <div className="reachUs__bodyRightBottom">
            <div className="reachUs__bodyRightBottomContent">
              <div className="reachUs__bodyRightBottomTop">
                <div className="reachUs__bodyRightBottomTopIcon">
                  <MailOutlineIcon />
                  <p>MAIL</p>
                </div>

                <div className="reachUs__bodyRightBottomTopText">
                  <p>developpyramid@gmail.com</p>
                </div>

                <div className="reachUs__bodyRightBottomBlocks">
                  <div className="reachUs__bodyRightBottomBlockRight" />
                </div>
              </div>
            </div>

            <div className="reachUs__bodyRightBottomContent">
              <div className="reachUs__bodyRightBottomTop">
                <div className="reachUs__bodyRightBottomTopIcon">
                  <PhoneOutlinedIcon />
                  <p>PHONE</p>
                </div>

                <div className="reachUs__bodyRightBottomTopText">
                  <p>9845309776</p>
                </div>

                <div className="reachUs__bodyRightBottomBlocks">
                  <div className="reachUs__bodyRightBottomBlockRight" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachUs;
