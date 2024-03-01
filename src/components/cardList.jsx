import React from "react";
import Card from "./Card.jsx";

const CardList = ({robots}) => {

   
    const cardComponent= [];
    for(const item of robots) {
        cardComponent.push(<Card
            key={item.id}
            id={item.id}
            title={item.title}
            completed={item.completed}
          />); 
        }
        
  return (
    <>
    <div className="grid grid-cols-3 justify-between  gap-x-8 gap-y-4">
    {cardComponent}
    </div>

    </>
  );
};

export default CardList;
