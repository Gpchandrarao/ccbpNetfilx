import React, { useEffect, useState } from "react";
import logo from "../../Assets/logo.png";
import profile from "../../Assets/profile.png";
import "./index.css";

const Nav = () => {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <nav className={`nav ${show && "nav-black"}`}>
      <div className="nav-contents">
        <img src={logo} alt="netfilx-logo" className="nav-logo" />
        <img src={profile} alt="netfilx-logo" className="nav-profile" />
      </div>
    </nav>
  );
};

export default Nav;
