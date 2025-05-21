import React from "react";
import "./Portfolio.css";
import bro from "../../assets/bro.png";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";
import port4 from "../../assets/port4.png";

const data = [
  {
    title: "Identity Verification",
    description:
      "Secure your account and transactions by completing the identity verification process",
    icon: port1,
  },
  {
    title: "Identity Verification",
    description:
      "Secure your account and transactions by completing the identity verification process",
    icon: port2,
  },
  {
    title: "Identity Verification",
    description:
      "Secure your account and transactions by completing the identity verification process",
    icon: port3,
  },
  {
    title: "Identity Verification",
    description:
      "Secure your account and transactions by completing the identity verification process",
    icon: port4,
  },
];
function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-left">
        <h2>Start Building Your Crypto Portfolio</h2>
        <p>Follow these simple steps to start your first trade.</p>
        <div className="portfolio-steps">
          {data.map((item, index) => (
            <div key={index} className="portfolio-step">
              <div className="icon">
                 <img src={item.icon} alt={data.title} />
              </div>
              <div className="text">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="start-button">Start Your Journey</button>
      </div>
      <div className="portfolio-right">
        <img src={bro} alt="Crypto dashboard illustration" />
      </div>
    </div>
  );
}

export default Portfolio;
