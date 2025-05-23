import React from 'react'
import './Hero.css'
import setup from '../../assets/setup.png'
function Hero() {
  return (
    <div className='hero'>
       <div className='hero-txt inter'>
<h2>Buy, Trade and <span>Hodl</span> <br />your Favourite <br />Cryptocurrencies</h2>
<p className='buy'>Trade Over 1200 Cryptocurrencies Safely, Quickly and Easily</p>
<div className='inner-form'> 
<form action="">
  <div className='field'>
  <input type="text" placeholder='Email Address' className='p-text' /> 
  </div>

</form>
<div>
  <div><button className='btn'>Get Started</button></div>
</div>
</div>
<p className='fees'>Sign Up Now and Get 0 Fees on Trading</p>
       </div>
       <div className='img-cont'>
        <div className='hero-img'>
<img src={setup} className='comp' />
</div>
       </div>
    </div>
  )
}

export default Hero