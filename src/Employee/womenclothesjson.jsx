import React from 'react';
import Women from '../Json/WomenClothes';  // Assuming it's already an array

function Womenclothesjson() {
  // Check if Women is an array before mapping
  if (!Array.isArray(Women)) {
    return <div>Error: Women data is not an array</div>;
  }

  return (
    <div className='clothes-info'>
      {Women.map((woman) => {
        const { id, userId, title, ImageUrl, description } = woman;

        return (
          <div className="clothe-info" key={woman}>
            <p>{description}</p>
            <h4>{title}</h4>
            <h4>{userId}</h4>
            <img src={ImageUrl} alt={title} />
          </div>
        );
      })}
    </div>
  );
}

export default Womenclothesjson;
