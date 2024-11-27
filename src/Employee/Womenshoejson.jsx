import React from "react";
import WomenShoes from "../Json/WomenShoe";

export default function Womenshoejson() {
  return (
    <div className="shoes-info">
      {WomenShoes.map((womenshoe) => {
        const { id, title, imageUrl, description } = womenshoe;

        return (
          <div className="shoe-info">
            <p>{description}</p>
            <h4>{title}</h4>
            <h4>{id}</h4>
            <img src={imageUrl} alt="/" />
          </div>
        );
      })}
    </div>
  );
}
