import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import rightarrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="program-header">
        <span className="stroke-text">Explore our</span>
        <span>programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="program-categories">
        {programsData.map((item, i) => (
          <div className="category">
            {item.image}
            <span>{item.heading}</span>
            <span>{item.details}</span>
            <div className="join-now">
              <span key={i}>Join Now</span>
              <img src={rightarrow} alt="right-arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
