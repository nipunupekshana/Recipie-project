import React from 'react';
import './Card.css'

const Card = ({ label, calories, image, url }) => {

  let cal = Math.round(calories);

  return (
    <div className=" tc bg-white dib br3 pa2 ma2 grow bw2 shadow-5">
      <img alt="recipe" src={image} />

      <a href={url} target="_blank" rel="noopener noreferrer">
        <div>
          <a
            className="red link hover-dark-red"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Cooking Instructions
          </a>
          <h2>{label}</h2>
          <p>{cal} calories</p>
        </div>
      </a>
    </div>
  );
};

export default Card;