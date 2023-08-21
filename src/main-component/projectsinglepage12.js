import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import ProjectSingle12 from "../components/projectsingle12";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const ProjectPage = () => {
useEffect(()=>{
    window.scrollTo(0,0)    
  })
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"Shraddha"} pagesub={"Project Details"} />
      <ProjectSingle12 />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
