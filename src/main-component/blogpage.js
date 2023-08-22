import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import BlogList from "../components/bloglist";
import Footer from "../components/footer";

const ContactPage = () => {
  useEffect(()=>{window.scrollTo(0,0)})
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"BLOG"} pagesub={"Blog Venkateshwara Realty"} />
      <BlogList />
      <Footer />
    </Fragment>
  );
};
export default ContactPage;