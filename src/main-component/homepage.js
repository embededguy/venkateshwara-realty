import React, { Fragment,useEffect } from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import ServiceSection from "../components/servicesection";
import Tour from "../components/tour";
import Partners from "../components/partners";
import ProjectSection from "../components/projectsection";
import Testimonial from "../components/testimonial";
import BlogSection from "../components/blogsection";
import Footer from "../components/footer";

const HomePage = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      <ServiceSection />
      <Tour />
      <Partners />
      <ProjectSection />
      <Testimonial />
      <BlogSection />
      <Footer />
    </Fragment>
  );
};
export default HomePage;