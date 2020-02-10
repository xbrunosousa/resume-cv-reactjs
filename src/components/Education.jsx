import React from 'react';

export default ({ name, date, description }) => (
  <div key={name}>
    <p className='eduTitle'>{name}</p>
    <p className='eduDate'>{date}</p>
    <p className='eduDescript'>{description}</p>
  </div>
);
