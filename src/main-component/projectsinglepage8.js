import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import ProjectSingle8 from "../components/projectsingle8";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const ProjectPage = () => {
useEffect(()=>{
    window.scrollTo(0,0)    
  })
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"SBI Pallavi"} pagesub={"Project Details"} />
      <ProjectSingle8 />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
