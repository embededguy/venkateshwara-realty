import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import ProjectSingle from "../components/projectsingle";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";
import ServiceList from "../components/servicelist";
import ServiceSingle from "../components/servicesingle";

import Palash1 from "../img/palash-1.jpeg"
import Palash2 from "../img/palash-2.jpeg"

const CurrentProject = () => {
useEffect(()=>{
    window.scrollTo(0,0)    
  })
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"PALASH"} pagesub={"Current Project Details"} />
		  <ServiceSingle/>	
      <ServiceList/>      
      <Testimonial />
      <Footer />
    </Fragment>
  );
};
export default CurrentProject;
