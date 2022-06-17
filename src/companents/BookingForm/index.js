import React, { useState } from "react";
import BookingOneForm from "../BookingOneForm";
import BookingTwoForm from "../BookingTwoForm";
import "./index.scss";

const BookingForm = () => {
  const [tab, setTab] = useState(false);
  return (
    <div className="bookingForm">
      <div className="container">
        <h1 className="bookingForm__title">Take Back Your Time. Outsource Your Cleaning!</h1>
        <p className="bookingForm__subtitle subtitle">
          Hassle-Free House Cleaners For Busy Individuals and Vacation Rental Hosts
        </p>

        <form className="bookingForm__form">
          <ul className="bookingForm__formBtns formBtns">
            <li className={`${!tab ? "" : "tabTrue"}`}>
              <button
                className="formBtns__btn-1 formBtn"
                onClick={(e) => {
                  setTab(false);
                  e.preventDefault();
                }}
              >
                Clean my home - instant quote
              </button>
            </li>
            <li className={`${tab ? "" : "tabTrue"}`}>
              <button
                className="formBtns__btn-2 formBtn"
                onClick={(e) => {
                  setTab(true);
                  e.preventDefault();
                }}
              >
                Clean my vacation rental
              </button>
            </li>
          </ul>
          {!tab ? <BookingOneForm /> : <BookingTwoForm />}
        </form>

        <ul className="bookingForm__achievements">
          <li className="bookingForm__achievement">
            <span>50,000+</span>Matched Cleanings
          </li>
          <li className="bookingForm__achievement">
            <span>140,000+</span>
            Hours Saved
          </li>
          <li className="bookingForm__achievement">
            <span>2013</span>
            Established
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookingForm;
