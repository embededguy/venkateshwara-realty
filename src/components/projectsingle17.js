import React from "react";
import { Link } from "react-router-dom";

import Img1 from "../img/project-17.webp";
import Img2 from "../img/plan.png";
import Img3 from "../img/24-hours.png";
import Img4 from "../img/group.png";
import Img5 from "../img/best-price.png";
import Img6 from "../img/bedroom-2.jpg";
import Img7 from "../img/hallroom-2.png";
import Img8 from "../img/kitchen-11.jpg";

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
                Liberty Garden Cooperative Housing Society (CHS) Ltd offers a harmonious blend of modern living and community camaraderie in the heart of Malad. This exclusive residential haven is meticulously designed to provide residents with comfort, convenience, and a strong sense of belonging in one of Mumbai's most vibrant neighborhoods.              </p>
              <p>
                <h3> - Architectural Marvel - </h3>

                Liberty Garden CHS Ltd boasts architectural brilliance that seamlessly fuses contemporary aesthetics with functionality. The building's striking facade marries sleek lines and tasteful design elements, making it a visual delight that stands out in the Malad landscape.</p>
              <p>
                <h3> - Community and Lifestyle - </h3>

                Liberty Garden CHS Ltd embodies a strong sense of community and encourages an active lifestyle. Regular community events, cultural activities, and workshops foster a close-knit community, enabling residents to forge lasting bonds.</p>
              <p>
                <h3> - Conclusion - </h3>
                Liberty Garden Cooperative Housing Society (CHS) Ltd is not just a residence; it's a lifestyle that seamlessly integrates comfort, community, and convenience. Experience the vibrant pulse of Malad while enjoying the privilege of residing in a building designed to elevate your everyday living experience. Liberty Garden CHS Ltd is your gateway to a rewarding residential journey that embraces modernity and community spirit in one of Mumbai's most sought-after neighborhoods.              </p>
            </div>
            <div className="project-overview">
              <div className="row">
                <div className="col-lg-3 col-6">
                  <div className="project-overview-box">
                    <img src={Img2} alt="img" />
                    <h5>Project size</h5>
                    <p>52000 sq ft</p>
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
                    <p>210</p>
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
                      Welcome to the comfort and tranquility of Liberty Garden CHS Ltd's bedrooms. Designed with your well-being in mind, our bedrooms offer a perfect blend of relaxation and style.                      </p>
                      
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
                      Discover the heart of Liberty Garden CHS Ltd – our versatile and inviting living spaces. Our halls or living rooms are designed to be the focal point of your daily life and cherished gatherings.                      </p>
                      
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
                      Experience culinary excellence in our meticulously designed kitchens at Liberty Garden CHS Ltd. Our kitchens are more than functional spaces; they inspire culinary creativity and comfort.                      </p>
                      
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
