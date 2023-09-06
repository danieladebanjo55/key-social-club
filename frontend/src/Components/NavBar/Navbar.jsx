import React from "react";
import "./Navbar.scss";
import { useRef } from "react";
import Logo from "./ksc-logo.png";

export default function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3 className="logo">
        <img src={Logo} alt="Logo" />
      </h3>
      <nav ref={navRef}>
        <a href="#About"></a>
        <a href="#Algorithm" className="subscribe-link">
          钱包连线
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <i className="fa fa-times"></i>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <i className="fa fa-bars"></i>
      </button>
    </header>
  );
}
