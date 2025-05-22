import React from "react";
import "./ChooseUs.css";
import img1 from "../../assets/reliable1.png";
import img2 from "../../assets/reliable2.png";
import img3 from "../../assets/reliable3.png";

const data = [
  {
    id: 1,
    image: img1,
    title: "Secure Storage",
    desc: "We ensure your funds are protected with both centralized and decentralized methods.",
  },
  {
    id: 2,
    image: img2,
    title: "Insurance Protection",
    desc: "All cryto cash and balances are maintained and insured by NIDC up to a maximum of $400,000.",
  },
  {
    id: 3,
    image: img3,
    title: "Personalized Access Control",
    desc: "Personalized access control allows you to restrict devices and addresses that can access your account, for greater ease of mind",
  },
];
function ChooseUs() {
  return (
    <div className="choose">
      <div className="header">
        <h1>Your Most Reliable Crypto Exchange</h1>
        <p>Here are some reasons why you should choose VeeWallet</p>
      </div>

      <div className="body">
        {data.map(({ id, image, title, desc }) => {
          return (
            <div className="contaiiiiner" key={id}>
              <div className="image-contaiiner">
                <img src={image} alt={desc} />
              </div>

              <div className="teext">
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChooseUs;
