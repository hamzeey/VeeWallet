import React from "react";
import "./AlwaysHere.css";
import vector from "../../assets/vector.png";
import faq from "../../assets/faq.png";
import community from "../../assets/community.png";

const data = [
  {
    id: 1,
    image: vector,
    title: "24/7 Customer Service",
    desc: "If you have any questions, please do not hesitate to contact VeeWallet's customer support.",
    last:"Chat Now >"
  },
  {
    id: 2,
    image: faq,
    title: "FAQ",
    desc: "For detailed instructions on specific features, please refer to the FAQ's.",
    last:"Chat Now >"
  },
  {
    id: 3,
    image: community,
    title: "Community",
    desc: "With over 15 languages supported, the VeeWallet Global community is home to millions of users from 20+ countries.",
    last:"Chat Now >"
  },
];
function AlwaysHere() {
  return (
    <div className="always inter">
      <div className="top">
        <h2>We Are Always Here</h2>
      </div>

      <div className="bodyy">
        {data.map(({ id, image, title, desc,last }) => {
          return (
            <div className="wrap" key={id}>
              <div className="imgg-contt">
                <img src={image} alt={desc} />
              </div>

              <div className="writing">
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
              <p className="bttnn">{last}</p>
            </div>
            
          );
        })}
      </div>
    </div>
  );
}

export default AlwaysHere;
