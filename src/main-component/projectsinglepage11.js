import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import ProjectSingle11 from "../components/projectsingle11";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const ProjectPage = () => {
useEffect(()=>{
    window.scrollTo(0,0)    
  })
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"SBIMILAN"} pagesub={"Project Details"} />
      <ProjectSingle11 />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
