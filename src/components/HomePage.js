import React, { useState, useEffect } from "react";
import "./HomePage.css";
import SingleJob from "./SingleJob";
import CheckBoxItems from "./CheckBoxItems";
import JobOverlay from "./JobOverlay";

const DUMMY_JOBS = [
  {
    title: "Frontend",
    description: "View Job Description 1",
    location: "Hyderabad",
    category: "Frontend",
  },
  {
    title: "Backend",
    description: "View Job Description 2",
    location: "Hyderabad",
    category: "Backend",
   
    
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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
 
  const handleViewDescription = (job) => {
    console.log('Viewing description for job:', job);
    setSelectedJob(job);
  };

  const handleCloseOverlay = () => {
    setSelectedJob(null);
  };

  useEffect(() => {
    // Filter jobs based on selected categories and locations
    const newFilteredJobs = DUMMY_JOBS.filter((job) => {
      const categoryFilter =
        selectedCategories.length === 0 ||
        selectedCategories.includes(job.category);

      const locationFilter =
        selectedLocations.length === 0 ||
        selectedLocations.includes(job.location);

      const searchFilter =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());

      return categoryFilter && locationFilter && searchFilter;
    });

    // Update the state with the filtered jobs
    setFilteredJobs(newFilteredJobs);
  }, [selectedCategories, selectedLocations, searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };


  const handleFilter = (categories, locations) => {
    setSelectedCategories(categories);
    setSelectedLocations(locations);
  };

  return (
    <>
      <div className="home-container">
        <div className="top-section">
          <CheckBoxItems onFilter={handleFilter} />
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for jobs..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {searchTerm && (
              <div className="search-results">
                {/* <p>Results for: "{searchTerm}"</p> */}
              </div>
            )}
          </div>
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
