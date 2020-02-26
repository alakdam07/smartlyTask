import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="wraper">
      <header>
        <nav>
          <div className="logo">
            <Link to="/">
              {" "}
              <img
                src="https://www.smartly.io/hubfs/S2018%20Web%20Placeholders/s2018%20visuals/smartlyio_logo.png"
                alt="pic"
                style={{ width: "200px" }}
                to="/home"
              />{" "}
            </Link>
          </div>
          <div className="menu">
            <ul>
              <li>
                <NavLink
                  to="/"
                  style={{
                    color: "#21234d",
                    fontSize: "20px",
                    textDecoration: "none",
                    fontWeight: 700
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  style={{
                    color: "#21234d",
                    fontSize: "20px",
                    textDecoration: "none",
                    fontWeight: 700
                  }}
                >
                  Why Smartly
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
