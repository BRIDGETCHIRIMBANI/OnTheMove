import React from 'react';
import BRIDGET from "../Images/BRIDGET.jpg";

export default function AboutUs () {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={BRIDGET} alt="BRIDGET"/>
      </div>
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          Welcome to my About Me page! My name is Bridget Chirimbani, a third-year Computing student at the African Leadership College. 
          My mission is to Serve.I have a passion for efficiency and simplicity, ie using technology for the betterment of our lives.Technology should be for the people, by the people.
        </p>
        <p> My motto is "Less Is More". People are not looking for complicated systems in this already complicated life! </p>
      </div>
    </div>
  );
}
