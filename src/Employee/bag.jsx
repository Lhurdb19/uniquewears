import React from 'react';
import Bags from '../Json/Bag';

function Bag() {
  return (
    <div className='bags-info'>
      {Bags.map((bag) => {
        const {id, title, imageUrl, Description} = bag;

        return (
            <div className="bag-info">
            <p>{Description}</p>
            <h4>{title}</h4>
            <h4>{id}</h4>
            <img src={imageUrl} alt="/" />
          </div>
        )
      })}
    </div>
  )
}

export default Bag;
