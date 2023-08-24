import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import Contactpage from "../components/contactpage";
import Footer from "../components/footer";

const ContactPage = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"CONTACT"} pagesub={"Contact"} />
      <Contactpage />
      <Footer />
    </Fragment>
  );
};
export default ContactPage;
