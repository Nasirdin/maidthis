import React from "react";
import "./index.scss";

const CustomerReviews = () => {
  return (
    <div className="customerReviews">
      <div className="container">
        <h2 className="title">What Clients Are Saying</h2>
        <div className="customerReviews__btns">
            <button className="customerReviews__btn btn orange">Clean My Home</button>
            <button className="customerReviews__btn btn greenyellow">Clean My Vacation Rental</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
