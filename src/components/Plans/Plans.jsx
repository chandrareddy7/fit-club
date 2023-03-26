import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whitetick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="program-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      <div className="plans">
        {plansData.map((item, i) => (
          <div className="plan">
            {item.icon}
            <span>{item.name}</span>
            <span>$ {item.price}</span>
            <div className="features">
              {item.features.map((feature, i) => (
                <div className="feature">
                  <img src={whitetick} alt="white-tick" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more Benefits -></span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
