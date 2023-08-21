import React from "react";
import { Link } from "react-router-dom";

import Img1 from "../img/project-s-13.jpg";
import Img2 from "../img/plan.png";
import Img3 from "../img/24-hours.png";
import Img4 from "../img/group.png";
import Img5 from "../img/best-price.png";
import Img6 from "../img/bedroom-5.jpg";
import Img7 from "../img/hallroom-4.jpg";
import Img8 from "../img/kitchen-10.jpg";

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
                      <p>MANKHURD</p>
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
                Sky Residency soars as a modern masterpiece in the heart of Mankhurd, one of Mumbai's emerging and vibrant neighborhoods. This iconic residential haven is thoughtfully designed to offer residents a harmonious blend of contemporary living, convenience, and an elevated quality of life.
              </p>
              <p>
                <h3> - Architectural Marvel - </h3>

                Sky Residency is an architectural marvel, seamlessly integrating modern design with a touch of visionary elegance, creating a building that stands as a beacon of style in the Mankhurd skyline:
              </p>
              <p>
                <h3> - Community and Lifestyle - </h3>

                Sky Residency is more than just a building; it's a community where residents can create cherished memories and embrace a high-quality lifestyle:
              </p>
              <p>
                <h3> - Conclusion - </h3>
                Experience the urban elegance and modern living of Sky Residency. It's not just a residence; it's a lifestyle choice where every detail is designed to provide you with comfort, community, and a vibrant urban experience in the heart of Mankhurd. Embrace the Sky Residency way of life, where every day feels like a celebration of contemporary living in a thriving neighborhood.
              </p>
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
                        Welcome to the serene sanctuary of comfort and relaxation within Sky Residency. Our bedrooms are designed to offer a perfect balance of tranquility, style, and practicality.
                      </p>
                      <Link to="/">Learn More</Link>
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
                       Discover the heart of Sky Residency – our versatile and inviting living spaces. Our halls or living rooms are designed to be the center of your daily life and special gatherings.
                      </p>
                      <Link to="/">Learn More</Link>
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
                        Experience culinary excellence in our meticulously designed kitchens. Sky Residency's kitchens are more than just functional; they're designed to inspire your culinary creativity.
                      </p>
                      <Link to="/">Learn More</Link>
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
