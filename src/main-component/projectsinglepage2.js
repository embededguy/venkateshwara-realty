import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import ProjectSingle2 from "../components/projectsingle2";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const ProjectPage = () => {
  useEffect(()=>{
    window.scrollTo(0,0)    
  })
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"EKOPA"} pagesub={"Project Details"} />
      <ProjectSingle2 />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
