import React from "react";
import Card from "../UI/Card";

import "./HomePage.css";
import SingleJob from "./SingleJob";
import NavBar from "../UI/NavBar";
import CheckBoxItems from "./CheckBoxItems";

const DUMMY_JOBS = [
  {
    title: "Frontend Developer",
    description: "View Job Description 1",
    location : 'Hyderabad'
  },
  {
    title: "Title 2",
    description: "View Job Description 2",
    location : 'Hyderabad'
  },
  {
    title: "Title 3",
    description: "View Job Description 3",
    location : 'Chennai'
  },
  {
    title: "Title 4",
    description: "View Job Description 4",
    location : 'Bangalore'
  },
  {
    title: "Title 5",
    description: "View Job Description 5",
    location : 'Kolkata'
  },
  {
    title: "Title 6",
    description: "View Job Description 6",
    location : 'Kolkata'
  },
];
const HomePage = () => {
  return (
    <>
      <div className="job_container">
        {/* <SingleJob title={DUMMY_JOBS.title}/> */}
       <CheckBoxItems/>
        <div className="jobs"> {DUMMY_JOBS.map((job,index) => (
          <SingleJob key={index} title={job.title} description={job.description} />
        ))}</div>
        
      </div>
    </>
  );
};

export default HomePage;
