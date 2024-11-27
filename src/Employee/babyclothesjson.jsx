import React from 'react';
import Babies from '../Json/BabyClothes';

export default function Babyclothesjson() {
  return (
    <div className='babies-info'>
      {Babies.map((baby) => {
        const {id, title, imageUrl, description} = baby;

        return (
            <div className="baby-info">
                <p>{description}</p>
                <h4>{id}</h4>
                <h4>{title}</h4>
                <img src={imageUrl} alt="/" />
            </div>
        )
      })}
    </div>
  )
}
