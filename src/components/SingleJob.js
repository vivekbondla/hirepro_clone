import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../UI/Card';
import './SingleJob.css';

const SingleJob = ({ title, description, location, onViewDescription }) => {
  return (
    <Card>
      <div className="single-job">
        <div>
          <p><b>Role: </b> {title}</p>
        </div>
        <div>
          <p className="view-description" onClick={onViewDescription}><u><b>View Description</b></u></p>
        </div>  
        <div><b>Location: </b>{location}</div>
        <div>
          <Link to="/registration-form">
            <button>Apply</button>
          </Link>
        </div>
      </div>
    </Card>
  );
};
 
export default SingleJob;