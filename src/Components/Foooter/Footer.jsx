import React from 'react'
import './Footer.css'
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";
function Footer() {
  return (
    <div className='foot inter'>
           <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2 className='glory'>VeeWallet</h2>
          <div className="social-icons">
           <BsFacebook />
           <FaInstagramSquare />
           <FaTwitter />
           <FaYoutube />
           <IoLogoWhatsapp />
       <FaLinkedin />
          <BsDiscord />
          <FaSquareGithub />
           <RiTelegram2Fill />
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>About Us</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Community</li>
              <li>Blog</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Announcements</li>
              <li>News</li>
              <li>Sitemap</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              <li>Exchange</li>
              <li>Academy</li>
              <li>NFT</li>
              <li>Spot Trading</li>
              <li>Margin Trading</li>
              <li>Crypto Lending</li>
              <li>Trading Bot</li>
              <li>Launch Pad</li>
              <li>Trust Wallet</li>
              <li>Gift Card</li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>Downloads</li>
              <li>Referral</li>
              <li>P2P</li>
              <li>Identity Identification</li>
              <li>Technical Support</li>
              <li>VIP</li>
              <li>Affiliate Program</li>
              <li>Submit a request</li>
              <li>Verification Search</li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>Technical Support</li>
              <li>User Feedback</li>
              <li>Trading Rules</li>
              <li>APIs</li>
              <li>Fees</li>
              <li>Account Access</li>
              <li>Payment Methods</li>
            </ul>
          </div>
          <div>
            <h4>Learn</h4>
            <ul>
              <li>Crypto Guide</li>
              <li>Videos</li>
              <li>Podcast</li>
              <li>How to Buy Bitcoin</li>
              <li>How to Buy Cardano</li>
              <li>How to Buy Ripple</li>
              <li>How to Buy Ethereum</li>
              <li>How to Buy Tradable Altcoins</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2022 All Rights Reserved</p>
      </div>
    </footer>

    </div>
  )
}

export default Footer