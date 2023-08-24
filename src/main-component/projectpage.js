import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import ProjectList from "../components/projectlist";
import Footer from "../components/footer";

const ProjectPage = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"PROJECTS"} pagesub={"Projects"} />
      <ProjectList />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
