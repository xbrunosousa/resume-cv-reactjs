import React from 'react';
import { Progress } from 'reactstrap';

function Skills(props) {
  return (
    <div key={props.index}>
      <p className="titleSkill">{props.name}</p>
      <Progress
        color="white"
        className="progressBar"
        value={props.value.replace(/%/, '')}
      />
    </div>
  );
}

export default Skills;
