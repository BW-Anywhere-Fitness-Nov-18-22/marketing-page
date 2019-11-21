import React from "react";
import logo from "./images/screenshot.png";

function MainContent() {
  return (
    <div className="Main">
      <container>
        <div class = "content-text">
          AnywhereFitness is the all-in-one solution to meet your “on-location”
          fitness class needs. AnywhereFitness makes it painless for Instructors
          and Clients alike to hold and attend Fitness classes wherever they
          might be held.
          <button href = "#">Sign in</button>
        </div>
        <div class = "content-image">
          <img src={logo} alt="logo" height="50px" width="100px" />
        </div>
      </container>
    </div>
  );
}

export default MainContent;
