import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import heart from "../../assets/heart.png";
import hero_img_back from "../../assets/hero_image_back.png";
import hero_img from "../../assets/hero_image.png";
import calorie from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-hero">
        <Header />
        <div className="best-ad">
          <div></div>
          <span>The best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+ 140</span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-hero">
        <div className="btn">Join Now</div>
        <div className="heart-rate">
          <img src={heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        <img src={hero_img} alt="hero-img" className="hero-img" />
        <img
          src={hero_img_back}
          alt="hero-img-back"
          className="hero-img-back"
        />
        <div className="calories">
          <img src={calorie} alt="calorie" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
