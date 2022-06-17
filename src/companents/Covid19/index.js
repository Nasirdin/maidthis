import React, { useState } from "react";
import "./index.scss";
import Img1 from "./img1.png";
import Icon1 from "./icon1.png";
import Icon2 from "./icon2.png";
import Icon3 from "./icon3.png";
import Icon4 from "./icon4.png";
import Icon5 from "./icon5.png";
import Icon6 from "./icon6.png";
import Icon7 from "./icon7.png";
import Icon8 from "./icon8.png";
import Icon9 from "./icon9.png";
import Icon10 from "./icon10.png";

const Covid19 = () => {
  const [openContent, setOpenContent] = useState(false);
  return (
    <div className="covid">
      <div className="container">
        <div className="covid__contentDefault">
          <div className="covid__imgBlock">
            <img className="covid__img" src={Img1} alt="img" />
          </div>
          <div className="covid__titleAndBtnBlock">
            <h2 className="covid__title title">"How Will MaidThis Help Protect Me From Covid-19?"</h2>
            {!openContent ? (
              <button
                className="btn orange"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenContent(true);
                }}
              >
                Read More
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        {!openContent ? (
          ""
        ) : (
          <div className="covid__bigContent">
            <p className="covid__subtitle">
              CDC recommends practicing routine cleaning of frequently touched surfaces with household cleaners.
              Remember - your cleaner brings supplies with them, so you have nothing to do but relax :) Below are some
              high-touch areas that you can ask your cleaner to sanitize.
            </p>
            <ul className="covid__items">
              <li className="covid__item">
                <img className="covid__icon" src={Icon1} alt="icon" />
                <p className="covid__itemText">Lightswitches</p>
              </li>
              <li className="covid__item">
                <img className="covid__icon" src={Icon2} alt="icon" />
                <p className="covid__itemText">Remotes</p>
              </li>
              <li className="covid__item">
                <img className="covid__icon" src={Icon3} alt="icon" />
                <p className="covid__itemText">Tables</p>
              </li>
              <li className="covid__item">
                <img className="covid__icon" src={Icon4} alt="icon" />
                <p className="covid__itemText">Desks</p>
              </li>
              <li className="covid__item">
                <img className="covid__icon" src={Icon5} alt="icon" />
                <p className="covid__itemText">Toilets</p>
              </li>
              <li className="covid__item">
                <img className="covid__icon" src={Icon6} alt="icon" />
                <p className="covid__itemText">Countertops</p>
              </li>
              <li className="covid__item">
                <img className="covid__icon" src={Icon7} alt="icon" />
                <p className="covid__itemText">Doorknobs</p>
              </li>
              <li className="covid__item">
                <img className="covid__icon" src={Icon8} alt="icon" />
                <p className="covid__itemText">Bathtub/Showers</p>
              </li>
              <li className="covid__item">
                <img className="covid__icon" src={Icon9} alt="icon" />
                <p className="covid__itemText">Chairs</p>
              </li>
              <li className="covid__item">
                <img className="covid__icon" src={Icon10} alt="icon" />
                <p className="covid__itemText">Outside of Appliances</p>
              </li>
            </ul>
            <p className="covid__minTitle">The below is also being done to help ensure your safety:</p>
            <ol className="covid__texts">
              <li className="covid__text">
                Any domestic workers who show any symptoms of fever OR are around those with similar symptoms have been
                asked to stay at home
              </li>
              <li className="covid__text">
                Per CDC guidelines, cleaners have been recommended to (i) wear face masks during the cleaning, and (ii)
                wash their hands for 20 seconds BEFORE and AFTER the cleaning
              </li>
              <li className="covid__text">
                It is recommended by the CDC to stay 6 feet away from others. Cleaners have been recommended to do this
                while in your home, so don’t be offended if they move away from you 😉
              </li>
            </ol>
            <button
              className="btn blue"
              onClick={(e) => {
                e.preventDefault();
                setOpenContent(false);
              }}
            >
              Read Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Covid19;
