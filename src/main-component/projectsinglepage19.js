import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import ProjectSingle19 from "../components/projectsingle19";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const ProjectPage = () => {
useEffect(()=>{
    window.scrollTo(0,0)    
  })
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"Samrat CHS Ltd"} pagesub={"Project Details"} />
      <ProjectSingle19 />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
