import React from 'react';
import '../styles/HomeComponent.css'

import { useParams } from 'react-router-dom';


const StatComponent = ({ lists }) => {
  const params = useParams()
  const card = lists.find(i => i.id == params.id)
  return (
    <div className='lists'>
      <div className="list">
          <p>numeber: {card.name}</p>
          <p>id: {card.id}</p>
      </div>
    </div>
  );
};

export default StatComponent;