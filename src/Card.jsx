import React from "react";
import cardStar from "./assets/star.png";

const Card = (props) => {
  return (
    <div className="Card">
      <img className="card-image" src={props.img} />
      <div className="card-stats">
        <img className="card-star" src={cardStar} />
        <span>{props.rating}</span>
        <span className="gray-1">({props.reviewCount}) • </span>
        <span className="gray-2">{props.country}</span>
      </div>
      <h2>{props.title}</h2>
      <p>
        {" "}
        <span className="bold">From ${props.price} / person</span>
      </p>
    </div>
  );
};

export default Card;
