import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='bot_header section_padding' id='home'>
      <div className='bot_header-content'>
        <h1 className='gradient_text'>Let's Create Something Incredible with MRxD-1.0 Open AI</h1>
        <p>Although any sleep may be unpleasant for travel assistance, not all thoughts bless the exercise. Gratification alters everything joyfully in the connection. We've spent years allowing inquiries at our celebration.</p>
        <div className="bot_header-content_input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="bot_header-content_people">
          <img src={people} alt="People requesting access" />
          <p>2,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="bot_header-image">
        <img src={ai} alt="Artificial Intelligence illustration" />
      </div>
    </div>
  );
}

export default Header;
