import React from "react";
import ServiceBg from "../img/service-bg-1.png";
import Pricing from "./pricing";
import Partners from "./partners";

// import "./style.css";

const ServiceSingle = () => {
  return (
    <div>
      <section className="service-video-box-area" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="site-heading">
                <h3 className="sub-title">ABOUT</h3>
                <h2 className="section-title">
                  PALASH
                  <br />
                </h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-video-box-text">
                <p>
                  '<span style={{color:"#d8a921"}}>PALASH</span>' , As the name suggest, It is the perfect example of positive energy and a feeling of new begining set amidst the city , it provides a serene lifestyle and esae of connectivty. at venkateshwara westin group, we are driven by our commitment to create homes that lasts. we dare to create a lasting legacy of quality homes in mumbai. we are dedicated to our mission of providing homes that are affordable, sustainable and built with love.  
                  </p>
              </div>
            </div>  
            <div className="col-lg-5">
              <div className="service-video-box">
                <img src={ServiceBg} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
};
export default ServiceSingle;
