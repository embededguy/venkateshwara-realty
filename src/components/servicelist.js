import React from "react";
import { Link } from "react-router-dom";

import serviceImg1 from "../img/service-bg-1.png";
import serviceImg2 from "../img/service-bg-2.jpg";
import serviceImg3 from "../img/service-bg-3.jpg";
import serviceImg4 from "../img/bg-3.jpg";
import serviceImg5 from "../img/bg-4.jpg";
import serviceImg6 from "../img/bg-5.jpg";


import serviceIcon1 from "../img/service-icon-1.png";
import serviceIcon2 from "../img/amenities.png"; 
import serviceicon3 from "../img/commute.png"
import serviceIcon3 from "../img/service-icon-3.png";
import serviceIcon4 from "../img/needs.png";
import serviceIcon5 from "../img/leaf.png";
import serviceIcon6 from "../img/service-icon-6.png";


// import "./style.css";

const ServiceList = () => {
  return (
    <section className="service-area service-page-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-icon">
                <img src={serviceIcon1} alt="img" style={{height:"128px",width:"128px"}}/>
              </div>
              <div className="service-text">
                <h3>Premium 1 & 2 BHK</h3>
                <p>
Discover Comfort and Elegance with Our 1 & 2 BHK Homes! 🏠✨
which are thoughtfully designed for You and your family.
                </p>
      
              </div>
              <img src={serviceImg1} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="service-icon">
                <img src={serviceIcon2} alt="img" />
              </div>
              <div className="service-text">
                <h3>Modern Amenities</h3>
                <p>
Elevate Your Living with Modern Amenities! 🌟🏙️
Experience a lifestyle of convenience and luxury with our modern amenities. 
                </p>
                
              </div>
              <img src={serviceImg2} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="service-icon">
                <img src={serviceicon3} alt="img" />
              </div>
              <div className="service-text">
                <h3>Easy Connectivity</h3>
                <p>
Seamless Connectivity, Boundless Opportunities! with our Road Connectivity 🚇🛣️
At Venkateshwara Realty.
                </p>
                
              </div>
              <img src={serviceImg3} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-icon">
                <img src={serviceIcon4}  style={{width:"100px",height:"100px"}} alt="img" />
              </div>
              <div className="service-text">
                <h3>Lifestyle & Health</h3>
                <p>
Embrace a Lifestyle of Wellness at Venkateshwara Realty! 🌿🏋
Your well-being is our priority. Our residences are thoughtfully designed.</p>
                
              </div>
              <img src={serviceImg5} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="service-icon">
                <img src={serviceIcon5}  style={{width:"100px",height:"100px"}} alt="img" />
              </div>
              <div className="service-text">
                <h3>Green Spaces</h3>
                <p>
                Where Green Spaces Nurture Your Soul – Welcome to Venkateshwara Realty! 🌳🌼Escape the urban hustle and step into the world of peace and tranquility                 </p>
                
              </div>
              <img src={serviceImg6} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="service-icon">
                <img src={serviceIcon3} style={{width:"100px",height:"100px"}} alt="img" />
              </div>
              <div className="service-text">
                <h3>Art Selections</h3>
                <p>
                  Elevate Your Home with Artful Living at Venkateshwara Realty! 🎨✨
                  Experience the fusion of aesthetics and architecture with carefully curated art selections. 
                </p>
              </div>
              <img src={serviceImg4} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceList;
