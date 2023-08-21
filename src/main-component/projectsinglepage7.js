import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import ProjectSingle7 from "../components/projectsingle7";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const ProjectPage = () => {
useEffect(()=>{
    window.scrollTo(0,0)    
  })
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"Krishnatara"} pagesub={"Project Details"} />
      <ProjectSingle7 />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
