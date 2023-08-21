import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import ProjectSingle5 from "../components/projectsingle5";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const ProjectPage = () => {
useEffect(()=>{
    window.scrollTo(0,0)    
  })
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"Jaonitavilla"} pagesub={"Project Details"} />
      <ProjectSingle5 />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
