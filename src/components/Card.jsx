import React from "react";
import Badge from "./Badge";

const Card = () => {
  return (
    <div className="card w-[32rem] h-[32rem] bg-primary text-white shadow-xl flex  m-auto mt-10">
      <div className="card-body">
        <h2 className="card-title flex justify-center">Cartegory</h2>
        <p>Name</p>
        <Badge/>
      </div>
    </div>
  );
};

export default Card;
