import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testimonial1 from "../img/user.png";
import testimonial2 from "../img/user.png";
import testimonial3 from "../img/user.png";
import icon from "../img/gridicons_quote.svg";

// import "./style.css";

class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      dots: true,
      arrows: false,
      speed: 1200,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: false,
      responsive: [
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <section className="testimonial-area" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="site-heading">
                <h3 className="sub-title">OUR TESTIMONIALS</h3>
                <h2 className="section-title">What They ‘re Saying</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tetimonial-slider">
                <Slider ref={(c) => (this.slider = c)} {...settings}>
                  <div className="slide">
                    <div className="single-testimonial">
                      <div className="testimonial-text">
                        <img src={icon} alt="icon" />
                        <p>
                          Venkateshwara Realty made finding our dream home a breeze. Professional, efficient, and they truly understand what you're looking for. Highly recommended!                        </p>
                      </div>
                      <div className="testimonial-meta">
                        <img src={testimonial1} alt="img" />
                        <div className="testimonial-author">
                          <h4>Nripendra kumar</h4>
                          <p>Customer</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="slide">
                    <div className="single-testimonial">
                      <div className="testimonial-text">
                        <img src={icon} alt="icon" />
                        <p>
                          Venkateshwara Realty simplified my property investment. Their expertise and personalized service set them apart. Trustworthy partners in real estate.                        </p>
                      </div>
                      <div className="testimonial-meta">
                        <img src={testimonial2} alt="img" />
                        <div className="testimonial-author">
                          <h4>Akash Bhoir</h4>
                          <p>Restaurant Owner</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="slide">
                    <div className="single-testimonial">
                      <div className="testimonial-text">
                        <img src={icon} alt="icon" />
                        <p>
                          As a first-time buyer, Venkateshwara Realty guided me through the process seamlessly. Their commitment to client is impressive. Great experience!  </p>
                      </div>
                      <div className="testimonial-meta">
                        <img src={testimonial2} alt="img" />
                        <div className="testimonial-author">
                          <h4>Vikram Sharma</h4>
                          <p>Armada Owner</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="slide">
                    <div className="single-testimonial">
                      <div className="testimonial-text">
                        <img src={icon} alt="icon" />
                        <p>
                          Couldn't be happier with my property purchase through Venkateshwara Realty. They go the extra mile, ensuring you get the best deal. Top-notch service!                        </p>
                      </div>
                      <div className="testimonial-meta">
                        <img src={testimonial3} alt="img" />
                        <div className="testimonial-author">
                          <h4>Swapnil Kanekar</h4>
                          <p>Bisi Plaza Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonial;
