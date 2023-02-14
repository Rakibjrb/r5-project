import React from "react";
import "./banner.css";

const bannerFeatureData = [
  {
    id: 1,
    icon: <i className="fa-solid fa-truck"></i>,
    value: "Shipping within 7 days",
  },
  {
    id: 2,
    icon: <i className="fa-brands fa-rocketchat"></i>,
    value: "Support 24/7",
  },
  {
    id: 3,
    icon: <i className="fa-regular fa-credit-card"></i>,
    value: "Safe Payment",
  },
];

const Banner = () => {
  return (
    <div>
      <section id="banner">
        <h1>50% Sales going on</h1>
        <div className="bannerdivrow container2">
          {bannerFeatureData.map((feature) => {
            const { id, icon, value } = feature;
            return (
              <div key={id} className="bannerdivcol">
                {icon}
                <h3>{value}</h3>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Banner;
