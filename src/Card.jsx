import React from "react";
import cardStar from "./assets/star.png";

const Card = (props) => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  } else {
    badgeText = "";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
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
