import React from "react";
import cardStar from "./assets/star.png";

const Card = (props) => {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  } else {
    badgeText = "";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img className="card-image" src={props.item.coverImg} />
      <div className="card-stats">
        <img className="card-star" src={cardStar} />
        <span>{props.item.stats.rating}</span>
        <span className="gray-1">({props.item.stats.reviewCount}) • </span>
        <span className="gray-2">{props.item.location}</span>
      </div>
      <h2>{props.item.title}</h2>
      <p>
        {" "}
        <span className="bold">From ${props.item.price} / person</span>
      </p>
    </div>
  );
};

export default Card;
