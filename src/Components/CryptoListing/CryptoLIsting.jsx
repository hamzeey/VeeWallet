import React from "react";
import "./CryptoLIsting.css";
import btc from '../../assets/btc.png'
import bnb from '../../assets/bnb.png'
import eth from '../../assets/eth.png'
import ltc from '../../assets/ltc.png'
import sol from '../../assets/sol.png'
import logo1 from '../../assets/L-btc.png'
import logo4 from '../../assets/L-bnb.png'
import logo2 from '../../assets/L-eth.png'
import logo5 from '../../assets/L-ltc.png'
import logo3 from '../../assets/L-sol.png'

const data=[
  {
    id:1,
    logo:logo1,
    short:'BTC',
    name:"Bitcoin",
    price:"$16,834.56",
    change:"-3.2%",
    chart:btc
  },
   {
    id:2,
    logo:logo2,
    short:'ETH',
    name:"Etherium",
    price:"$1267.23",
    change:"+4.26%",
    chart:eth
  },
   {
    id:3,
    logo:logo3,
    short:'SOL',
    name:"Solana",
    price:"$204.67",
    change:"-2.45%",
    chart:sol
  },
   {
    id:4,
    logo:logo4,
    short:'BNB',
    name:"Binance Coin",
    price:"$305.12",
    change:"+1.56%",
    chart:bnb
  },
   {
    id:5,
    logo:logo5,
    short:'LTC',
    name:"Litecoin",
    price:"$769.54",
    change:"-4.33%",
    chart:ltc
  }
]




function CryptoLIsting() {
  return (
    <div className="listing">
      <div className="popular inter">
        <h1>Popular Listing</h1>
      </div>

      <div className="listing-box inter">
        <div className="table-heading">
          <h4>Hot</h4>
          <h4>New Coins</h4>
          <h4>Top Gainers</h4>
        </div>


 
 
      </div>
    </div>
  );
}

export default CryptoLIsting;
