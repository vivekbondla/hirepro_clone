import React, { useState, useEffect } from "react";
import "./HomePage.css";
import SingleJob from "./SingleJob";
import CheckBoxItems from "./CheckBoxItems";
import JobOverlay from "./JobOverlay";
import NavBar from "../UI/NavBar";
 
const DUMMY_JOBS = [
  {
    title: "Frontend",
    description: "View Job Description 1",
    location: "Hyderabad",
    category: "Frontend",
  },
  {
    title: "Fullstack",
    description: "View Job Description 2",
    location: "Hyderabad",
    category: "Fullstack",
   
   
  },
  {
    title: "FullStack",
    description: "View Job Description 3",
    location: "Chennai",
    category: "Fullstack",
   
  },
  {
    title: "Java",
    description: "View Job Description 4",
    location: "Bangalore",
    category: "Java",
   
  },
  {
    title: "Devops",
    description: "View Job Description 5",
    location: "Kolkata",
    category: "Devops",
   
  },
  {
    title: "Cloud",
    description: "View Job Description 6",
    location: "Kolkata",
    category: "Cloud",
   
  },
];
 
const HomePage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
 
  const handleViewDescription = (job) => {
    console.log("Viewing description for job:", job);
    setSelectedJob(job);
  };
 
  const handleCloseOverlay = () => {
    setSelectedJob(null);
  };
 
  useEffect(() => {
    // Filter jobs based on selected categories, locations, and search term
    const newFilteredJobs = DUMMY_JOBS.filter((job) => {
      const categoryFilter =
        selectedCategories.length === 0 ||
        selectedCategories.includes(job.category);
 
      const locationFilter =
        selectedLocations.length === 0 ||
        selectedLocations.includes(job.location);
 
      const searchFilter =
        searchTerm === "" ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase());
 
      return categoryFilter && locationFilter && searchFilter;
    });
 
    // Update the state with the filtered jobs
    setFilteredJobs(newFilteredJobs);
  }, [selectedCategories, selectedLocations, searchTerm]);
 
  const handleFilter = (categories, locations) => {
    setSelectedCategories(categories);
    setSelectedLocations(locations);
  };
 
  const handleSearch = (term) => {
    setSearchTerm(term);
  };
 
  return (
    <>
      <NavBar onSearch={handleSearch} />
      <div className="home-container">
        <div className="top-section">
          <CheckBoxItems onFilter={handleFilter} />
        </div>
        <div className="jobs">
          {filteredJobs.map((job, index) => (
            <SingleJob
              key={index}
              title={job.title}
              description={job.category}
              location={job.location}
              onViewDescription={() => handleViewDescription(job)}
            />
          ))}
        </div>
      </div>
      {selectedJob && (
        <JobOverlay role={selectedJob.category} onClose={handleCloseOverlay} />
      )}
    </>
  );
};
 
export default HomePage;