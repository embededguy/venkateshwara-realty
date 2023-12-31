import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import ProjectSingle16 from "../components/projectsingle16";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const ProjectPage = () => {
useEffect(()=>{
    window.scrollTo(0,0)    
  })
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"Yoga Yog"} pagesub={"Project Details"} />
      <ProjectSingle16 />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
