import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuopen, setMenuopen] = useState(false);
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      {menuopen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuopen(true)}
        >
          <img
            src={bars}
            alt="bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuopen(false)}
              to="home"
              span={true}
              smooth={true}
              activeClass="active"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuopen(false)}
              to="programs"
              span={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li onClick={() => setMenuopen(false)}>
            <Link
              onClick={() => setMenuopen(false)}
              to="whyus"
              span={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li onClick={() => setMenuopen(false)}>
            <Link
              onClick={() => setMenuopen(false)}
              to="plans"
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuopen(false)}
              to="testimonials"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
