import React from 'react';
import MenShoes from '../Json/MenShoe';

export default function Menshoejson() {
  return (
    <div className='shoes-info'>
      {MenShoes.map((menshoe) => {
        const {id, title, imageUrl, description} = menshoe;

        return (
            <div className="shoe-info">
            <p>{description}</p>
            <h4>{title}</h4>
            <h4>{id}</h4>
            <img src={imageUrl} alt="/" />
            </div>
        )
      })}
    </div>
  )
}
