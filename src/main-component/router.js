import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./homepage";
import AboutPage from "./aboutpage";
import ProjectPage from "./projectpage";
import ProjectSinglePage from "./projectsinglepage";
import ServicePage from "./servicepage";
import ServiceSinglePage from "./servicesinglepage";
import PortfolioPage from "./portfoliopage";
import TeamPage from "./teampage";
import FaqPage from "./faqpage";
import ContactPage from "./contactpage";
import ErrorPage from "./errorpage";
import BlogPage from "./blogpage";
import BlogSinglePage from "./blogsinglepage";

const AllRoute = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/home" component={Homepage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/projects-single" component={ProjectSinglePage} />
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
