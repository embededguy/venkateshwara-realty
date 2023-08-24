import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import Portfolio from "../components/portfolio";
import Footer from "../components/footer";

const PortfolioPage = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"Profile"} pagesub={"Profile Details"} />
      <Portfolio />
      <Footer />
    </Fragment>
  );
};
export default PortfolioPage;
