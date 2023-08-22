import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import ProjectSingle15 from "../components/projectsingle15";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const ProjectPage = () => {
useEffect(()=>{
    window.scrollTo(0,0)    
  })
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"sudhanshu"} pagesub={"Project Details"} />
      <ProjectSingle15 />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
