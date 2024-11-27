import React from 'react';
import WristWatches from '../Json/WristWatch';

export default function Wristwatchjson() {
  return (
    <div className='wristwatches-info'>
      {WristWatches.map((wrist)=> {
        const {id, title, imageUrl, description} = wrist;

        return (
            <div className="wristwatch-info">
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
