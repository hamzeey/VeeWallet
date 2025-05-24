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

function CryptoLIsting() {
  return (
    <div className="listing">
      <div className="popular inter">
        <h1>Popular Listing</h1>
      </div>

      <div className="listing-box inter">
        <div className="table-heading">
          <h4 className="hot">Hot</h4>
          <h4>New Coins</h4>
          <h4>Top Gainers</h4>
        </div>
         
         <table className="main-table">
<thead className="head">
  <tr>
    <th>Name</th>
     <th>Last price</th>
      <th>24h Change</th>
       <th>Chart</th>
        <th>  </th>
  </tr>
</thead>
<tbody className="table-body">
  <tr>
    <td className="table-img"><img src={logo1}  /> <span>BTC</span> <span>Bitcoin</span></td>
    <td>$16,834.56</td>
    <td className="btc-p">-3.2%</td>
     <td className="table-chart"><img src={btc}  /></td>
      <td><button className="btnn">Trade</button></td>
  </tr>


  <tr>
     <td className="table-img"><img src={logo2}  /> <span>ETH</span> <span>Ethereum</span></td>
    <td>$1267.23</td>
    <td className="eth-p">+4.26%</td>
     <td className="table-chart"><img src={eth}  /></td>
      <td><button className="btnn">Trade</button></td>
  </tr>


    <tr>
       <td className="table-img"><img src={logo3}  /> <span>SOL</span> <span>Solana</span></td>
    <td>$204.67</td>
    <td className="sol-p">-2.45%</td>
     <td className="table-chart"><img src={sol}  /></td>
      <td><button className="btnn">Trade</button></td>
    </tr>



      <tr>
          <td className="table-img"><img src={logo4}  /> <span>BNB</span> <span>Binance Coin</span></td>
    <td>$305.12</td>
    <td className="bnb-p">+1.56%</td>
     <td className="table-chart"><img src={bnb}  /></td>
      <td><button className="btnn">Trade</button></td>
      </tr>



        <tr>
           <td className="table-img"><img src={logo5}  /> <span>LTC</span> <span>Litecoin</span></td>
    <td>$769.54</td>
    <td className="ltc-p">-4.33%</td>
     <td className="table-chart"> <img src={ltc}  /></td>
      <td><button className="btnn">Trade</button></td>
        </tr>
</tbody>
         </table>

<div className="more">
  <p>View More &gt;</p>
</div>
 
 
      </div>
    </div>
  );
}

export default CryptoLIsting;
