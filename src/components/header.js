import React, { useState } from "react";
import Logo from "../img/vr-2.png";
import MobileMenu from "./mobilemenu";
import { Link } from "react-router-dom";

// import "./style.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <header className="header">
      <div className="row">
        <div className="col-lg-12">
          <div className="header-inn">
            <div className="site-logo">
              <Link to="/">
                <img src={Logo} alt="venkateshwara reality logo" />
              </Link>
            </div>
            <div className="header-navigation">
              <div className="mainmenu">
                <nav id="menu">
                  <ul className="dropdown">
                    <li>
                      <Link style={{textDecoration:"none",fontWeight:"700"}} to="/">Home</Link>
                    </li>
                    <li>
                      <Link style={{textDecoration:"none",fontWeight:"700"}} to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/projects" style={{textDecoration:"none",fontWeight:"700"}}>
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link style={{textDecoration:"none",fontWeight:"700"}} to="/" onClick={onClick}>
                        Blog
                      </Link>
                      <ul>
                        <li>
                          <Link style={{textDecoration:"none",fontWeight:"700"}} to="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link style={{textDecoration:"none",fontWeight:"700"}} to="/blog-single">Blog Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link style={{textDecoration:"none",fontWeight:"700"}} to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/portfolio" style={{textDecoration:"none",fontWeight:"700"}}>
                        Profile
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-action">
                <button className="search-toggle" onClick={() => setShow(true)}>
                  <i className="fa fa-search"></i>
                </button>
                <Link to="/contact" className="header-btn">
                  <div className="icon-holder">
                    <i className="fa fa-envelope"></i>
                  </div>
                  Get In Touch
                </Link>
              </div>
              <div
                id="search-overlay"
                className={`block ${show ? "show" : ""}`}
              >
                <div className="centered">
                  <div id="search-box">
                    <i
                      id="close-btn"
                      onClick={() => setShow(false)}
                      className="fa fa-times fa-2x"
                    ></i>
                    <form id="search-form" onSubmit={SubmitHandler}>
                      <input
                        id="search-text"
                        name="q"
                        placeholder="Type here..."
                        type="text"
                      />
                      <button id="search-button" type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
