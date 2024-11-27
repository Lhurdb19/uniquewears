import React from 'react';
import Clothes from '../Json/MenClothes';

export default function Menclothesjson() {
  
  return (
    <div className="clothes-info">
      {Clothes.map((cloth) => {
        const { id, title, ImageUrl, description } = cloth;

        return (
          <div className="clothe-info">
            <p>{description}</p>
            <h4>{title}</h4>
            <h4>{id}</h4>
            <img src={ImageUrl} alt="/" />
          </div>
        );
      })}
    </div>
  );
  
}

