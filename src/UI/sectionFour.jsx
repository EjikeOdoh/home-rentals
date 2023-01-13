import React from "react";
import "./sectionFour.css";

const sectionFour = () => {
  return (
    <section className="sectionFour">
      <div className="sectionFourTop">
        <div className="sectionFourImages">
          <div className="topImages">
            <div className="one">
              <p className="text">Flexible Leases</p>
            </div>
            <div className="two">
              <p className="text">7-Day Happiness Guaranteed</p>
            </div>
          </div>
          <div className="bottomImages">
            <div className="three">
              <p className="text"> Monthly House Cleaning</p>
            </div>
            <div className="four">
              <p className="text">Choose Your Own Roommate</p>
            </div>
          </div>
        </div>
        <div className="sectionFourTopText">
          <h2 className="sectionFourHeading">
            Flexibility and options to suit your lifestyle.
          </h2>
          <p>
            You need it? We got it. We make finding your next home easy,
            comfortable, and simple. From our happiness guarantee to our
            selective roommate finder option. We provide you the flexibility
            that you most desire.
          </p>
          <button>Search Rooms</button>
        </div>
      </div>
      <div className="sectionFourBottom"></div>
    </section>
  );
};

export default sectionFour;
