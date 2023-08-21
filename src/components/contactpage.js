import React from "react";
import ContactForm from "./contactform";
// import "./style.css";
import bck from "../img/bedroom-3.jpg"
const Contactpage = () => {
  return (
    <section className="contact-page-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="contact-form" style={{backgroundImage:`url(${bck})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundAttachment:"scroll"}}>
              <div className="site-heading" data-aos="fade-up">
                <h3 className="sub-title">Get Quote</h3>
                <h2 className="section-title">Free Consultancy</h2>
              </div>
              <ContactForm />
            </div>
          </div>
          <div className="col-lg-5 col-sm-6">
            <div className="contact-page-left">
              <h3 style={{marginLeft:"70px"}}> # Contact info</h3>
              <div className="contact-info">
                <div className="single-contact-info" data-aos="fade-up">
                  <div className="contact-info-icon">
                    <span className="fa fa-map-marker" />
                  </div>
                  <div className="contact-info-text">
                    <h5>Head office</h5>
                    <p>
                    Office No:1, Saikrupa Apt., Azad Rd-2, Behind Vishal Hall, Opp. Kamgar Kalyan Kendra, Andheri (E)
                    ,  Mumbai - 400 069
                    </p>
                  </div>
                </div>
                <div className="single-contact-info" data-aos="fade-up">
                  <div className="contact-info-icon">
                    <span className="fa fa-phone" />
                  </div>
                  <div className="contact-info-text">
                    <h5>Phone</h5>
                    <p> +91 99201 02300 ,+91 91900 00018</p>
                    <p>+91 98197 87718, +91 93200 00027</p>
                  </div>
                </div>
                <div className="single-contact-info" data-aos="fade-up">
                  <div className="contact-info-icon">
                    <span className="fa fa-envelope" />
                  </div>
                  <div className="contact-info-text">
                    <h5 style={{marginLeft:"20px"}}>Email</h5>
                    <p>sales@venkateshwararealty.co.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-6">
            <div className="contact-page-right">
              <iframe
                title="map"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Office No:1, Saikrupa Apt., Azad Rd-2, Behind Vishal Hall, Opp. Kamgar Kalyan Kendra, Andheri (E), Mumbai - 400 069;&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
