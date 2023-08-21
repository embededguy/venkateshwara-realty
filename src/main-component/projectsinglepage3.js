import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import ProjectSingle3 from "../components/projectsingle3";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const ProjectPage = () => {
useEffect(()=>{
    window.scrollTo(0,0)    
  })
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"BLUESTAR"} pagesub={"Project Details"} />
      <ProjectSingle3 />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
