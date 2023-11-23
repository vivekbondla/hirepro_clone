import React from "react";

import Card from "../UI/Card";

const SingleJob = ({title,description}) => {
  return (
   
    <Card >
      <div className="single-job">
       <div> <p>{title}</p></div>
        <div>
          <p>{description}</p>
        </div>
        <div>
          <button>Apply</button>
        </div>
      </div>
    </Card>
  );
};

export default SingleJob;
