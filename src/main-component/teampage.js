import React, { Fragment } from "react";
import Header from "../components/header";
import PageTitle from "../components/pagetitle";
import TeamList from "../components/teamlist";
import Footer from "../components/footer";

const TeamPage = () => {
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"TEAM"} pagesub={"Contact Team"} />
      <TeamList />
      <Footer />
    </Fragment>
  );
};
export default TeamPage;
