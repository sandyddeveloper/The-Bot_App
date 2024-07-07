import React, { useState } from 'react';
import { RiAlignRight, RiCloseLine } from "react-icons/ri";
import './navbar.css';
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is MRxD?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='bot_navbar'>
      <div className="bot_navbar-links">
        <div className='bot_navbar-link_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='bot_navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='bot_navbar-signin'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="bot_navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiAlignRight color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="bot_navbar-menu_container scale-up-center">
            <div className="bot_navbar-menu_container-links">
              <Menu />
            </div>
            <div className="bot_navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
