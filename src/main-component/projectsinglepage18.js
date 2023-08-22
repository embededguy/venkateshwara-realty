import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import ProjectSingle18 from "../components/projectsingle18";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const ProjectPage = () => {
useEffect(()=>{
    window.scrollTo(0,0)    
  })
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"Mumbadevi chs ltd"} pagesub={"Project Details"} />
      <ProjectSingle18 />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
