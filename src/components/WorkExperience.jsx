import React from 'react';

export default ({ name, date, description }) => (
  <div>
    <p className='jobTitle'>{name}</p>
    <p className='jobDate'>{date}</p>
    <p className='jobDescript'>{description}</p>
  </div>
);
