
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../UI/Card';
 
const SingleJob = ({ title, description, location, onViewDescription }) => {
  return (
    <Card>
      <div className="single-job">
        <div>
          <p>{title}</p>
        </div>
        <div>
          <button onClick={onViewDescription}>View Description</button>
        </div>
        <div>{location}</div>
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