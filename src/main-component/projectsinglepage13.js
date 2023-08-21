import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import ProjectSingle13 from "../components/projectsingle13";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const ProjectPage = () => {
useEffect(()=>{
    window.scrollTo(0,0)    
  })
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"PROJECT DETAILS"} pagesub={"Project Details"} />
      <ProjectSingle13 />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
