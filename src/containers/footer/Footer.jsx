import React from 'react';
import logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="bot_footer section__padding">
    <div className="bot_footer-heading">
      <h1 className="gradient_text">Do you want to step in to the future before others</h1>
    </div>

    <div className="bot_footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="bot_footer-links">
      <div className="bot_footer-links_logo">
        <img src={logo} alt="gpt3_logo" />
        <p>Abcdefghijklmnopqrstuvwxyz, <br /> All Rights Reserved</p>
      </div>
      <div className="bot_footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="bot_footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="bot_footer-links_div">
        <h4>Get in touch</h4>
        <p>Abcdefghijklmnopqrstuvwxyz</p>
        <p>+91 1236456987</p>
        <p>sandyddevelper.com</p>
      </div>
    </div>

    <div className="bot_footer-copyright">
      <p>@2024 MRxD-1.O. All rights reserved.</p>
    </div>
  </div>
);

export default Footer