import React from "react";
import { Link } from "react-router-dom";
import bg from "../img/breadcrumb-bg.jpg";

// import "./style.css";

const PageTitle = (props) => {
  return (
    <section
      className="breadcrumb-area"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-social">
        <ul>
          <li>
              <Link to="/" onClick={()=>{
                let a = document.createElement('a')
                a.href="https://www.facebook.com/venkateshwara.realty.group"
                a.click()
              }}>
                <i className="fa fa-facebook-f" />
              </Link>
            </li>
            <li>
              <Link to="/"  onClick={()=>{
                let a = document.createElement('a')
                a.href="https://www.instagram.com/venkateshwara.realty.group/"
                a.click()
              }}>
                <i className="fa fa-instagram" />
              </Link>
            </li>
            <li>
              <Link to="/"  onClick={()=>{
                let a = document.createElement('a')
                a.href="https://youtube.com/channel/UCZdO2sI5fX67T-KGKnrPalA"
                a.click()
              }}>
                <i className="fa fa-youtube" />
              </Link>
            </li>
        </ul>
        <p>Follow Us</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inn">
              <h1>{props.pageTitle}</h1>
              <ul>
                <li className="home">
                  <Link to="/">
                    <span className="fa fa-home" />
                  </Link>
                </li>
                <li>{props.pagesub}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
