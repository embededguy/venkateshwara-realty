import React from "react";
import { Link } from "react-router-dom";

import Img1 from "../img/project-s-1.webp";
import Img2 from "../img/plan.png";
import Img3 from "../img/24-hours.png";
import Img4 from "../img/group.png";
import Img5 from "../img/best-price.png";
import Img6 from "../img/bedroom.jpg";
import Img7 from "../img/hallroom.jpg";
import Img8 from "../img/kitchen.jpg";

// import "./style.css";

const ProjectSingle = () => {
  return (
    <section className="project-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12" >
            <div className="project-details-top">
              <div className="project-details-top-img" >
                <img src={Img1} alt="img" />
              </div>
              <div className="project-details-top-box" style={{padding:"10px 5px"}}>
                <h3>Project Details</h3>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="project-details-top-box-text">
                      <h5>Project</h5>
                      <p>Structure</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-details-top-box-text">
                      <h5>Location</h5>
                      <p>ANDHERI</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-details-top-box-text">
                      <h5>Year</h5>
                      <p>2010</p>
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
                <h3>Description - </h3> <br/>
                Ajanta Residency is a striking residential building nestled in the heart of the vibrant Andheri neighborhood in Mumbai. This iconic structure boasts a modern yet elegant architectural design that seamlessly blends with the bustling urban landscape of the city.
              </p>
              <p>
                <h3>Exterior Features - </h3> <br/>
                  The façade of Ajanta Residency is a harmonious fusion of contemporary materials and traditional aesthetics. The building showcases a captivating blend of glass, steel, and textured concrete, creating a visually stunning exterior. A grand entrance framed by meticulously landscaped gardens welcomes residents and visitors alike.
              </p>
              <p>
                <h3>Community and Lifestyle:</h3> <br/>
                Ajanta Residency fosters a vibrant and inclusive community. Regular social events, workshops, and cultural programs are organized to promote interaction among residents. The building features beautifully landscaped communal spaces where residents can gather for relaxation or engage in outdoor activities.
              </p>
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
                    <p>3 Years</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="project-overview-box">
                    <img src={Img4} alt="img" />
                    <h5>People worked</h5>
                    <p>250</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="project-overview-box">
                    <img src={Img5} alt="img" />
                    <h5>Project cost</h5>
                    <p>₹ 150 cr</p>
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
                        Welcome to the elegant and tranquil bedrooms of our prestigious building! Each bedroom is designed to be your personal sanctuary, a place of comfort and relaxation.
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
                        Step into the heart of your new home, Our spacious and thoughtfully designed living areas provide space for relaxation and creating cherished memories.
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
                        A culinary haven awaits you in our well-appointed kitchens. Whether you're a gourmet chef or enjoy simple home-cooked meals, our kitchens provide the perfect setting.
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
export default ProjectSingle;
