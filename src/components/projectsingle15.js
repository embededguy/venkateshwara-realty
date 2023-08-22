import React from "react";
import { Link } from "react-router-dom";

import Img1 from "../img/project-15.jpg";
import Img2 from "../img/plan.png";
import Img3 from "../img/24-hours.png";
import Img4 from "../img/group.png";
import Img5 from "../img/best-price.png";
import Img6 from "../img/bedroom-12.jpg";
import Img7 from "../img/hallroom-6.jpg";
import Img8 from "../img/kitchen-12.jpg";

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
                      <p>Vile Parle</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-details-top-box-text">
                      <h5>Year</h5>
                      <p>2021</p>
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
                Sudhanshu Towers stands as an epitome of modern living in the heart of Vile Parle, one of Mumbai's most sought-after and culturally rich neighborhoods. This exclusive residential haven is thoughtfully designed to offer residents a harmonious blend of comfort, luxury, and convenience, setting new standards for upscale urban living.              </p>
              <p>
                <h3> - Architectural Marvel - </h3>

                Sudhanshu Towers is a showcase of architectural elegance, seamlessly fusing contemporary design with a touch of sophistication.              </p>
              <p>
                <h3> - Convenience and Connectivity - </h3>
                Sudhanshu Towers is strategically situated to offer the perfect blend of urban convenience and serene living. Nestled in Vile Parle, a well-established and well-connected neighborhood, the building provides easy access to major transportation hubs, commercial centers, shopping districts, and cultural attractions.              </p>
              <p>
                <h3> - Conclusion - </h3>
                Experience the pinnacle of luxury living at Sudhanshu Towers. It's not just a residence; it's a lifestyle choice where every detail is meticulously crafted to provide you with comfort, sophistication, and a vibrant community spirit in the heart of Vile Parle. Embrace the Sudhanshu way of life, where every day feels like a celebration of contemporary living in one of Mumbai's most beloved neighborhoods.              </p>
            </div>
            <div className="project-overview">
              <div className="row">
                <div className="col-lg-3 col-6">
                  <div className="project-overview-box">
                    <img src={Img2} alt="img" />
                    <h5>Project size</h5>
                    <p>45000 sq ft</p>
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
                    <p>₹ 255cr</p>
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
                        Step into the world of tranquility and luxury within Sudhanshu Towers. Our bedrooms are meticulously designed to offer the perfect blend of comfort, style, and practicality.                      </p>
                      
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
                        Discover the heart of Sudhanshu Towers – our versatile and inviting living spaces. Our halls or living rooms are designed to be the hub of daily life and special gatherings.                      </p>
                      
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
                        Experience culinary excellence in our meticulously designed Sudhanshu Towers kitchens. Our kitchens are more than just functional; they inspire your culinary creativity.                      </p>
                      
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
