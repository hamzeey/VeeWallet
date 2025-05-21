import './Nav.css'
import React from 'react'

function Nav() {
   return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">VeeWallet</span>
        <ul className="nav-links">
          <li>Buy Crypto</li>
          <li>Markets</li>
          <li>Trades</li>
          <li>Derivatives</li>
          <li>Earn</li>
          <li>NFT</li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="/signin" className="signin">Sign In</a>
        <button className="get-started">Get Started</button>
        <span className="icon">🌐</span>
        <span className="icon">🌙</span>
      </div>
    </nav>
  );

}

export default Nav