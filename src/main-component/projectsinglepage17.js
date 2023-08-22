import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import ProjectSingle17 from "../components/projectsingle17";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const ProjectPage = () => {
useEffect(()=>{
    window.scrollTo(0,0)    
  })
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"Liberty Garden"} pagesub={"Project Details"} />
      <ProjectSingle17 />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
