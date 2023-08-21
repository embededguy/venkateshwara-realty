import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import ProjectSingle6 from "../components/projectsingle6";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const ProjectPage = () => {
useEffect(()=>{
    window.scrollTo(0,0)    
  })
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"Karmayog"} pagesub={"Project Details"} />
      <ProjectSingle6 />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
