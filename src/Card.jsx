import React from "react";
import cardStar from "./assets/star.png";
import swimmer from "./assets/swimmer.jpg";

const Card = () => {
  return (
    <div className="Card">
      <img className="card-image" src={swimmer} />
      <div className="card-stats">
        <img className="card-star" src={cardStar} />
        <span>4.8</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <h2>Swimming lessons with professional swimmer</h2>
      <p>
        {" "}
        <span className="bold">From $155</span>
      </p>
    </div>
  );
};

export default Card;
