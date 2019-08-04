import React from 'react';
import Card from './Card';


const CardList = ({ label, calories, image, url }) => {
  return (
    <div >
      <Card
        key={label}
        label={label}
        calories={calories}
        image={image}
        url={url}
      />
    </div>
  );
};

export default CardList;
