import React from "react";
import { Link } from "react-router-dom";

import team1 from "../img/project.png";
import team2 from "../img/Architect.png";
import team3 from "../img/ceo.png";
import team4 from "../img/Director.png";

// import "./style.css";

const Team = () => {
  return (
    <section className="team-page-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="site-heading text-center wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.8s"
            >
              <h3 className="sub-title">TEAM MEMBERS</h3>
              <h2 className="section-title">Our Creative Minds</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row justify-content-center">
              <div className="col-md-4 col-sm-6">
                <div className="single-team-box">
                  <div>
                  </div>
                  <div className="team-image">
                    <div className="team-lgo">
                      <img src={team2} />
                    </div>
                    <div className="team-meta">
                      <h4>Omkar Bhat</h4>
                      <p>Architect</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-team-box">
                  <div className="team-image">
                    <div className="team-lgo">
                      <img src={team3} />
                    </div>
                    <div className="team-meta">
                      <h4>Naresh Dewan</h4>
                      <p>C.E.O</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-team-box">
                  <div className="team-image">
                    <div className="team-lgo">
                      <img src={team1} />
                    </div>
                    <div className="team-meta">
                      <h4>Prem Ramnani</h4>
                      <p>Project Head</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-team-box">
                  <div className="team-image">
                    <div className="team-lgo">
                      <img src={team4} />
                    </div>
                    <div className="team-meta">
                      <h4>Vignesh Prabhu</h4>
                      <p>Director</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-team-box">
                  <div className="team-image">
                    <div className="team-lgo">
                      <img src={team4} />
                    </div>
                    <div className="team-meta">
                      <h4>Ramesh Bafna</h4>
                      <p>Director</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-team-box">
                  <div className="team-image">
                    <div className="team-lgo">
                      <img src={team4} />
                    </div>
                    <div className="team-meta">
                      <h4>Kusum Gowda</h4>
                      <p>Director</p>
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
export default Team;
