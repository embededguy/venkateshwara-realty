import React from "react";
import { Link } from "react-router-dom";

// import "./style.css";

const Footer = () => {
  const NewsletterHandler = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 order-lg-1 order-1">
              <div className="single-footer">
                <h3>About</h3>
                <p>
                Venkateshwara Realty has successfully collaberated with Westin Developers, a pioneer in real estate industry with over 18+ successfully completed projects under its belt. 
                
                </p>
                <ul className="footer-contact">
                  <li style={{color:"#777"}}>
                    <i className="fa fa-phone"/> +91 99201 02300 ,+91 91900 00018<br/>+91 98197 87718, +91 93200 00027
                  </li>
                  <li style={{color:"#777"}}>
                    <i className="fa fa-envelope"  /> sales@venkateshwararealty.co.in
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-lg-2 order-3">
              <div className="single-footer" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                <h3>Quick Links</h3>
                <ul style={{margin:"0",padding:"0"}}>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/projects">Our Projects</Link>
                  </li>
                  <li>
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/team">Meet The Team</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-4 col-sm-6 order-lg-4 order-2">
              <div className="single-footer">
                <h3>Newsletter</h3>
                <p>Sign up now for weekly news & updates.</p>
                <div className="newsletter_form">
                  <form onSubmit={NewsletterHandler}>
                    <input type="email" id="email-x" placeholder="Email Address" />
                    <button type="submit" onClick={function(){
                      var request = new XMLHttpRequest();
                      var email = document.getElementById("email-x").value.trim();
                      request.onreadystatechange=function() {
                        if (request.readyState == 4 && request.status == 200) {
                            document.getElementById("email-x").value=""
                        }
                      }
                      request.open("POST","newsletter.php",true);
                      request.setRequestHeader("Content-type","application/json");
                      request.send(JSON.stringify({email:email}));
                    }}>
                      <i className="fa fa-envelope" />
                    </button>
                  </form>
                </div>
                <ul className="footer-social">
                 
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
                    <Link to="/" onClick={()=>{
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
                <li>
                  <i className="fa fa-map" style={{color:"#d8a921",paddingRight:"10px"}}/>Office No:1, Saikrupa Apt., Azad Rd-2, Behind Vishal Hall, Opp. Kamgar Kalyan Kendra, Andheri (E), Mumbai - 400 069;
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="fade_rule" />
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>&copy; Copyright {new Date().getFullYear()} All rights reserved | Developed & Managed by <a href="https://jinshaashaninfo.com" style={{textDecoration:"none",color:"#d8a921"}}>Jinshaashan Info LLP</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
