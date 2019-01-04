import React from 'react';

function WorkExperience(props) {
  return (
    <div>
      <p className="jobTitle">{props.name}</p>
      <p className="jobDate">{props.date}</p>
      <p className="jobDescript">{props.description}</p>
    </div>
  );
}

export default WorkExperience;
