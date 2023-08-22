import React from "react";
import { Link } from "react-router-dom";

import Img1 from "../img/project-19.jpg";
import Img2 from "../img/plan.png";
import Img3 from "../img/24-hours.png";
import Img4 from "../img/group.png";
import Img5 from "../img/best-price.png";
import Img6 from "../img/bedroom-8.jpg";
import Img7 from "../img/hallroom-5.jpg";
import Img8 from "../img/kitchen-13.jpg";

// import "./style.css";

const ProjectSingle13 = () => {
  return (
    <section className="project-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-details-top">
              <div className="project-details-top-img">
                <img src={Img1} alt="img" />
              </div>
              <div className="project-details-top-box">
                <h3>Project Details</h3>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="project-details-top-box-text">
                      <h5>Project</h5>
                      <p>Interior</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-details-top-box-text">
                      <h5>Location</h5>
                      <p>Malad</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-details-top-box-text">
                      <h5>Year</h5>
                      <p>2020</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-details-top-box-text">
                      <h5>Type</h5>
                      <p>Residential</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-details-top-text">
              <h2>Best Interior Ideas</h2>
              <p>
                Samrat Cooperative Housing Society (CHS) Ltd offers a harmonious blend of modern living and community spirit in the heart of Malad. This exclusive residential haven is designed to provide residents with comfort, convenience, and a sense of belonging in one of Mumbai's most dynamic neighborhoods.              </p>
              <p>
                <h3> - Architectural Marvel - </h3>
                Samrat CHS Ltd boasts architectural charm that seamlessly marries contemporary aesthetics with timeless elegance. The building's elegant facade captures attention, combining sleek lines and tasteful design elements, making it a standout in the Malad skyline.</p>
              <p>
                <h3> - Community and Lifestyle - </h3>
                Samrat CHS Ltd embodies a strong community spirit and fosters a vibrant lifestyle. Regular social gatherings, cultural activities, and workshops create a close-knit community, allowing residents to forge lasting connections.</p>
              <p>
                <h3> - Conclusion - </h3>
                Samrat Cooperative Housing Society (CHS) Ltd offers more than just a home; it's a way of life where comfort, community, and convenience come together. Experience the vibrant charm of Malad in a building that's designed to elevate your everyday living. Samrat CHS Ltd is your gateway to a fulfilling residential experience that embraces modernity and community spirit in one of Mumbai's most sought-after locales.              </p>
            </div>
            <div className="project-overview">
              <div className="row">
                <div className="col-lg-3 col-6">
                  <div className="project-overview-box">
                    <img src={Img2} alt="img" />
                    <h5>Project size</h5>
                    <p>48000 sq ft</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="project-overview-box">
                    <img src={Img3} alt="img" />
                    <h5>Project time</h5>
                    <p>4 Years</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="project-overview-box">
                    <img src={Img4} alt="img" />
                    <h5>People worked</h5>
                    <p>230</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="project-overview-box">
                    <img src={Img5} alt="img" />
                    <h5>Project cost</h5>
                    <p>₹ 195cr</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-details-type">
              <div className="row">
                <div className="col-md-4">
                  <div className="details-box">
                    <div className="project-box project-details-box">
                      <img src={Img6} alt="img" />
                      <p>BEDROOM</p>
                    </div>
                    <div className="project-details-box-meta-text">
                      <p>
                      Welcome to the comfort and tranquility of Samrat CHS Ltd's bedrooms. Designed with care, our bedrooms offer a perfect balance of relaxation and style.                      </p>
                      
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="details-box">
                    <div className="project-box project-details-box">
                      <img src={Img7} alt="img" />
                      <p>HALLROOM</p>
                    </div>
                    <div className="project-details-box-meta-text">
                      <p>
                      Discover the heart of Samrat CHS Ltd – our versatile and inviting living spaces. Our halls or living rooms are designed to be the center of your daily life and cherished gatherings.                      </p>
                      
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="details-box">
                    <div className="project-box project-details-box">
                      <img src={Img8} alt="img" />
                      <p>KITCHEN</p>
                    </div>
                    <div className="project-details-box-meta-text">
                      <p>
                        Experience culinary excellence in our meticulously designed kitchens at Samrat CHS Ltd. Our kitchens go beyond functionality to inspire your culinary creativity.                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectSingle13;
