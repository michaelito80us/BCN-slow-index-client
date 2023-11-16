import React from "react";
import Badge from "./Badge";

const Card = ({ category, name, rating }) => {
  return (
    <div className="cards w-[32rem] h-[32rem] bg-primary text-white shadow-xl flex  m-auto mt-10">
      <div className="card-bodys">
        <h2 className="flex justify-center card-title">{category}</h2>
        <p>{name}</p>
        <Badge rating={rating} />
      </div>
    </div>
  );
};

export default Card;
