import React from "react";
import logo from "./images/screenshot.png";
import fitness from './images/fitness.jpg';

import styled from 'styled-components';

function MainContent() {

  const Summary = styled.div`
    display: flex;
    width: 90%;
    margin: auto;
    justify-content: space-between;

    .content-text {
      width: 30%;
      margin-top: 180px;
      display: flex;
      flex-direction: column;
    }

    .content-text button{
      margin: 50px auto;
      width: 250px;
      padding: 15px;
      border-radius: 20px;
      background-color: red;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
    }

    .button{
      background-color: red;
      padding: 20px;
      color:white;
      border-radius: 20px;
      margin-top: 80px;
      width: 200px;
      text-decoration: none;
    }
  `

  const Features = styled.div`
    display: flex;
    width: 90%;
    margin: 70px 100px ;

    .app-features {
      width: 400px;
      display: flex;
      justify-content: space-between;
    }

    .app-features p{
      width: 200px;
    }
  `

  return (
    <div className="Main">
      <Summary>
        <div class="content-text">
          AnywhereFitness is the all-in-one solution to meet your “on-location”
          fitness class needs. AnywhereFitness makes it painless for Instructors
          and Clients alike to hold and attend Fitness classes wherever they
          might be held.
          <a href="https://anywherefitnessn1822.netlify.com/" class="button">Sign Up</a>
        </div>
        <div class="content-image">
          <img src={logo} alt="logo" height="500px" width="1000px" />
        </div>
      </Summary>
      <>
        <Features class="Features-content">
          <div classname='app-features'>
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
          <div class="Features-image">
            <img src={fitness} width='500px' height='500px' />
          </div>
        </Features>
      </>
    </div>
  );
}

export default MainContent;
