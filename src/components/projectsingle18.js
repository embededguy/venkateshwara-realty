import React from "react";
import { Link } from "react-router-dom";

import Img1 from "../img/project-s-8.jpg";
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
                      <p>Girgaum</p>
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
                Mumbadevi Cooperative Housing Society (CHS) Ltd presents a unique blend of modern living and cultural charm in the heart of Girgaum. This exceptional residential masterpiece is meticulously crafted to offer residents a harmonious lifestyle that celebrates Mumbai's vibrant heritage.              </p>
              <p>
                <h3> - Architectural Marvel - </h3>

                Mumbadevi CHS Ltd stands as an architectural marvel, seamlessly fusing contemporary design with echoes of Mumbai's rich history. The building's exterior is a tribute to Mumbai's historic architecture, featuring ornate details and modern elements that pay homage to the city's past.</p>
              <p>
                <h3> - Community and Lifestyle - </h3>
                The building's foyer welcomes residents and guests with a warm ambiance, fostering a sense of togetherness and community spirit. Carefully landscaped heritage courtyards serve as gathering spaces where residents can unwind, socialize, and embrace the rich heritage of Mumbai.</p>
              <p>
                <h3> - Conclusion - </h3>
                Mumbadevi Cooperative Housing Society (CHS) Ltd is more than just a residential abode; it's an ode to both contemporary living and Mumbai's diverse cultural legacy. Embrace Girgaum's spirit while enjoying the privilege of residing in a building that seamlessly merges tradition with modernity. Mumbadevi CHS Ltd offers a lifestyle that encapsulates the allure of history and the comfort of modern living, providing a distinctive and enriching residential experience in one of Mumbai's most cherished neighborhoods.              </p>
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
                        Step into the serenity of Mumbadevi CHS Ltd's bedrooms. Our bedrooms are meticulously crafted to provide a perfect blend of comfort, elegance, and modern living.                      </p>
                      
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
                        Discover the heart of Mumbadevi CHS Ltd – our versatile and inviting living spaces. Our halls or living rooms are designed to be the center of your daily life and cherished gatherings.

                      </p>
                      
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
                        Experience culinary excellence in our meticulously designed kitchens at Mumbadevi CHS Ltd. Our kitchens are designed to inspire culinary creativity while embracing modern convenience.                      </p>
                      
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
