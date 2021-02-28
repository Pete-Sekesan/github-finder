import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <h1> About This App </h1>
      <p> App to search Github Users </p>
      <p> Version 2.0.0 </p>
      <p> Developed by: Peter Sekesan</p>
      <p>
        Check out the GitHub Repo for this project{" "}
        <a href={"https://github.com/Pete-Sekesan/github-finder"}>Here</a>
      </p>
    </Fragment>
  );
};

export default About;
