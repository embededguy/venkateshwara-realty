import React from "react";
import { Link } from "react-router-dom";

import team1 from "../img/manjunathkgowda.png";
import team2 from "../img/rajeshwadhwa.png";
import team3 from "../img/vijaysprabhu.png";
import team4 from "../img/amit.png";

// import "./style.css";

const Team = () => {
  return (
    <section className="team-area">
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
        <div className="row-x">
          <div className="col-x">
            <div className="card-x">
            <div style={{display:"flex",flexDirection:"column",gap:"30px"}}>
              <div className="img-round" style={{background:`url(${team1})`,width:"200px",height:"200px",backgroundPosition:"center",backgroundSize:"cover",borderRadius:"50%"}}> </div>
              <h3>Group Director</h3>
            </div>
              <div className="card__content">
                <p className="card__title">Manjunath K. Gowda</p>
                <p style={{fontSize:"12px"}}>M.Com, FCA, ACA, DISA, (ICAI)</p>
                <p className="card__description">Manjunath K. Gowda, Group Director/Partner at Venkateshwara - Westin Group. Educated at KBS High School, Mumbai University (B.Com & M.Com), F.C.A from ICAI & A.C.S from ICSI. Advisory roles in real estate, leading mixed-use township development with quality, innovation, and timely delivery.</p>
              </div>
            </div>
          </div>
          <div className="col-x">
            <div className="card-x">
              <div style={{display:"flex",flexDirection:"column",gap:"30px"}}>
                <div className="img-round" style={{background:`url(${team2})`,width:"200px",height:"200px",backgroundPosition:"center",backgroundSize:"cover",borderRadius:"50%"}}> </div>
                <h3>Group Director</h3>              
              </div>
              <div className="card__content">
                <p className="card__title">Rajesh Wadhwa</p>
                <p style={{fontSize:"12px"}}>B.Com (Hons), ACA</p>
                <p className="card__description">Group Director at Venkateshwara - Westin Group, a seasoned Chartered Accountant with 20+ years in Real Estate. Versatile in construction, diligent, and client-focused. Expert in business strategy, meeting deadlines, and tax laws, providing valuable advisory services. His experience drives Venkateshwara - Westin Group towards rapid progress and future milestones.</p>
              </div>
            </div>
          </div>
          <div className="col-x">
            <div className="card-x">
              <div style={{display:"flex",flexDirection:"column",gap:"30px"}}>
                <div className="img-round" style={{backgroundRepeat:"no-repeat",background:`url(${team3})`,width:"200px",height:"200px",backgroundPosition:"center",backgroundSize:"cover",borderRadius:"50%"}}> </div>
                <h3>Chairman Emeritus</h3>
              </div>              
              <div className="card__content">
                <p className="card__title">Vijay S. Prabhu</p>
                <p style={{fontSize:"12px"}}>Chairman Emeritus</p>
                <p className="card__description">Engineer, former VP at BSES Ltd & Reliance Energy with 35+ years of national & international business development. Heads 2.5 million consumers, buys plots, builds Low Cost Housing for employees, 12+ yrs in redevelopment, completed 500k sqft residential & commercial projects.</p>
              </div>
            </div>
          </div>

          <div className="col-x">
            <div className="card-x">
              <div style={{display:"flex",flexDirection:"column",gap:"30px"}}>
                <div className="img-round" style={{backgroundRepeat:"no-repeat",background:`url(${team4})`,width:"200px",height:"200px",backgroundPosition:"center",backgroundSize:"cover",borderRadius:"50%"}}> </div>
                <h3>Consultant</h3>

              </div>
              <div className="card__content">
                <p className="card__title">Amit Prabhu</p>
                <p className="card__description">
                  MBA Strategy and Finance, Weatherhead School of
                  Management, Ohio US
                  Over 13 years of corporate experience in investment, bidding in
                  infrastructure and real estate assets as Bid manager and partner
                  in companies like HCC, Reliance Infra, Piramal Roads, IDFC PE
                  JV etc

                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center mt-5">
              <Link to="/team" className="cta-btn btn-fill">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team;
