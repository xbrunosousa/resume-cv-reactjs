import React from 'react';
import { Progress } from 'reactstrap';

export default ({ name, value }) => (
  <div>
    <p className='titleSkill'>{name}</p>
    <Progress
      color='white'
      className='progressBar'
      value={value.replace(/%/, '')}
    />
  </div>
);
