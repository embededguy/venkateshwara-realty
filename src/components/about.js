import React from "react";
import CountUp from "react-countup";

import bg from "../img/about-bg.png";
import img2 from "../img/Palash.png";
import img1 from "../img/about-0.png";
import signature from "../img/signature.png";
import { Link } from "react-router-dom";

// import "./style.css";

const About = () => {
  return (
    <section className="about-area" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="about-left" data-aos="fade-right">
              <div className="site-heading">
                <h3 className="sub-title">OUR CURRENT PROJECT</h3>
                <h2 className="section-title">
                  PALASH <br/> Home Of Happiness
                </h2>
              </div>
              <p>
                Palash is a stunning example of modernist architecture with clean lines, large glass windows, and a sleek facade. It's designed to blend seamlessly with the surrounding urban landscape while also standing out as a symbol of elegance.
              </p>
              <p>
                The building has been designed with a strong focus on sustainability. It incorporates solar panels on the rooftop to harness renewable energy, rainwater harvesting systems, and energy-efficient lighting throughout the common areas. There's also a green rooftop garden that provides a relaxing space for residents to unwind.
              </p>
              <div className="about-signature">
                <div className="signature-left">
                  <img src={signature} alt="signature" style={{width:"200px"}}/>
                </div>
                <div className="signature-right">
                  <h3>Manjunath Gowda</h3>
                  <p>Group Director</p>
                </div>
              </div>
              <div className="text-center mt-5 d-lg-block d-none">
              <Link to="/palash" className="cta-btn btn-fill">
                View Details
              </Link>
            </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-6" style={{marginTop:"50px"}}>
            <div className="about-counter">
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={15} duration={5} />
                  </span>
                  +
                </h2>
                <p>
                  Years of <br/>
                  experience
                </p>
              </div>
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={20} duration={8} />
                  </span>
                  +
                </h2>
                <p>
                  Projects <br />
                  Completed
                </p>
              </div>
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={18} duration={5} />
                  </span>
                  +
                </h2>
                <p>
                  Awards <br />
                  Winning
                </p>
              </div>
            </div>
            <div className="about-right" data-aos="fade-left">
              <img className="about_img_1" src={img2} alt="img" />
              <img className="about_img_2" src={img1} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
