import React from "react";
import "./Staking.css";
import sol from "../../assets/L-sol.png";
import bnb from "../../assets/L-bnb.png";
import atom from "../../assets/L-atom.png";
import wan from "../../assets/L-wan.png";
import dash from "../../assets/L-dash.png";
import digi from "../../assets/L-digi.png";
import ont from "../../assets/L-ont.png";
import via from "../../assets/L-via.png";
import usdt from "../../assets/L-tether.png";
import neo from "../../assets/L-neo.png";

const data = [
  {
    id: 1,
    image: sol,
    title: "Solana ",
    short:'(SOL)',
    desc: "Annual rewards",
    price: "9-12%",

  },
  {
    id: 2,
    image: bnb,
    title: "Binance",
     short:'(BNB)',
    desc: "Annual rewards",
    price: "12-30%",
  },
  {
    id: 3,
    image: atom,
    title: "Cosmos",
     short:'(ATOM)',
    desc: "Annual rewards",
    price: "8-14%",
  },
  {
    id: 4,
    image: wan,
    title: "Wanchain",
     short:'(WAN)',
    desc: "Annual rewards",
    price: "6-10%",
  },
  {
    id: 5,
    image: dash,
    title: "Dash",
     short:'(DASH)',
    desc: "Annual rewards",
    price: "5-12%",
  },
  {
    id: 6,
    image: digi,
    title: "DigiByte ",
     short:'(DGB)',
    desc: "Annual rewards",
    price: "15-25%",
  },
  {
    id: 7,
    image: ont,
    title: "Ontology",
     short:'(ONT)',
    desc: "Annual rewards",
    price: "20-30%",
  },
  {
    id: 8,
    image: via,
    title: "Viacoin",
     short:'(VIA)',
    desc: "Annual rewards",
    price: "9-14%",
  },
  {
    id: 9,
    image: usdt,
    title: "Tether",
     short:'(USDT)',
    desc: "Annual rewards",
    price: "10-20%",
  },
  {
    id: 10,
    image: neo,
    title: "Neo ",
     short:'(NEO)',
    desc: "Annual rewards",
    price: "8-12%",
  },
];

function Staking() {
  return (
    <div className="staking">
      <div className="stake-txt">
        <h5>STAKING CRYPTO</h5>
        <h2>Earn Crypto Rewards</h2>
        <p>Earn up to 40% in reward yearly by staking your assets</p>
      </div>

      <div className="main-wrapper">
        <div className="card-wrapper">
          {data.map(({ id, image, title, desc, price,short }) => {
            return (
              <div className="contaiiiner" key={id}>
                <div className="img-container">
                  <img src={image} alt="" />
                  <div className="img-hover"></div>
                </div>
                <div className="text">
                  <h4>{title} <span>{short}</span> </h4>
                  <h5>{desc}</h5>
                  <p className="price">{price}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
      <div className="button">
      <button className="btn"> Start Earning &gt;</button>
      </div>

    </div>
  );
}

export default Staking;
