import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import ProjectSingle10 from "../components/projectsingle10";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const ProjectPage = () => {
useEffect(()=>{
    window.scrollTo(0,0)    
  })
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"ravikiran"} pagesub={"Project Details"} />
      <ProjectSingle10 />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
