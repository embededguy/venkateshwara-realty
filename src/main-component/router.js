import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./homepage";
import AboutPage from "./aboutpage";
import ProjectPage from "./projectpage";
import ServicePage from "./servicepage";
import ServiceSinglePage from "./servicesinglepage";
import PortfolioPage from "./portfoliopage";
import TeamPage from "./teampage";
import FaqPage from "./faqpage";
import ContactPage from "./contactpage";
import ErrorPage from "./errorpage";
import BlogPage from "./blogpage";
import BlogSinglePage from "./blogsinglepage";
import ProjectSinglePage from "./projectsinglepage";
import ProjectSinglePage2 from "./projectsinglepage2";
import ProjectSinglePage3 from "./projectsinglepage3";
import ProjectSinglePage4 from "./projectsinglepage4";
import ProjectSinglePage5 from "./projectsinglepage5";
import ProjectSinglePage6 from "./projectsinglepage6";
import ProjectSinglePage7 from "./projectsinglepage7";
import ProjectSinglePage8 from "./projectsinglepage8";
import ProjectSinglePage9 from "./projectsinglepage9";
import ProjectSinglePage10 from "./projectsinglepage10";
import ProjectSinglePage11 from "./projectsinglepage11";
import ProjectSinglePage12 from "./projectsinglepage12";
import ProjectSinglePage13 from "./projectsinglepage13";
import ProjectSinglePage14 from "./projectsinglepage14";
import ProjectSinglePage15 from "./projectsinglepage15";
import ProjectSinglePage16 from "./projectsinglepage16";
import ProjectSinglePage17 from "./projectsinglepage17";
import ProjectSinglePage18 from "./projectsinglepage18";
import ProjectSinglePage19 from "./projectsinglepage19";


import CurrentProject from "./current-project";


const AllRoute = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/home" component={Homepage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/ajanta" component={ProjectSinglePage} />
          <Route path="/ekopa" component={ProjectSinglePage2} />
          <Route path="/bluestar" component={ProjectSinglePage3} />
          <Route path="/eversmile" component={ProjectSinglePage4} />
          <Route path="/jaonitavilla" component={ProjectSinglePage5} />
          <Route path="/karmayog" component={ProjectSinglePage6} />
          <Route path="/krishnatara" component={ProjectSinglePage7} />
          <Route path="/sbi-pallavi" component={ProjectSinglePage8} />
          <Route path="/ratnadeep" component={ProjectSinglePage9} />
          <Route path="/ravikiran" component={ProjectSinglePage10} />
          <Route path="/sbi-milan" component={ProjectSinglePage11} />
          <Route path="/shraddha" component={ProjectSinglePage12} />
          <Route path="/sky-residency" component={ProjectSinglePage13} />
          <Route path="/vitthal-darshan" component={ProjectSinglePage14} />
          <Route path="/sudhanshu" component={ProjectSinglePage15} />
          <Route path="/yoga-yog" component={ProjectSinglePage16} />
          <Route path="/liberty-garden" component={ProjectSinglePage17} />
          <Route path="/mumbadevi-chs" component={ProjectSinglePage18} />
          <Route path="/samrat-chs" component={ProjectSinglePage19} />
          <Route path="/palash" component={CurrentProject} />
          <Route path="/service" component={ServicePage} />
          <Route path="/service-single" component={ServiceSinglePage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/faq" component={FaqPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/404" component={ErrorPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/blog-single" component={BlogSinglePage} />
        </Switch>
      </Router>
    </div>
  );
};

export default AllRoute;
