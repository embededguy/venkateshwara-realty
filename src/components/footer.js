import React from "react";
import { Link } from "react-router-dom";

// import "./style.css";

const Footer = () => {
  const NewsletterHandler = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 order-lg-1 order-1">
              <div className="single-footer">
                <h3>About</h3>
                <p>
                Venkateshwara Realty has successfully collaberated with Westin Developers, a pioneer in real estate industry with over 28 successfully completed projects under its belt. 
                
                </p>
                <ul className="footer-contact">
                  <li>
                    <i className="fa fa-phone" /> +91 99201 02300
                  </li>
                  <li>
                    <i className="fa fa-envelope" /> sales@venkateshwararealty.co.in
                  </li>
                  <li>
                    <i className="fa fa-map" />Office No:1, Saikrupa Apt., Azad Rd-2, Behind Vishal Hall, Opp. Kamgar Kalyan Kendra, Andheri (E), Mumbai - 400 069;
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 order-lg-2 order-3">
              <div className="single-footer">
                <h3>Qucik Links</h3>
                <ul>
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Our Projects</Link>
                  </li>
                  <li>
                    <Link to="/">Our Services</Link>
                  </li>
                  <li>
                    <Link to="/">Meet The Team</Link>
                  </li>
                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 order-lg-3 order-4">
              <div className="single-footer">
                <h3>Exlore</h3>
                <ul>
                  <li>
                    <Link to="/">Case Study</Link>
                  </li>
                  <li>
                    <Link to="/">Latest News</Link>
                  </li>
                  <li>
                    <Link to="/">Help Center</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Terms & Condition</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-lg-4 order-2">
              <div className="single-footer">
                <h3>Newsletter</h3>
                <p>Sign up now for weekly news & updates.</p>
                <div className="newsletter_form">
                  <form onSubmit={NewsletterHandler}>
                    <input type="email" placeholder="Email Address" />
                    <button type="submit">
                      <i className="fa fa-envelope" />
                    </button>
                  </form>
                </div>
                <ul className="footer-social">
                  <li>
                    <Link to="/">
                      <i className="fa fa-pinterest-p" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-twitter" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="fade_rule" />
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>&copy; Copyright 2021 by Themescare</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
