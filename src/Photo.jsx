import React from "react";
import photoGrid from "./assets/grid.png";

const Photo = () => {
  return (
    <main className="photo-container">
      <img className="photo-grid" src={photoGrid} alt="grid of photos" />
      <h1 className="grid-headline">Online Experiences</h1>
      <p className="grid-paragraph">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </main>
  );
};

export default Photo;
