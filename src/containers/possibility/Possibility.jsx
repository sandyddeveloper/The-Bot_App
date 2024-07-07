import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="bot_possibility section_padding" id="possibility">
    <div className="bot_possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="bot_possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient_text">The possibilities are <br /> beyond your imagination</h1>
      <p>Transforming Web Development Beyond Expectations" is not just a statement; it's a testament to its versatility. From automating mundane tasks to suggesting cutting-edge solutions, WebDev Bot isn't just a coding assistant—it's a development partner, simplifying workflows and fueling innovation. With its intuitive features and adaptive learning, WebDev Bot isn't just a tool; it's a catalyst for success, empowering developers to reach new heights. Embrace the future of web development with WebDev Bot, where every line of code is infused with possibility. With WebDev Bot, the horizon of web development stretches far beyond imagination.
</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;