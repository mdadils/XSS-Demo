import React from "react";
import Card from "./Card";

const list = Array(10).fill("_");

const CardList = () => {
  return (
    <div className="card-list clear">
      {list.map((_, index) => {
        return <Card key={`cd${index}`} />;
      })}
    </div>
  );
};

export default CardList;
