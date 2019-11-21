import React from "react";
import logo from "./images/screenshot.png";

function MainContent() {
  return (
    <div className="Main">
      <container>
        <div class="content-text">
          AnywhereFitness is the all-in-one solution to meet your “on-location”
          fitness class needs. AnywhereFitness makes it painless for Instructors
          and Clients alike to hold and attend Fitness classes wherever they
          might be held.
          <button href="#">Sign in</button>
        </div>
        <div class="content-image">
          <img src={logo} alt="logo" height="50px" width="100px" />
        </div>
      </container>
      <>
        <div class="Features-content">
            <h2>App features</h2>
          <p>User can create/register as a "Client" and login with the
          registered credentials.(web, mobile) </p>
          <p>User can create/register as an
          "Instructor" by entering an additional Auth Code during signup, and
          can login with the registered credentials.(web, mobile)</p>
          <p>"Client" and "Instructor" are both presented with the appropriate onboarding
          walkthrough on first signin, with an option to skip it.(UX, mobile)</p>
          <p>Authenticated "Instructor" can create update and delete a "Class". At
          a minimum, each "class" must have the following properties(web,
          mobile):</p>
        </div>
        <div class="Features-image"></div>
      </>
    </div>
  );
}

export default MainContent;
