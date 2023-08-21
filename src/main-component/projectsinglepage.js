import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import ProjectSingle from "../components/projectsingle";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const ProjectPage = () => {
  useEffect(()=>{
    window.scrollTo(0,0)    
  })
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"AJANTA"} pagesub={"Project Details"} />
      <ProjectSingle />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
