import './Nav.css'
import React  from 'react'
import { useState, useEffect } from 'react'
import { BsGlobe } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { MdArrowDropDownCircle } from "react-icons/md";


function Nav() {
   const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

   const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
   return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo glory">VeeWallet</span>
        <ul className="nav-links inter">
          <li>Buy Crypto <MdArrowDropDownCircle /></li>
          <li>Markets <MdArrowDropDownCircle /></li>
          <li>Trades <MdArrowDropDownCircle /></li>
          <li>Derivatives <MdArrowDropDownCircle /></li>
          <li>Earn <MdArrowDropDownCircle /></li>
          <li>NFT <MdArrowDropDownCircle /></li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="/signin" className="signin inter">Sign In</a>
        <button className="get-started inter">Get Started</button>
        <span className="icon"><BsGlobe /></span>
        <span className="icon" onClick={toggleDarkMode}><MdDarkMode /></span>
      </div>
    </nav>
  );

}

export default Nav