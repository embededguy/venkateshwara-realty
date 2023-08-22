import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import ProjectSingle14 from "../components/projectsingle14";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const ProjectPage = () => {
useEffect(()=>{
    window.scrollTo(0,0)    
  })
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"Vitthal Darshan"} pagesub={"Project Details"} />
      <ProjectSingle14 />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
